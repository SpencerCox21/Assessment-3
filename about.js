console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submited');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);



let ducky = document.querySelector('#duckImg')


ducky.addEventListener('mouseover', () => {
	alert("The ducky has now passed it's coolness off to you!")
})


