
function setDate() {                   //Function works and is complete
    const today = new Date();
    todays_date = today.toLocaleDateString();

	document.getElementById("application").value = todays_date;

}//end validateDate

setDate();  


function validateForm() {
	
	
	
	var valid;

	/* *** Applicant Name ******************************************************************************************** */
	let afirst = document.getElementById("afirst");
	let alast = document.getElementById("alast");
	
	if (afirst.value == "") {
		alert("Applicant's First Name is missing");
		return false; }
	
	if (isNaN(afirst.value) == false) {
		alert("Applicant's First Name must contain only letters");
		return false; }
	
	if (alast.value == "") {
		alert("Applicant's Last Name is missing");
		return false; }
	
	if (isNaN(alast.value) == false) {
		alert("Applicant's Last Name must conatin only letters");
		return false; }
	
	/* *** Applicant Address ******************************************************************************************** */
	let astreet = document.getElementById("astreet");
	let acity = document.getElementById("acity");
	var astate = document.getElementById("astate");
	let azip = document.getElementById("azip");
	var ayears = document.getElementById("ayears");
    var amonths = document.getElementById("amonths");
		
	if (astreet.value == "") {
		alert("Applicant's Street Address is missing");
		return false; }
	
	if (acity.value == "") {
		alert("Applicant's City name is missing");
		return false; }
	
	if (isNaN(acity.value) == false) {
		alert("Applicant's City must contain only letters");
		return false; }
	
	valid = validateSelection(astate.selectedIndex); 
	if (valid === false) {
		alert("Select a State for Applicant's address");
		return false; }
	
    valid = validateZip(azip);
    if (valid === false) {
        alert("Applicant ZIP must conatain only numbers and must be 5 numbers in length")
        return false; }
    
	
	valid = validateSelection(ayears.selectedIndex);
	if (valid === false) {
		alert("Number of years Applicant has lived at current address not selected");
		return false; }
	
	valid = validateSelection(amonths.selectedIndex);
	if (valid === false) {
		alert("Number of months Applicant has lived at current address not selected");
		return false; }
		
	/* *** Appicant Age ************************************************************************************************* */	
	let age1 = document.getElementById("aage1");
	let age2 = document.getElementById("aage2");

	if ((ischecked(age1) == false) && (ischecked(age2) == false)) {
        alert("Please select if you are at least 18 years of age or not");
		return false; }

	
	/* *** Applicant Contact Information *********************************************************************************** */
	let primary = document.getElementById("primary");
	let secondary = document.getElementById("secondary");
	let aemail = document.getElementById("aemail");
		
	if (primary.value == "") {
		alert("Applicant's Primary phone number is missing");
		return false; }
    
	valid = validatePhone(primary); 
	if (valid === false) {
		return false; }		
	
	if (aemail.value == "") {
		alert("Applicant's Email address is missing");
		return false; }
		
	valid = validateEmail(aemail);
	if (valid === false) {
		alert("Applicant's Email address invalid");
		return false; }  

    /* *** Postion and Salary ************************************************************************************************* */
    let position = document.getElementById("position");
    let salary = document.getElementById("salary");

    valid = validateSelection(position.selectedIndex); 
    if (valid === false) {
        alert("Select a Position you are applying for");
        return false; }
	
	if (salary.value == "") {
		alert("Enter the salary you are requesting; whole number only, no spaces or commas");
		return false; }

    if (isNaN(salary.value) == true) {
        alert("Enter the salary you are requesting; whole number only, no spaces or commas");
        return false; }

	/* *** Employer Name ************************************************************************************************* */
	let employer = document.getElementById("employer");
	
	if (employer.value == "") {
		alert("Employer's Name is missing");
		return false; }
	
	if (isNaN(employer.value) == false) {
		alert("Employer's Name must contain only letters");
		return false; }
	
	/* *** Employer Address ********************************************************************************************** */
	let estreet = document.getElementById("estreet");
	let ecity = document.getElementById("ecity");
	var estate = document.getElementById("estate");
	let ezip = document.getElementById("employerzip");
		
	if (estreet.value == "") {
		alert("Employer's Street Address is missing");
		return false; }
	
	if (ecity.value == "") {
		alert("Employer's City name is missing");
		return false; }
	
	if (isNaN(ecity.value) == false) {
		alert("Employer's City must contain only letters");
		return false; }
	
	valid = validateSelection(estate.selectedIndex); 
	if (valid === false) {
		alert("Select a State for Employer's address");
		return false; }
	
    valid = validateZip(ezip);
    if (valid === false) {
        alert("Employer ZIP must conatain only numbers and must be 5 numbers in length");
        return false; }
	
	/* *** Supervisor Name *********************************************************************************************** */
    let supervisor = document.getElementById("supervisor");
	
	if (supervisor.value == "") {
		alert("Supervisor's Name is missing");
		return false; }
	
	if (isNaN(supervisor.value) == false) {
		alert("Supervisor's Name must contain only letters");
		return false; }
	
    
    /* *** Supervisor Contact Information ****************************************************************************** */
	let sphone = document.getElementById("supervisorphone");
	let semail = document.getElementById("supervisoremail");
		
	if (sphone.value == "") {
		alert("Supervisor's Primary phone number is missing");
		return false; }    
	
	valid = validatePhone(sphone); 
	if (valid === false) {
		return false; }		
	
	if (semail.value == "") {
		alert("Supervisor's Email address is missing");
		return false; }
		
	valid = validateEmail(semail);
	if (valid === false) {
		alert("Supervisor's Email address invalid");
		return false; }

	let contact1 = document.getElementById("contact1");
	let contact2 = document.getElementById("contact2");

	if ((ischecked(contact1) == false) && (ischecked(contact2) == false)) {
        alert("Please select if we can contact your last supervisor");
		return false; }
	
	/* *** Employment ********************************************************************************************* */
	let sdate = document.getElementById("sdate");
	let edate = document.getElementById("edate");
    let job = document.getElementById("job");
    let duties = document.getElementById("duties");
    let leaving = document.getElementById("leaving");

	console.log(sdate.value);

	/* valid = validateDate(sdate, edate);
    if (valid === false) {
        alert("Sdate and Edate Test Worked");
        return false; } */


    if (sdate.value == "") {
        alert("Start Date Not Selected");
        return false; }
    
    if (edate.value == "") {
        alert("End Date Not Selected");
        return false; }

    if (job.value == "") {
        alert("Job Title missing");
        return false; }
    
    if (duties.value == "") {
        alert("Describe the duties you performed and skills you learned");
        return false; }
    
    if (leaving.value == "") {
        alert("Explain your reason for leaving");
        return false; }

	
	/* *** Education ************************************************************************************************* */
	var highest = document.getElementById("highest");
    var highered = document.getElementById("highered");
    let schoolname = document.getElementById("schoolname");
    let scity = document.getElementById("schoolcity");
    var sstate = document.getElementById("schoolstate");
    let major = document.getElementById("major");
    let degrees = document.getElementById("degrees");

    valid = validateSelection(highest.selectedIndex); 
	if (valid === false) {
		alert("Select Highest Education Achieved");
		return false; }

    valid = validateSelection(highered.selectedIndex); 
	if (valid === false) {
		alert("Select the School Type");
		return false; }

    if (schoolname.value == "") {
        alert("School Name missing");
        return false; }

    if (scity.value == "") {
        alert("The School's City name is missing");
        return false; }
        
    if (isNaN(scity.value) == false) {
        alert("The School's City must contain only letters");
        return false; }

    valid = validateSelection(sstate.selectedIndex); 
    if (valid === false) {
        alert("Select the state in which you attended the school");
        return false; }

    if (major.value == "") {
        alert("Major or Degree is missing");
        return false; }
    
    if (degrees.value == "") {
        alert("Provide details of your educational achievements");
        return false; }
	
	/* *** Work Availability ********************************************************************************************* */
	let availdate = document.getElementById("availdate");
    let hours = document.getElementById("hours");
	
    if (availdate.value == "") {
        alert("Available Date to Start Not Selected");
        return false; }
	
	valid = validateChkBoxWork();
	if(valid === false) {
		alert("Please select the days you are available to work");
		return false; }
	
	let full = document.getElementById("full");
	let part = document.getElementById("part");

	if ((ischecked(full) == false) && (ischecked(part) == false)) {
        alert("Please select if we prefer full or part time work");
		return false; }

    if (hours.value == "") {
        alert("Please fill in how many hours weekly you can work, input only whole numbers less than 125");
        return false; }
    
    if (isNaN(hours.value) == true) {
        alert("How many weekly hours you can work is missing or invalid; use only numbers");
        return false; }
    
    if (hours.value >= 125) {
        alert("An invalid number of hours for weekly hours available to work inputted; must be less than 125 hours per week");
        return false; }
	
    /* *** Transportation ********************************************************************************************* */
	let transyes = document.getElementById("transyes");
	let transno = document.getElementById("transno");

	if ((ischecked(transyes) == false) && (ischecked(transno) == false)) {
        alert("Please select if you have reliable transportation to work");
		return false; }

	let vehicleyes = document.getElementById("vehicleyes");
	let vehicleno = document.getElementById("vehicleno");

	if ((ischecked(vehicleyes) == false) && (ischecked(vehicleno) == false)) {
        alert("Please select if you willing to drive your personal vehicle as part of your duties");
		return false; }

	let dlyes = document.getElementById("dlyes");
	let dlno = document.getElementById("dlno");

	if ((ischecked(dlyes) == false) && (ischecked(dlno) == false)) {
        alert("Please select if you have a valid driver's license");
		return false; }
	
	let dl = document.getElementById("dl");
    var dlstate = document.getElementById("dlstate");
    let dldate = document.getElementById("dldate");

    if (dl.value == "") {
        alert("Driver's License Number Missing");
        return false; }

    valid = validateSelection(dlstate.selectedIndex); 
    if (valid === false) {
        alert("Select the state that issued you your driver's license");
        return false; }
    
    if (dldate.value == "") {
        alert("Driver's License Expiration Date Not Selected");
        return false; }	
    
    /* *** Military ********************************************************************************************* */
    
	let militaryyes = document.getElementById("militaryyes");
	let militaryno = document.getElementById("militaryno");

	if ((ischecked(militaryyes) == false) && (ischecked(militaryno) == false)) {
        alert("Please select if you ever served in the U.S. military");
		return false; }

	var served = document.getElementById("served");

	valid = validateChkBoxMil();
	if(valid === false) {
		alert("Please select which branch of service(s) you served");
		return false; }
    
    valid = validateSelection(served.selectedIndex); 
    if (valid === false) {
        alert("Select how many years total you served in the military");
        return false; }

	let agreeyes = document.getElementById("agreeyes");

	if (ischecked(agreeyes) == false) {
        alert("Please Select 'I agree' to continue");
		return false; }


		valid = validateDate(sdate, edate);
		if (valid === false) {
			alert("Sdate and Edate Test Worked");
			return false; } 

	return false;

	
	
}




function clickedyes(element){
	document.getElementById(element).style.display ="contents";
}

function addwork(element,sect){
	let workdiv = document.getElementById(element);
	var section = document.getElementById(sect);
	workdiv.appendChild(section.cloneNode(true));
} 
function clickedremove(element){
	let el = document.getElementById(element);
	if(el.childElementCount == 1){
		document.getElementById(element).style.display ="none"; 
	} 
	else{
		el.removeChild(el.lastElementChild);
		}
}






function ischecked(value) {
	if (value.checked == true) {
		return true; }
	else {
		return false; }
}

function validateChkBoxWork() {
	var chkBox = document.getElementsByName("chkboxwork[]");
	var lenChkBox = chkBox.length;

	var valid = false;
	for(var i=0; i < lenChkBox; i++) {
		if(chkBox[i].checked == true) {
			valid = true;
			break; }
	}

	if(valid==0) {
		return false; }

	return true; }

function validateChkBoxMil() {
	var chkBox = document.getElementsByName("chkboxmil[]");
	var lenChkBox = chkBox.length;

	var valid = false;
	for(var i=0; i < lenChkBox; i++) {
		if(chkBox[i].checked == true) {
			valid = true;
			break; }
	}

	if(valid==0) {
		return false; }

	return true; }


function validateSelection(value) {
	if (value == "0") {
		return false; }

	return true; }


function validateZip(value) {
    len = value.value.length;

    if (len != 5) {
        return false; }

    if (value.value == "") {
		return false; }		

    if (isNaN(value.value) == true) {
		return false; }

    return true; }


function validatePhone(value) {
	let phone = value.value;
    phone = phone.replace(/[^0-9]/g, "");
		
	if (isNaN(phone) == true) {
		alert(value.name + " number invalid, must contain only numbers");
		return false; }
	
	if (phone.length != 10) {
		alert(value.name + " must be 10 numbers in length");
		return false; }	

	return true; }


function validateEmail(value) {
	let email = value.value;
	let format = /\w+@\w+.\w+/;
	if(format.test(email) === false) {
		return false;
	}

	return true; }




function validateDate(start, end) {
		sdate = start.value;
		edate = end.value;
	
		alert("Sdate: " + sdate);
		alert("Edate: " + edate);
	
		if (sdate == "") {
			alert("Start Date Not elected");
			return false; }
	
		if (edate == "") {
			alert("End Date Not Selected");
			return false; }
	
		if (sdate > edate) {
			alert("Start Date must be before End date");
			return false; }
	
		return true;
} 



