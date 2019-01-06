import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        'name': 'Work',
        'summary': 'Currently a software engineer at Square, building out customer centric Marketing tools for small businesses.',
        'tabs': [
          {
            'title': 'Marketing',
            'details': 'We help small businesses compete with corporations when it comes to digital marketing. See more: https://squareup.com/us/en/software/marketing'
          }, {
            'title': 'Receipts',
            'details': 'That receipt you got in your email from a Square merchant? I wrote some code for that!'
          }, {
            'title': 'LinkedIn',
            'details': 'My LinkedIn handle is @stoicsleeper and I occasionally post about books, mainly non-programming related.'
          }
        ]
      }, {
        'name': 'Skills & Tools',
        'summary': 'Whatever gets the job done!',
        'tabs': [
          {
            'title': 'Sectors',
            'details': "I like Machine Learning and Full Stack development. Ultimately it's about creating great products."
          }, {
            'title': 'Languages',
            'details': "I like Ruby a lot. I like JS & ES6. I like Python but I'm a bit rusty. I like Dart but I'm just a novice. I like Java for its types but not for its verbosity."
          }
        ]
      }, {
        'name': 'Hackathons',
        'summary': 'I went to a lot back in the day, and won a few of them.',
        'tabs': [
          {
            'title': 'Domestic',
            'details': 'HackUVA. HackVT. HackMIT. PennApps. FebrezeHacks. TreeHacks. HACK HACK QUACK...'
          }, {
            'title': 'International',
            'details': 'Hack the North @ Waterloo. START Hack in St. Gallen'
          }
        ]
      }, {
        'name': 'Other Programming Clout',
        'summary': 'What can I say, I am a nerd.',
        'tabs': [
          {
            'title': 'StackOverflow',
            'details': 'One day I will become literate. Until then, I will have to make due with my Chinglish.'
          }, {
            'title': 'Github',
            'details': 'My handle is Sticksword.'
          }, {
            'title': 'Misc',
            'details': 'l33t h4x0r'
          }
        ]
      }
    ];
  }
});
