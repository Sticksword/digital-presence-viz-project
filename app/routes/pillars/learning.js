import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        'name': 'Continued Education',
        'summary': 'Currently I am enrolled as a masters student for the Georgia Tech Online Masters Program. I did my undergrad at the University of Virginia.',
        'tabs': [
          {
            'title': 'Machine Learning'
          }, {
            'title': 'Economics'
          }
        ]
      }, {
        'name': 'Mystical Lands Through Books',
        'summary': 'I loved to read ever since I was a kid. Nowadays I primarily read and review non-fiction because the genre is basically describing the fantasy (or reality) that we live in!',
        'tabs': [
          {
            'title': 'Fav Books'
          }, {
            'title': 'Fav Quotes'
          }
        ]
      }, {
        'name': 'Hidden Worlds of Language',
        'summary': 'I am very thankful to have spoken Chinese at home while growing up. Currently, I am currently learning Japanese and the bits and pieces of Chinese that I remember helps.',
        'tabs': [
          {
            'title': 'Chinese'
          }, {
            'title': 'Japanese'
          }, {
            'title': 'French'
          }
        ]
      }
    ];
  }
});
