const input = window.localStorage;
if (input.getItem("text") !== undefined)
	document.getElementById("message").innerText = input.getItem("text");

window.addEventListener("DOMContentLoaded", () => {
	document.getElementById("edit").addEventListener("click", handleClick);
});

function handleClick(e) {
	const editor = document.getElementById("editor");
	const message = document.getElementById("message");

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
		window.localStorage.setItem("text", message.innerText);
	}

	e.preventDefault();
}
