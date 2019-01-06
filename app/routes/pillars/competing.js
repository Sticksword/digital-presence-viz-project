import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        'name': 'Sports',
        'summary': "I try really hard to win at sports, esp tennis and basketball. And maybe snowboarding. IDK",
        'tabs': []
      }, {
        'name': 'Games',
        'summary': 'I have a whole section dedicated to playing games so this is just a rehash about how I love winning.',
        'tabs': []
      }, {
        'name': 'Business',
        'summary': 'I hope to one day enter the world of business again, this time full time.',
        'tabs': []
      }, {
        'name': 'Fitness',
        'summary': "Tryna get dat dorito bod. Former half marathoner. Also tryna dunk but need to bulk first so that's not happening.",
        'tabs': []
      }
    ];
  }
});
