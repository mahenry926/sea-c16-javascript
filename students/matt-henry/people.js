var _ = require('lodash');
var people = [
  {
    name: 'Hank',
    age: 29,
    parent: 'Don'
  },
  {
    name: 'Deborah',
    age: 30,
    parent: 'Don'
  },
  {
    name: 'Danny',
    age: 24,
    parent: 'Don'
  },
  {
    name: 'Don',
    age: 64,
    parent: 'Haskell'
  },
  {
    name: 'Kathy',
    age: 75,
    parent: 'Lenora'
  },
  {
    name: 'Haskell',
    parent: 'Finus'
  },
  {
    name: 'Finus'
  }
];

// Return the age of the oldest person in a collection of people
var oldestAge = function( people ) {
	var oldestPerson = _.max(people, 'age');

	return oldestPerson['age'];
};

// Return the names of people that are alive in a collection of people
var living = function( people ) {
	return _.pluck(_.filter(people, 'age'), 'name');
};

// Return the name of the oldest living person in a collection of people
 var oldestLivingPerson = function( people ) {
	var oldestLivingPerson = _.max( _.filter(people, 'age'), 'age');

	return oldestLivingPerson['name'];
};

console.log( 'Age of oldest person: ' + oldestAge(people));
console.log( 'Names of living people:' );
console.log(living(people));
console.log( 'Name of oldest living person: ' + oldestLivingPerson(people));
