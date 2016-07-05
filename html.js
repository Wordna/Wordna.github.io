
function send() {
	if(text != "") {
	var text = document.getElementById("text");
	var comment = text.value;
	var box = document.getElementById("box");
	box.innerHTML = comment;
	document.getElementById("sendf").reset();
	}
}