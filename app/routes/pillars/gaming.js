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
        'summary': 'Been playing Nintendo games since I was a kid. Loved every aspect of their immersive worlds, from the story to the characters. Currently kicking it in Smash.',
        'tabs': [
          {
            'title': 'Lovable Iconic Characters',
            'details': "I love Nintendo characters! From Link & Zelda to Peach & Mario to Fox & Falco I love the variety and creativity Nintendo brings to the table with their character and brand development."
          }
        ]
      }, {
        'name': 'Sony',
        'summary': 'My second game console and I have been enthralled since day 1. From Uncharted to Infamous to Ratchet & Clank, I loved every world they built. Currently exploring the magical world of Persona 5.',
        'tabs': [
          {
            'title': 'Open World Adventures',
            'details': "Sony does a fantastic job of creating these massive open worlds for the player to explore. From Shadow of the Colossus to Uncharted, from The Last of Us to Little Big Planet, Sony has built up a hefty cast of characters themselves that rivals Nintendo's in many respects."
          }
        ]
      }, {
        'name': 'Board Games',
        'summary': 'I love board games! I play with my housemates alot, from Splendor to Monopoly Deal to Castles!',
        'tabs': [
          {
            'title': 'Resource Management',
            'details': "From Catan to Terra Mystica, this aspect of board games always fascinated me. Perhaps it's it's semblance to real life. Perhaps SC2 still haunts me. You do not have enough vespene gas!"
          }, {
            'title': 'Lies & Deceit',
            'details': "Ah I love a good ol fashioned game of Avalon or Secret Hitler. Any game that involves putting up a facade and tricking your friends is a must play for me."
          }
        ]
      }, {
        'name': 'Card Games',
        'summary': "Nothing beats card games! ",
        'tabs': [
          {
            'title': 'Old Skool Fun',
            'details': "It's always fun to kick back and play a good game of Big 2 or Landlords and Peasants. Or get serious with a game of Egyptian Rat Screw. You name it."
          }
        ]
      }
    ];
  }
});
