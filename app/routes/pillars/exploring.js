import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        'name': 'Continued Education',
        'summary': "",
        'tabs': []
      }, {
        'name': 'Mystical Lands Through Books',
        'summary': '',
        'tabs': []
      }, {
        'name': 'Hidden Worlds of Language',
        'summary': '',
        'tabs': []
      }
    ];
  }
});
