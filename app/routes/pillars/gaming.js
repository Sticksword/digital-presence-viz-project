import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        'name': 'PC',
        'summary': "I've been playing PC games since 2001(?) I built my own gaming rig back during Winter of 2016 and have been playing catch up on my to-play list.",
        'tabs': [
          {
            'title': 'Competitive',
            'details': "I was semi competitive in Heroes of Newerth and Starcraft 2. I hope to someday return to the scene when I don't have to make money for a living."
          }, {
            'title': 'Indie',
            'details': 'I have always loved indie games for their creativity and expressiveness. From Undertale to Braid, I cannot wait for the next big release.'
          }, {
            'title': 'Stories & Adventures',
            'details': "I love story games. I hope to one day craft a story game myself, weaving in anecdotes and a griping plotline for some action packed goodness. It'll be the game of the decade!"
          }
        ]
      }, {
        'name': 'Nintendo',
        'summary': '',
        'tabs': []
      }, {
        'name': 'Sony',
        'summary': '',
        'tabs': []
      }, {
        'name': 'Board Games',
        'summary': '',
        'tabs': []
      }
    ];
  }
});
