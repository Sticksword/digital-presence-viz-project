import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        'name': 'Continued Education',
        'summary': 'Currently I am enrolled as a masters student for the Georgia Tech Online Masters Program. I did my undergrad at the University of Virginia.',
        'tabs': [
          {
            'title': 'Computer Science',
            'details': 'I finished my undergrad degree with a BS in CS. During my time as an OMS student, I have taken Machine Learning, Reinforcement Learning, and other ML related courses.'
          }, {
            'title': 'Economics',
            'details': 'I have always been keen on how the world revolves around money, since I grew up having little. This lead me to complete a dual degree in Economics at UVA.'
          }
        ]
      }, {
        'name': 'Mystical Lands Through Books',
        'summary': 'I loved to read ever since I was a kid. Nowadays I primarily read and review non-fiction because the genre is basically describing the fantasy (or reality) that we live in!',
        'tabs': [
          {
            'title': 'Fav Books',
            'details': "I really liked Sapiens, Beginning of Infinity, and Man's Search for Meaning."
          }, {
            'title': 'Fav Quotes',
            'details': 'Life is about your slope, not your y-intercept.'
          }
        ]
      }, {
        'name': 'Hidden Worlds of Language',
        'summary': 'I am very thankful to have spoken Chinese at home while growing up. Currently, I am currently learning Japanese and the bits and pieces of Chinese that I remember helps.',
        'tabs': [
          {
            'title': 'Chinese',
            'details': 'One day I will become literate. Until then, I will have to make due with my Chinglish.'
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
