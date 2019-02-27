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
const get_collatz_results = (input) => {
	//verifica se o valor é válido
	if(isNaN(input.value) || input.value <= 1){
		$('#collatz_number_help').removeAttr('hidden');
		$("#collatz_max_number").val("");
		$("#collatz_sequence_size").val("");
		$("#collatz_aditional_info").val("");
		return false;
	} else {
		$('#collatz_number_help').attr("hidden", "true")
	}
	
	let value = parseInt(input.value);
	let result = run_conjecture_repeatedly(value);
	
	if(!result.number){
		$("#collatz_max_number").val("Nenhuma sequência encontrada");
	} else {
		$("#collatz_max_number").val(result["number"]);
		$("#collatz_sequence_size").val(result["seq_size"]);
		if(result["time_to_execute"]){
			$("#collatz_aditional_info").html("Aproximadamente <b>" + result["time_to_execute"].toFixed(3) + "</b> segundos para executar");
		}
	}
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
const get_letter_count_results = (input) => {
	if(!isNaN(input.value) || input.value == ""){
		$('#letter_sequence_help').removeAttr('hidden');
		$("#letters_bigger_sequences").val("");
		$("#letters_aditional_info").val("");
		return false;
	} else {
		$('#letter_sequence_help').attr("hidden", "true")
	}
	
	let result = count_characters(input.value);
	if(!result){
		$("#letters_bigger_sequences").val("Nenhuma sequência de caracteres consecutivos encontrada");
	} else {
		$("#letters_bigger_sequences").val(result["arr"]);
	}
	
	if(result){
		$("#letters_aditional_info").html("Aproximadamente <b>" + result["time_to_execute"].toFixed(3) + "</b> segundos para executar");
	}
	
}