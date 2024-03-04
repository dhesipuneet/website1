panels = document.querySelectorAll('.panel')

panels.forZEach(panel => {
    panel.addEventListener('click',() => {
        panel.classList.add('active')
    })
})