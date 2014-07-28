// Parses a string and creates an array of strings as separated by a defined separator
var stringCount = function stringDelimiter(str, string_separator) {
        var parsed_array = [], string_place = 0, tempString = '';

        while (string_place < str.length) {
                if (str[string_place] === string_separator) {
			if ( string_place != 0 ) {
                        	parsed_array.push(tempString);
                        	tempString = '';
			}
                } else {
                        tempString += str[string_place];
                }
                string_place++;
        }

	if ( tempString != '' ) {	
	        parsed_array.push(tempString);
        	tempString = '';
	}	
        return parsed_array;
};

console.log('ENDS WITH NO $');
var testString = 'this$example$doesnt$end$with$a$dollar$sign';
console.log('Test string: ' + testString);
var parsedResults = stringCount(testString, '$');
console.log('Parsed results: ');
console.log(parsedResults);

console.log('BEGINS WITH $');
var testString = '$money$starts$with$dollar$signs$';
console.log('Test string: ' + testString);
var parsedResults = stringCount(testString, '$');
console.log('Parsed results: ');
console.log(parsedResults);

console.log('BUNCHES OF $$$');
var testString = 'this$$example$has$empty$$$strings$';
console.log('Test string: ' + testString);
var parsedResults = stringCount(testString, '$');
console.log('Parsed results: ');
console.log(parsedResults);

console.log('ASSIGNMENT EXAMPLE');
var testString = 'this$is$a$fun$example$';
console.log('Test string: ' + testString);
var parsedResults = stringCount(testString, '$');
console.log('Parsed results: ');
console.log(parsedResults);
