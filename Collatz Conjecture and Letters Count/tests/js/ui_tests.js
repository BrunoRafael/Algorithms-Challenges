const { test } = QUnit;
QUnit.module( "UI Tests" );

$("#desafio_page").ready(function(frame){
	let iframe = $("#desafio_page")[0].contentWindow.document;
	test( 'Collatz Conjecture UI Basic Tests', (assert) => {
		assert.expect(10);
		
		isFocused = iframe.getElementById("collatz_number") == iframe.activeElement;
		assert.ok(isFocused, "Input conjecture is focused");
		          
		iframe.getElementById("collatz_number").value = "1000000";
		iframe.getElementById("collatz_button_submit").click();
		setTimeout(()=>{}, 3000);
		assert.ok(iframe.getElementById("collatz_max_number").value == "837799", "Min number 837799 is correct");
		assert.ok(iframe.getElementById("collatz_sequence_size").value == "525", "Sequence size number 525 is correct");
		
		let timeToExecute = iframe.querySelector("#collatz_aditional_info b").innerHTML
		assert.ok(timeToExecute <= "5", "The 1000000 number was conjecture run before 5 seconds");
		
		
		iframe.getElementById("collatz_number").value = "10";
		iframe.getElementById("collatz_button_submit").click();
		setTimeout(()=>{}, 3000);
		assert.ok(iframe.getElementById("collatz_max_number").value == "9", "Min number 9 is correct");
		assert.ok(iframe.getElementById("collatz_sequence_size").value == "20", "Sequence size number 9 is correct");
		
		timeToExecute = iframe.querySelector("#collatz_aditional_info b").innerHTML
		assert.ok(timeToExecute <= "5", "The 10 number was conjecture run before 5 seconds");
		
		
		iframe.getElementById("collatz_number").value = "28";
		iframe.getElementById("collatz_button_submit").click();
		setTimeout(()=>{}, 3000);
		assert.ok(iframe.getElementById("collatz_max_number").value == "27", "Min number 27 is correct");
		assert.ok(iframe.getElementById("collatz_sequence_size").value == "112", "Sequence size number 112 is correct");
		
		timeToExecute = iframe.querySelector("#collatz_aditional_info b").innerHTML
		assert.ok(timeToExecute <= "5", "The 28 number was conjecture run before 5 seconds");
	
	});
	
	test( 'Collatz Conjecture UI Error Tests', (assert) => {
		//assert.expect(7);

		iframe.getElementById("collatz_number").value = "bruno";
		iframe.getElementById("collatz_button_submit").click();
		setTimeout(()=>{}, 3000);
		assert.ok(!iframe.getElementById("collatz_number_help").hidden, "collatz Error message is empty correct");
		assert.ok(iframe.getElementById("collatz_max_number").value == "", "Min number is empty correct");
		assert.ok(iframe.getElementById("collatz_sequence_size").value == "", "Sequence size is empty correct");
		assert.ok(iframe.getElementById("collatz_aditional_info").value == "", "Aditional info is empty correct");
		
		iframe.getElementById("collatz_number").value = "1";
		iframe.getElementById("collatz_button_submit").click();
		setTimeout(()=>{}, 3000);
		assert.ok(!iframe.getElementById("collatz_number_help").hidden, "collatz Error message is empty correct");
		assert.ok(iframe.getElementById("collatz_max_number").value == "", "Min number is empty correct");
		assert.ok(iframe.getElementById("collatz_sequence_size").value == "", "Sequence size is empty correct");
		assert.ok(iframe.getElementById("collatz_aditional_info").value == "", "Aditional info is empty correct");
	
	});
	
	test("Collatz and letters integration tests", (assert) => {
		iframe.getElementById("count_letters_button").click();
		assert.ok(!iframe.getElementById("collatz_content").hidden, "Collatz content is hidden");
		iframe.getElementById("collatz_button").click();
		assert.ok(!iframe.getElementById("letter_count_content").hidden, "Letter count content is hidden");
		
	});
	
	test( 'Letter Counter UI Basic Tests', (assert) => {
		//assert.expect(7);

		isFocused = iframe.getElementById("count_letters_word") == iframe.activeElement;
		assert.ok(isFocused, "Input conjecture is focused");
		          
		iframe.getElementById("count_letters_word").value = "aacd";
		iframe.getElementById("letter_button_submit").click();
		setTimeout(()=>{}, 3000);
		assert.ok(iframe.getElementById("letters_bigger_sequences").value == "aa", "Max sequence is 'aa' correct");
		
		let timeToExecute = iframe.querySelector("#letters_aditional_info b").innerHTML;
		assert.ok(timeToExecute < "5", "Time to execute value aacd is correct");
		
		iframe.getElementById("count_letters_word").value = "adddfff";
		iframe.getElementById("letter_button_submit").click();
		setTimeout(()=>{}, 3000);
		assert.ok(iframe.getElementById("letters_bigger_sequences").value == "ddd,fff", "Max sequence is 'ddd,fff' correct");
		
		timeToExecute = iframe.querySelector("#letters_aditional_info b").innerHTML;
		assert.ok(timeToExecute < "5", "Sequence size number 9 is correct");
		
		
		iframe.getElementById("count_letters_word").value = "abnhjkloituyrhhhjjjmnncvbnnn";
		iframe.getElementById("letter_button_submit").click();
		setTimeout(()=>{}, 3000);
		assert.ok(iframe.getElementById("letters_bigger_sequences").value == "hhh,jjj,nnn", "Max sequence is hhh,jjj,nnn correct");
		
		timeToExecute = iframe.querySelector("#letters_aditional_info b").innerHTML;
		assert.ok(timeToExecute < "5", "Sequence size number 112 is correct");
		
	
	});
	
	test( 'Letter Counter UI Error Tests', (assert) => {
		//assert.expect(7);

		iframe.getElementById("count_letters_word").value = "12";
		iframe.getElementById("letter_button_submit").click();
		setTimeout(()=>{}, 3000);
		assert.ok(!iframe.getElementById("letter_sequence_help").hidden, "letters Error message is empty correct");
		assert.ok(iframe.getElementById("letters_bigger_sequences").value == "", "letters_bigger_sequences number is empty correct");
		assert.ok(iframe.getElementById("letters_aditional_info").value == "", "Aditional info is empty correct");
		
		iframe.getElementById("count_letters_word").value = "";
		iframe.getElementById("letter_button_submit").click();
		setTimeout(()=>{}, 3000);
		assert.ok(!iframe.getElementById("letter_sequence_help").hidden, "letters Error message is empty correct");
		assert.ok(iframe.getElementById("letters_bigger_sequences").value == "", "Min number is empty correct");
		assert.ok(iframe.getElementById("letters_aditional_info").value == "", "Aditional info is empty correct");
		
		iframe.getElementById("count_letters_word").value = "abc";
		iframe.getElementById("letter_button_submit").click();
		setTimeout(()=>{}, 3000);
		assert.ok(iframe.getElementById("letters_bigger_sequences").value == "Nenhuma sequência de caracteres consecutivos encontrada", "Max sequence is empty correct");
		assert.ok(iframe.getElementById("letters_aditional_info").value == "", "letters Error message is empty correct");
		
		iframe.getElementById("count_letters_word").value = "-3";
		iframe.getElementById("letter_button_submit").click();
		setTimeout(()=>{}, 3000);
		assert.ok(!iframe.getElementById("letter_sequence_help").hidden, "letters Error message is empty correct");
		assert.ok(iframe.getElementById("letters_bigger_sequences").value == "", "Min number is empty correct");
		assert.ok(iframe.getElementById("letters_aditional_info").value == "", "Aditional info is empty correct");
	
	});
		
});