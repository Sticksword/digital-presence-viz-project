import Component from '@ember/component'
import layout from '../templates/components/real-aster-plot'
import { run } from '@ember/runloop'
import { get } from '@ember/object'
import tip from 'd3-tip';

// Import the D3 packages we want to use
import { select } from 'd3-selection'
import { transition } from 'd3-transition'
import { easeCubicInOut } from 'd3-ease'
import { pie, arc } from 'd3-shape';

var data = [
  ["FIS",1.1,59,0.5,"#9E0041","Fisheries"],
  ["MAR",1.3,24,0.5,"#C32F4B","Mariculture"],
  ["AO",2,98,1,"#E1514B","Artisanal Fishing Opportunities"],
  ["NP",3,60,1,"#F47245","Natural Products"],
  ["CS",4,74,1,"#FB9F59","Carbon Storage"],
  ["CP",5,70,1,"#FEC574","Coastal Protection"],
  ["TR",6,42,1,"#FAE38C","Tourism &  Recreation"],
  ["LIV",7.1,77,0.5,"#EAF195","Livelihoods"],
  ["ECO",7.3,88,0.5,"#C7E89E","Economies"],
  ["ICO",8.1,60,0.5,"#9CD6A4","Iconic Species"],
  ["LSP",8.3,65,0.5,"#6CC4A4","Lasting Special Places"],
  ["CW",9,71,1,"#4D9DB4","Clean Waters"],
  ["HAB",10.1,88,0.5,"#4776B4","Habitats"],
  ["SPP",10.3,83,0.5,"#5E4EA1","Species"]
];

data.forEach(function(part, index, theArray) {
  var hash = {};
  hash.id     =  part[0]
  hash.order  = part[1];
  hash.color  =  part[4];
  hash.weight = part[3];
  hash.score  = part[2];
  hash.width  = part[3];
  hash.label  =  part[5];
  theArray[index] = hash;
});

// inspiration: http://bl.ocks.org/bbest/2de0e25d4840c68f2db1
export default Component.extend({
  layout,

  tagName: 'svg',
  classNames: ['aster-plot'],

  width: 500,
  height: 500,

  attributeBindings: ['width', 'height'],

  init() {
    this._super()
    this.data = []
  },

  didInsertElement() {
    this.draw();
  },

  draw() {
    let plot = select(this.element);
    let width = get(this, 'width');
    let height = get(this, 'height');
    var radius = Math.min(width, height) / 2,
        innerRadius = 0.3 * radius;


    var asterPie = pie()
        .value(function(d) { return d.width; });
    console.log(data);

    var tooltip = tip()
      .attr('class', 'd3-tip')
      .offset([0, 0])
      .html(function(d) {
        console.log(d);
        return d.data.label + ": <span style='color:orangered'>" + d.data.score + "</span>";
      });

    var asterArc = arc()
      .innerRadius(innerRadius)
      .outerRadius(function (d) {
        return (radius - innerRadius) * (d.data.score / 100.0) + innerRadius;
      });

    var outlineArc = arc()
            .innerRadius(innerRadius)
            .outerRadius(radius);

    var svg = select("body").append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    svg.call(tooltip);

    var path = svg.selectAll(".solidArc")
        .data(asterPie(data))
      .enter().append("path")
        .attr("fill", function(d) { return d.data.color; })
        .attr("class", "solidArc")
        .attr("stroke", "gray")
        .attr("d", asterArc)
        .on('mouseover', tooltip.show)
        .on('mouseout', tooltip.hide);

    var outerPath = svg.selectAll(".outlineArc")
        .data(asterPie(data))
      .enter().append("path")
        .attr("fill", "none")
        .attr("stroke", "gray")
        .attr("class", "outlineArc")
        .attr("d", outlineArc);


    // calculate the weighted mean score
    var score =
      data.reduce(function(a, b) {
        //console.log('a:' + a + ', b.score: ' + b.score + ', b.weight: ' + b.weight);
        return a + (b.score * b.weight);
      }, 0) /
      data.reduce(function(a, b) {
        return a + b.weight;
      }, 0);

    svg.append("svg:text")
      .attr("class", "aster-score")
      .attr("dy", ".35em")
      .attr("text-anchor", "middle") // text-align: right
      .text(Math.round(score));

    // EXIT
    // circles
    //   .exit()
    //   .transition(t)
    //   .attr('r', 0)
    //   .remove()

    // // ENTER
    // let enterJoin = circles
    //   .enter()
    //   .append('circle')
    //   .attr('fill', 'steelblue')
    //   .attr('opacity', 0.5)

    //   // Set initial size to 0 so we can animate it in from 0 to actual scaled radius
    //   .attr('r', () => 0)
    //   .attr('cy', () => height / 2)
    //   .attr('cx', d => xScale(d.timestamp))

    // // MERGE + UPDATE EXISTING
    // enterJoin
    //   .merge(circles)
    //   .transition(t)
    //   .attr('r', d => yScale(d.value) / 2)
    //   .attr('cy', () => height / 2)
    //   .attr('cx', d => xScale(d.timestamp))
  }
})
