var nameInput = document.querySelector('#name');
var yearInput = document.querySelector('#year');
var submitButton = document.querySelector('#button');
var h3Element = document.querySelector('#url');

function updateURL(event){
	event.preventDefault();
	var name = nameInput.value;
	var year = yearInput.value;
	var h3Value = h3Element.textContent;

	if(name && year){
		h3Value += `?name=${name}&year=${year}`;
	}
	else if(name){
		h3Value += `?name=${name};`
	}
	else if(year){
		h3Value += `?year=${year}`
	}
	h3Element.textContent = h3Value;
}

submitButton.addEventListener('click', updateURL);
