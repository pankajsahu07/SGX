
	
function hideloadingpage() {
	
	
if (document.getElementById) { // DOM3 = IE5, NS6
document.getElementById('hidepage').style.visibility = 'hidden';

}
else {
if (document.layers) { // Netscape 4

	document.hidepage.visibility = 'hidden';
}
else { // IE 4

	document.all.hidepage.style.visibility = 'hidden';

}
}
}
function showloadingpage() {
	
	
if (document.getElementById) {
	
	 // DOM3 = IE5, NS6
document.getElementById('hidepage').style.visibility = 'visible';
}
else {
if (document.layers) { // Netscape 4
document.hidepage.visibility = 'show';
}
else { // IE 4
document.all.hidepage.style.visibility = 'visible';
}
}

}
// End -->

