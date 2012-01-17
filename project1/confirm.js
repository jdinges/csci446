// Simply checks to see if the user inputed anything in
// text field
function checkText() {
	var theText = document.forms["theForm"]["status"].value;
	if(theText == null || theText == ""){
		alert("Surely you feel something!");
	}
}