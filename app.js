const button = document.querySelector('button')
const input = document.querySelector('input')
const div = document.querySelector('div')

div.innerHTML = localStorage.getItem('InputValue')

button.addEventListener('click',(req, res)=> {
    localStorage.setItem('InputValue', [1,2,3,4,5])
    div.innerHTML = input.value
})