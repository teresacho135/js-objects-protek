// Create a new object with direct instance (using new operator), and add some properties to that object. 
const pokedex = new Object();
this.name = 'Bulbasaur';
this.category = 'Seed';
this.type = [
  'Grass',
  'Poison',
];
this.weakness = [
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

//object.create method
