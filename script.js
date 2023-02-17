var nameInput = document.querySelector('#name');
var yearInput = document.querySelector('#year');
var submitButton = document.querySelector('#button');

function updateURL(event){
	event.preventDefault();
	var name = nameInput.value;
	var year = yearInput.value;
	var h3 = h3.innerText;
	alert('e');
	if(name && year){
		// h3.textContent = `${h3}?name=${name}&year=${year}`;
		alert('hello');
	}

}

submitButton.addEventListener('click', updateURL);
