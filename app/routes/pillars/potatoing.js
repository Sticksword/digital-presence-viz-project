import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        'name': 'Writing',
        'summary': 'I am usually a lazy good for nothing potato. When I have some free time, I write. I am not good by any means but someday I would like to write a book!',
        'tabs': [
          {
            'title': 'Medium',
            'details': 'I write from time to time about various things on Medium.'
          }, {
            'title': 'Quora',
            'details': 'I used to write questions and answers on Quora. I used to also keep a blog there.'
          }
        ]
      }, {
        'name': 'Movies',
        'summary': 'I like watching movies. Maybe someday, maybe... I would like to try and do something related to the big screen. Not sure what yet.',
        'tabs': []
      }, {
        'name': 'Shows',
        'summary': "I usually don't watch too much TV but recently I've picked up my fair share of shows. Currently watching Terrace House: Hawaii and looking forward to the final season of Game of Thrones.",
        'tabs': []
      }, {
        'name': 'Fashion',
        'summary': "A potato still gotta look good to be made into a fry!",
        'tabs': []
      }, {
        'name': 'Social Media',
        'summary': "This potato wants to be famous one day for being the frenchiest fry!",
        'tabs': [
          {
            'title': 'YouTube',
            'details': 'Hmm ask me directly about this...'
          }, {
            'title': 'IG',
            'details': 'Currently tryna be a micro influencer but sucking at it.'
          }
        ]
      }
    ];
  }
});
