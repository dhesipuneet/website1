panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click',() => {
        removeActiceClasses()
        panel.classList.add('active')
    })
})


function removeActiveClasses(){
    panels.foreach(panel => {
        panel.classList.remove('active')
    })
}