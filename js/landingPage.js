toggle = document.getElementById('toggle')
open = document.getElementById('open')
model = document.getElementById('model')
close = document.getElementById('close')



toggle.addEventListner('click', () => {
    document.body.classList.toggle('show-nav')
})

open.addEventListerner('click', () => {
    modal.classList.add('show-model')
})

close.addEventListener('click', () => {
    modal.classList.remove('show-model)
})