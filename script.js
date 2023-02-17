var nameInput = document.querySelector('#name');
var yearInput = document.querySelector('#year');
var submitButton = document.querySelector('#button');

function updateURL(event){
	event.preventDefault();
	var name = nameInput.value;
	var year = yearInput.value;

}

submitButton.addEventListener('click', updateURL);
