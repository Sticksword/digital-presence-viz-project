import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        'name': 'Domestic Travels',
        'summary': '',
        'tabs': []
      }, {
        'name': 'Foreign Travels',
        'summary': '',
        'tabs': []
      }, {
        'name': 'World of Music',
        'summary': '',
        'tabs': []
      }, {
        'name': 'World of Fashion',
        'summary': '',
        'tabs': []
      }
    ];
  }
});
