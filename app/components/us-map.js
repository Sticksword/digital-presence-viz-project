import Component from '@ember/component';
import layout from '../templates/components/us-map';
import { get } from '@ember/object';
import tip from 'd3-tip';
import { feature, mesh } from 'topojson';

// Import the D3 packages we want to use
import { json, csv } from 'd3-fetch';
import { select } from 'd3-selection';
import { geoMercator, geoPath } from 'd3-geo'

export default Component.extend({
  layout,

  tagName: 'svg',
  classNames: ['us-map'],

  width: 700,
  height: 500,

  attributeBindings: ['width', 'height'],

  didInsertElement() {
    this.draw();
  },

  draw() {
    let plot = select(this.element);
    let width = get(this, 'width');
    let height = get(this, 'height');
    var margin = {top: 0, right: 0, bottom: 0, left: 0 };

    // set projection
    var projection = geoMercator();

    // create path variable
    var path = geoPath().projection(projection);

    var svg = plot.append("svg")
                  .attr("width", width)
                  .attr("height", height)
                  .attr("viewBox", "65 200 870 250")
                  .append("g")
                  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var promises = [];
    promises.push(json("/assets/us.json"));
    promises.push(csv("/assets/cities-lived.csv"));
    Promise.all(promises).then(ready);

    var myTip = tip().attr('class', 'd3-tip')
      .offset([-10, 0])
      .html(function(d) {
        return "<p>" + d.Name + "</p>";
    });

    var citiesLived = [];
    function ready(data) {
      var states = feature(data[0], data[0].objects.states).features
      projection.scale(800).center([-97, 43])

      // add states from topojson
      // ordering can be found here: https://www2.census.gov/geo/docs/reference/state.txt
      svg.selectAll("path")
        .data(states).enter()
        .append("path")
        .attr("class", "feature")
        .style("fill", "#BAD5B7")
        .attr("d", path);
      // put boarder around states
      svg.append("path")
        .datum(mesh(data[0], data[0].objects.states, function(a, b) { return a !== b; }))
        .attr("class", "mesh")
        .attr("d", path);

      data[1].forEach(function(row){
        citiesLived.push({"ID": row.ID,
          "location": [+row.lon, +row.lat],
          "Name": row.place,
          "traffic": +row.years,
          "selected": false});
      });

      // add circles to svg
      svg.selectAll(".circle")
        .data(citiesLived).enter()
        .append("circle")
        .attr("id", function(d) { return "cir-1"; })
        .attr("cx", function (d) {
              console.log(d.location);
              return projection(d.location)[0]; })
        .attr("cy", function (d) { return projection(d.location)[1]; })
        .attr("r", function (d) { return d.traffic; })
        .call(myTip)
        .attr("class", "nonselected-circle")
        .on('mouseover', myTip.show)
        .on('mouseout', myTip.hide);

    }
  }
})
