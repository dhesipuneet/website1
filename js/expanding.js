panels = document.querySelectorAll('.panel')

panels.ForEach(panel => {
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