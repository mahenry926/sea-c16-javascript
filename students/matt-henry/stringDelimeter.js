// Parses a string and creates an array of strings as separated by a defined separator
var stringCount = function stringDelimiter(str, string_separator) {
        var parsed_array = [], string_place = 0, tempString = '';

        while (string_place < str.length) {
                if (str[string_place] === string_separator) {
                        parsed_array.push(tempString);
                        tempString = '';
                } else {
                        tempString += str[string_place];
                }
                string_place++;
        }
        return parsed_array;
};

var testString = 'this$is$a$fun$example$';
console.log('Test string: ' + testString);
var parsedResults = stringCount(testString, '$');
console.log('Parsed results: ');
console.log(parsedResults);
