var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");
var css = document.querySelector("h3");
var c1 = document.querySelector(".c1");
var c2 = document.querySelector(".c2");
var body = document.getElementById("gradient");

function styleGenerator() {
	body.style.background = "linear-gradient(to right," + c1.value + ", " + c2.value + ") ";
	css.textContent = body.style.background + ";";
}

c1.addEventListener("input", styleGenerator)
c2.addEventListener("input", styleGenerator)


function inputLength() {
	return input.value.length;
}


function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete!"));
	li.appendChild(btn);
	btn.onclick = removeParent;
}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();

	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);


ul.onclick = function (event) {
	var target = event.target;
	target.classList.toggle("done");
}

function listLength() {
	return listItems.length;
}

function deleteButton() {
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete!"));
	listItems[i].appendChild(btn);
	btn.onclick = removeParent;
}

for (i = 0; i < listLength(); i++) {

	deleteButton();
}

function removeParent(evt) {
	evt.target.parentNode.remove();
} 