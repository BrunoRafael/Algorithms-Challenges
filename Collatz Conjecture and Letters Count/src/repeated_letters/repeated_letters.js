/**
 * This function receives a word and returns a list with the largest sequence of repeated letters found. 
 * If other sequences are the same as the largest, they will also be returned in the list.
 * 
 * @param {String} required  parameter
 * 	 The entry must contain a sequence of letters [A-Z] [a-z] from the ASCII table or an empty string of characters
 *
 * @returns {List}
 * 	 The i-th position indicates the sequence that presented the largest size.
 *
 * @example 
 *   count_letters("Gooooolaaaaaçooo"); // ["ooooo", "aaaaa"]
 * 
 */ 

var count_characters = (word) => {
	
	if(!word) return null;
	
	let start_time = performance.now();
	
	let result_array = [];
	for (let i = 0; i < word.length; i++){
		let char_sequence = word[i];
		while(word[i+1] == word[i]){
			char_sequence += word[i];
			i++;
		}
		
		// If char_sequence is equals to bigger element in result_array, just add the element to the end of the array
		if(!result_array.includes(char_sequence)){
			if(result_array.length == 0 || char_sequence.length == result_array[0].length){
				result_array.push(char_sequence);
			} else if(char_sequence.length > result_array[0].length){
				// If the current char_sequence is greater than all items in the result array then it is the largest
				result_array = [];
				result_array.push(char_sequence);
			}
		}
	}
	
	let end_time = performance.now();
	let time_in_seconds = 0.001 * (end_time - start_time);
	
	return result_array[0].length > 1 ? {time_to_execute:time_in_seconds, arr: result_array}: null;
}