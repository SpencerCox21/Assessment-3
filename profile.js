let gameSubmit = document.querySelector('#gameSubmit')



gameSubmit.addEventListener('submit', (event) => {
    event.preventDefault()
    alert("Your game has been submitted and will soon be under review.");
})