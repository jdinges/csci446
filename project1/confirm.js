function checkText() {
	var theText = document.forms["theForm"]["status"].value;
	if(theText == null || theText == ""){
		alert("Surely you feel something!");
	}
}