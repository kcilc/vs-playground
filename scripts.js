const editor = document.getElementById("editor");
const message = document.getElementById("message");

function handleClick(e) {

	if (editor.classList.contains("hidden")) {
		editor.classList.remove("hidden");
		message.classList.add("hidden");
		editor.children[0].value = message.innerText;
		editor.children[0].focus();
		editor.children[0].setSelectionRange(0, editor.children[0].value.length);
	} else if (message.classList.contains("hidden")) {
		message.classList.remove("hidden");
		editor.classList.add("hidden");
		message.innerText = editor.children[0].value;
		localStorage.setItem("text", message.innerText);
	}

	e.preventDefault();
}

message.innerText = localStorage.getItem("text") ?? 'Edit this!';
window.addEventListener("DOMContentLoaded", () => editor.addEventListener("click", handleClick));