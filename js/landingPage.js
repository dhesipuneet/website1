toggle = document.getElementById('toggle')
open = document.getElementById('open')
modal = document.getElementById('modal')
close = document.getElementById('close')


//toggle nav
toggle.addEventListner('click', () => {
    document.body.classList.toggle('show-nav')
})

//show modal
open.addEventListerner('click', () => {
    modal.classList.add('show-modal')
})


// Hide modal
close.addEventListener('click', () => {
    modal.classList.remove('show-modal')
})

//hide modal on outside click
.window.addEventListner('click', (e) => {
    if (e.target == modal) {
        modal.classList.remove('show-modal')
    }
}
)