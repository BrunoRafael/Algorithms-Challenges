
const { test } = QUnit;
QUnit.module( "Collatz Conjecture" );
//tests for the collantz conjecture algorithm
test("Collatz Conjecture Basics", function( assert ) {
	//teste values < 0
	assert.equal(collatz_conjecture(0), null);
	assert.equal(collatz_conjecture(-1), null);
	assert.equal(collatz_conjecture(-12500), null);
	
	//test values between 1 and 4
	let json_result = collatz_conjecture(1);
	assert.equal(json_result["number"], 1);
	assert.equal(json_result["seq_size"], 1);
	
	json_result = collatz_conjecture(3)
	assert.equal(json_result["number"], 3);
	assert.equal(json_result["seq_size"], 8);
	
	json_result = collatz_conjecture(4)
	assert.equal(json_result["number"], 4);
	assert.equal(json_result["seq_size"], 3);
	
	//test other values
	//collatz online calculator - https://www.dcode.fr/collatz-conjecture
	json_result = collatz_conjecture(1000000)
	assert.equal(json_result["number"], 1000000);
	assert.equal(json_result["seq_size"], 153);
	
	json_result = collatz_conjecture(27)
	assert.equal(json_result["number"], 27);
	assert.equal(json_result["seq_size"], 112);
	
	json_result = collatz_conjecture(10000000)
	assert.equal(json_result["number"], 10000000);
	assert.equal(json_result["seq_size"], 146);
	
	json_result = collatz_conjecture(5)
	assert.equal(json_result["number"], 5);
	assert.equal(json_result["seq_size"], 6);
	
	json_result = collatz_conjecture(9)
	assert.equal(json_result["number"], 9);
	assert.equal(json_result["seq_size"], 20);
});

test("Collantz Conjecture Repeated", function( assert ) {
	//teste values <= 1
	let json_result = run_conjecture_repeatedly(-10);
	assert.equal(json_result["number_selected"], -10);
	assert.equal(json_result["number"], null);
	assert.equal(json_result["seq_size"], null);
	
	json_result = run_conjecture_repeatedly(0);
	assert.equal(json_result["number_selected"], 0);
	assert.equal(json_result["number"], null);
	assert.equal(json_result["seq_size"], null);
	
	json_result = run_conjecture_repeatedly(1);
	assert.equal(json_result["number_selected"], 1);
	assert.equal(json_result["number"], null);
	assert.equal(json_result["seq_size"], null);
	
	//Test values with result is not null
	json_result = run_conjecture_repeatedly(2);
	assert.equal(json_result["number_selected"], 2);
	assert.equal(json_result["number"], 1);
	assert.equal(json_result["seq_size"], 1);
	
	json_result = run_conjecture_repeatedly(3);
	assert.equal(json_result["number_selected"], 3);
	assert.equal(json_result["number"], 2);
	assert.equal(json_result["seq_size"], 2);
	
	json_result = run_conjecture_repeatedly(4);
	assert.equal(json_result["number_selected"], 4);
	assert.equal(json_result["number"], 3);
	assert.equal(json_result["seq_size"], 8);
	
	json_result = run_conjecture_repeatedly(10);
	assert.equal(json_result["number_selected"], 10);
	assert.equal(json_result["number"], 9);
	assert.equal(json_result["seq_size"], 20);
	
	json_result = run_conjecture_repeatedly(28);
	assert.equal(json_result["number_selected"], 28);
	assert.equal(json_result["number"], 27);
	assert.equal(json_result["seq_size"], 112);
	
	json_result = run_conjecture_repeatedly(100);
	assert.equal(json_result["number_selected"], 100);
	assert.equal(json_result["number"], 97);
	assert.equal(json_result["seq_size"], 119);
	
	json_result = run_conjecture_repeatedly(10000);
	assert.equal(json_result["number_selected"], 10000);
	assert.equal(json_result["number"], 6171);
	assert.equal(json_result["seq_size"], 262);
	
	//test value 1000000	
	json_result = run_conjecture_repeatedly(1000000);
	assert.equal(json_result["number_selected"], 1000000);
	assert.equal(json_result["number"], 837799);
	assert.equal(json_result["seq_size"], 525);

	assert.ok( json_result["time_to_execute"] <= 5, "Passed! Time execute: " + json_result["time_to_execute"] );
	
});
