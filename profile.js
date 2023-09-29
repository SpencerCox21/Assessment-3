let gameSubmit = document.querySelector('#gameSubmit')


gameSubmit.addEventListener('submit', (event) => {
    event.preventDefault()
    alert("Your game has been submitted and will soon be under review.");
})




let colorBtn = document.querySelector('#color')
let placeBtn = document.querySelector('#place')
let ritualBtn = document.querySelector('#ritual')


colorBtn.addEventListener('click', () => {
    alert("My favorite color is: Yellow!")
})
placeBtn.addEventListener('click', () => {
    alert("My favorite place is: St. Vincent!")
})
ritualBtn.addEventListener('click', () => {
    alert(`My favorite "ritual" is: Christmas!!!`)
})


