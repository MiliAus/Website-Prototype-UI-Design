

function setDate() {                   //Function works and is complete
    const today = new Date();
    todays_date = today.toLocaleDateString();
    
    
     document.getElementById("application").value = todays_date;
    
}//end validateDate


function testNumber(value){      //Function works and is complete
	
	if(isNaN(value)){  //if not a number
        return false;
    }
    else{              //if a number
        return true;
    }
	
}//end testNumber
function testLength(value, length){  //Function works and is complete
  

	if(value == length){
		return true;
	}
	else{
		return false;
	}
 } //testLength

function validateControl(control, name, length){ //Function works and is complete
    con_len = control.length;
    
	 if(testLength(con_len,length) == false){
         alert(name+" is the incorrect length. Please type again.");
         return false;
     }
     if((testLength(con_len,length) == true) && (testNumber(control) == false)){
        alert(name+" is not a number. Please type again.");
        return false;
     }
     else{
         return true;
     }
     
	
} //end validateControl

function validateEmail(value){ //Function works and is complete
	
	const reg = /([a-z\d\-\.\+\/\!\%]+)@([a-z\d\-]+)\.([a-z]+).?([a-z]+)?$/i;
	
    
    if(reg.test(value) == true){   //if it passes and is a valid email
        return true;
    }
    else{
        alert("Email Address is incorrect. Please try again.");
        return false;
    }


}//end validateEmail
function ischecked(value){
	
	console.log(value.checked);
	
	if(value.checked == true){
		return true;
	}
	else{
		return false;
	} 
	
}




setDate(); //set the date for the form to be todays date

function validateForm(){           /* MAKE THIS THE LAST FUNCTION CALL ALL SUB FUNCTIONS IN THIS ONE */
	
	
	if(validateControl(document.getElementById("azip").value, "Zip", 5) == true)
		alert("zip is good");
	if(validateEmail(document.getElementById("aemail").value) == true)
		alert("email is good");
	
	//checking 18 years old is checked//Complete
	if((ischecked(document.getElementById("aage1")) == true) || (ischecked(document.getElementById("aage2")) == true)){
		alert("checked is good");
	}
	else{
		alert("Are you at least 18 years of age:* is not checked.\n\n Please check before submitting.");
	}

	
	
	return false;
	






}//end validateForm

