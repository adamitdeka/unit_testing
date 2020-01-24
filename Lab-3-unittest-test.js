//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE UNIT TEST ==========
//alert("lab 3 UNIT TEST");//please delete this line once connected.
function test_checkHumbrId(valueIn,expected){
	let result = checkHumbrId(valueIn);
	var pass = "==PASSED==";
	var fail = "xxFAILEDxx";
	let msg = "";
	if(result === expected)
	{
		msg = "Value tested: " + valueIn + "  |  Expected Result: " +expected +"  |  Result: "+result +" <span style='color:green'>"+ pass+"</span><br/>";
	}
	else 
	{
	    msg = "Value tested: " + valueIn + " |Expected Result: " +expected +"   |  Result: "+result +" <span style='color:red'>"+fail+"</span><br/>";
	}
	let msgBox = document.getElementById("data");
	msgBox.innerHTML += msg;
}

test_checkHumbrId('N12345678',false);//test to pass
test_checkHumbrId('P12345678',false);//test to fail
test_checkHumbrId('N123456789',false);//test to fail
test_checkHumbrId('N1234567',false);//test to fail
test_checkHumbrId('n12345678',true);//test to pass
test_checkHumbrId('n123456789',false);//test to fail
test_checkHumbrId('',false);//test to fail




