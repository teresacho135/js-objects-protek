// Create a new object with direct instance (using new operator), and add some properties to that object. 
const pokedex = new Object();
pokedex.name = 'Bulbasaur';
pokedex.category = 'Seed';
pokedex.type = [
  'Grass',
  'Poison',
];
pokedex.weakness = [
  'Fire',
  'Flying',
  'Ice',
  'Psychic',
];

// console.log(pokedex);

// USING OBJECT LITERALS

const pokedexTwo = {
  name: 'Ninetails',
  category: 'Fox',
  type: 'Fire',
  weakness: [
    'Ground',
    'Rock',
    'Water',
  ]
};

// console.log(pokedexTwo);

//Object.create Method + classes

// Accessing all properties of that object.
// console.log(pokedexTwo.weakness[1]);
// returns 'Rock'
// console.log(pokedex.weakness);
// returns [Array]

// Create a new object with a user-defined function, and add some properties
  // to that object access all properties of the object.

function PokedexThree (name, category, type, weakness) {
    this.name = name;
    this.category = category;
    this.type = type;
    this. weakness = weakness;
  };

  const Snorlax = new PokedexThree(
      'Snorlax',
      'Sleeping',
      'Normal',
      'Fighting'
  );

  // console.log(Snorlax.type)
  // returns 'Sleeping'

  // Create a new object, and some properties, also add a function along with the object.

  const pokedexFour = {
    name: 'Oddish',
    category: 'Weed',
    type: [
      'Grass', 
      'Poison',
    ],
    weakness: [
      'Fire',
      'Flying',
      'Ice',
      'Psychic',
    ],
    gender: function() {
      return this.name + ' can be either female or male.'
    }
  };

  // console.log(pokedexFour.gender());
  //returns 'Oddish can be either female or male'