import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        'name': 'Spring 2019',
        'summary': "January through April",
        'tabs': [
          {
            'title': 'Classes',
            'details': "Get A's in both CS 6460: Educational Tech and CS 8803: AI for Robots"
          }, {
            'title': 'Business',
            'details': 'Build a business with Michelle (?)'
          }, {
            'title': 'Get huge & stay healthy',
            'details': 'Play basketball & tennis. Hit the gyms hard every weekday. Bike to work. Go to sleep early fucker.'
          }, {
            'title': 'Square',
            'details': 'Work towards L5, and also maintain strict schedule and become more efficient'
          }, {
            'title': 'Misc extracurriculars?',
            'details': 'Read from time to time. Japanese (can practice with Michelle when there is rare free time). Piano.'
          }, {
            'title': 'Relax and enjoy the ride',
            'details': "Don't forget to jerk off every now and then :)"
          }
        ]
      }, {
        'name': 'Summer 2019',
        'summary': 'May through August',
        'tabs': [
          {
            'title': 'Create',
            'details': "Either build upon Buddy or think of new things(?)"
          }, {
            'title': 'Waifu 4 laifu',
            'details': '?'
          }, {
            'title': 'Something',
            'details': 'Lorem Ipsum'
          }
        ]
      }, {
        'name': 'Autumn 2019',
        'summary': 'September through December',
        'tabs': [
          {
            'title': 'Classes',
            'details': "Get A's"
          }, {
            'title': 'Waifu 4 laifu',
            'details': '?'
          }, {
            'title': 'Something',
            'details': 'Lorem Ipsum'
          }
        ]
      }
    ];
  }
});
