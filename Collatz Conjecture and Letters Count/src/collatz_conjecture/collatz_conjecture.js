/**
 * This function applies the collantz conjecture to a number n passed as a parameter and returns
 * the number of numbers generated in the sequence
 * 
 * @param {Number} required  parameter
 *
 * @returns {List}
 * 	 The first position is the n
 *   The second position is the size of the generated sequence
 *
 * @example 
 *   collatz_conjecture(13, 10); // [13, 10]
 * 
 */ 
const collatz_conjecture = (n) => {
	
	if(n <= 0){
		//Conjecture works for positive integers
		return null;
	}	
	// The number one is contabilized
	let count = 1, x = n;
	
	if(x <= 4){
		while(x != 1){
			x = (x % 2 == 0) ? x/2 : (3*x)+1;
			count++;
		}
	} else {
		// Removes the check from the three numbers that always repeat (4,2,1)
		// This prevents the execution of approximately 3000000 times this loop for a n = 1000000 for example
		while(x != 4){
			x = (x % 2 == 0) ? x/2 : (3*x)+1;
			count++;
		}
		//The number four and two is contabilized
		count += 2;
	}
	return {number: n, seq_size: count};
	
}

/**
 * This function performs the collantz conjecture for all positive integers less than
 * x and returns a list with the largest sequence size and number that generates this sequence
 * 
 * @param {Number} required  parameter
 *   The number whose minors, the conjecture will be applied
 *
 * @returns {List}
 * 	 The first position is the number that generated the largest collantz sequence
 * 	 The second position is the largest sequence size generated
 *
 * @example 
 *   run_conjecture_repeatedly(13, 10); // [13, 10]
 * 
 */
const run_conjecture_repeatedly = (x) => {
	
	let start_time = performance.now();
	bigger = {number_selected: x, number: null, seq_size: null};
	for( let i = 1; i < x; i++ ){
		let json_result = collatz_conjecture(i);
		//Tests whether the i-th value in the sequence up to x is greater than the current value found
		if(json_result["seq_size"] > bigger["seq_size"]){
			bigger["number"] = json_result["number"];
			bigger["seq_size"] = json_result["seq_size"];
		}
	}
	let end_time = performance.now();
	let time_in_seconds = 0.001 * (end_time - start_time);
	
	bigger["time_to_execute"] = time_in_seconds;
	return bigger;
	
}