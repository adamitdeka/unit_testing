//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE UNIT TEST ==========
//alert("lab 3 UNIT TEST");//please delete this line once connected.
function test_checkHumbrId(valueIn,expected){
	let result = checkHumbrId(valueIn);
	var pass = "==PASSED==";
	var fail = "xxFAILEDxx";
	let msg = "";
	if(valueIn === expected)
	{
		msg = "Value tested:" + valueIn + "|Expected Result" +expected +"|Result"+result + pass+"<br/>";
	}
	else 
	{
	    msg = "Value tested:" + valueIn + "|Expected Result" +expected +"|Result"+result +fail+"<br/>";
	}
	let msgBox = document.getElementById("data");
	msgBox.innerHTML += msg;
}
