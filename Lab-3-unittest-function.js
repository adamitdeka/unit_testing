//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE checkHumbrId FUNCTION ==========
//alert("lab 3 Function");//please delete this line once connected.
/** checkHumbrId Function
 * Validate input as a Humber College Student number.
 * Returns true if input validates.
 * @param {string} idIn
 */
function checkHumbrId(stuId){
    var regex = /^[n|N]\d{8}$/;
    let validId = false;
    if(regex.test(stuId)){
        validId = true;
        //console.log("amit"+(regex.test(stuId)));
    }
    return validId;
 }
