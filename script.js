function setDate() {                   //Function works and is complete
    const today = new Date();
    todays_date = today.toLocaleDateString();
    
    
     document.getElementById("application").value = todays_date;
    
}//end validateDate

//navbar////////////////////////////////////////////////////////////////

  

setDate();



