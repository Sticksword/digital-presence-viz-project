import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        'name': 'Fam bam',
        'summary': 'This is my family!',
        'tabs': []
      }, {
        'name': 'Fam bam away from home',
        'summary': 'These are my friends!',
        'tabs': []
      }, {
        'name': 'Waifu',
        'summary': '',
        'tabs': []
      }
    ];
  }
});
