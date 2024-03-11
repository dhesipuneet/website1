toggle = document.getElementById('toggle')
open = document.getElementById('open')
m0del = document.getElementById('model')


toggle.addEventListner('click', () => {
    document.body.classList.toggle('show-nav')
})

open.addEventListerner('click', () => {
    modal.classList.add('show-model')
})