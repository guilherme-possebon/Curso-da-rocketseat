const abrirJanela = document.getElementById('openModal')
const div1 = document.querySelector('#div1')
const div2 = document.querySelector('#div2')

abrirJanela.addEventListener('click', open)
function open() {
    div1.classList.remove('invisible')
}

document.addEventListener('keydown', function(event) {
    const isEscKey = event.key === 'Escape'
    if(isEscKey == true) {
        div1.classList.add('invisible')
    }
})
