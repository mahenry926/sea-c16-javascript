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

var oldestLivingParent = function oldestLivingParent(people) {
	var i = 0;
	var j = 0;
	var oldestLivingParent = {};
	var parents = [];
	
	
	for (i = 0; i < people.length; i++) {
		if(people[i].parent) {
			if (parents.length === 0) {
				parents.push(people[i].parent);
			} else 	{
				for (j = 0; j < parents.length; j++) {
					if (people[i].parent !== parents[j]) {		
						parents.push(people[i].parent);
						break;
					}
				}
			}
		}
	}

	for (i = 0; i < people.length; i++ ){
		if (people[i].age ) {
			for (j = 0; j < parents.length; j++ ) {	
				if (people[i].name === parents[j]) {
					oldestLivingParent = people[i];
				}
			}
		}
	}

	return oldestLivingParent.name;
};

console.log(oldestLivingParent(people));
