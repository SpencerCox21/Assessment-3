console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Your Contact Us form has now been submitted. Thank You!');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);



let gangstaDucky = document.querySelector('#duckImg')


gangstaDucky.addEventListener('mouseover', () => {
	alert("The Gangsta Ducky has now passed it's coolness off to you!")
})


 