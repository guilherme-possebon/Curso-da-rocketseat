// const element = document.querySelector('header')

// element.textContent += ", ola"
// element.innerText = 'ola'
// element.innerHTML = 'Ola <img src="pattern001.png" alt="">'
// element.value = 'aaaaaaaaaaaaa'
// element.setAttribute('Id', 'cabecalho')

// -------------------------------------------------------------------------------------

// const headerId = document.querySelector('#cabecalho')
// console.log(headerId.getAttribute('id'));

// header.removeAttribute('id')
// header.removeAttribute('class')
// element.setAttribute('class', 'classe classe2')

// -------------------------------------------------------------------------------------

// const element = document.querySelector('body')
// element.style.backgroundColor = 'blue'

// -------------------------------------------------------------------------------------

// const element = document.querySelector('h1')

// element.classList.add('text')
// // element.classList.remove('text')
// element.classList.toggle('text')
// O toggle é como se fosse um interruptor, se está ligado, ele desliga, se estiver desligado, ele liga

// -------------------------------------------------------------------------------------

// const element = document.querySelector('head')

// console.log(element.parentElement);
// // parentElement e parentNode

// -------------------------------------------------------------------------------------

// const el = document.querySelector('body')

// console.log(el.children);
// // children e childNodes (Os text são espaços vazios) 


// console.log(el.firstElementChild);
// // firstChild (O text é espaço vazio) e firstElementChild

// console.log(el.lastElementChild);
// // lastChild e lastElementChild

// -------------------------------------------------------------------------------------

// const el = document.querySelector('script')

// console.log(el.nextElementSibling);
// // nextSibling (O text é espaço vazio) nextElementSibling --> Ambos mostram o proximo irmão

// console.log(el.previousElementSibling);
// // previousSibling (O text é espaço vazio) nextElementSibling --> Ambos mostram o proximo irmão

// -------------------------------------------------------------------------------------

// const divconst = document.createElement('div')
// divconst.innerText = 'Ola mundo'

// const bodyconst = document.querySelector('body')
// const inputconst = bodyconst.querySelector('input')
// const headerconst = bodyconst.querySelector('header')

// body.prepend(div)
// // append (Vai por dps de tudo) prepend (vai por antes de tudo)
// bodyconst.insertBefore(divconst, inputconst) // se lê (a divconst vai ficar antes do inputconst)
// bodyconst.insertBefore(divconst, headerconst.nextElementSibling) // Se lê (a divconst vai ficar antes do headerconst, mas como o headerconst tem o (nextElementSibling) a div vai ficar depois do header)

// -------------------------------------------------------------------------------------

// Eventos

// function print() {
//     console.log('print');
// }

// const inputconst = document.querySelector('input')
// inputconst.onkeyup = function() {
//     inputconst.style.backgroundColor = 'red'
//     console.log('para cima');
// }

// inputconst.onkeydown = function() {
//     inputconst.style.backgroundColor = 'green'
//     console.log('para baixo');
// }

// -------------------------------------------------------------------------------------

// const h1const = document.querySelector('h1')

// h1const.addEventListener('mouseenter', entrou)
// h1const.addEventListener('mouseleave', entrou)
// function entrou() {
//     console.log('entrou');
// }

// -------------------------------------------------------------------------------------

// Argument event

const inputconst = document.querySelector('h1')

inputconst.onkeydown = function(event) {
    console.log(event);
}