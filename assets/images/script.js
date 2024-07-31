const input = document.querySelector('.button')
const paragrafo = document.querySelector('.paragrafo')
const email2=document.querySelector('#email')

input.addEventListener('click', (e)=>{
    e.preventDefault()
    const email = document.querySelector('#email').value
    const usuario = email.substring(0, email.indexOf('@'))
    const dominio = email.substring(email.indexOf('@')+1, email.length)
    const email2=document.querySelector('#email')
    const paragrafo = document.querySelector('.paragrafo')

    if ((email.search('@')!=-1) && 
    (usuario.length =1) &&
    (dominio.length >=3) &&
    (usuario.search("@")==-1) &&
    (dominio.search("@")==-1) &&
    (usuario.search(" ")==-1) &&
    (dominio.search(" ")==-1) &&
    (dominio.search(".")!=-1) &&
    (dominio.indexOf(".") >=1)&&
    (dominio.lastIndexOf(".") < dominio.length - 1))   {
        paragrafo.style.display = 'none'
        email2.style.borderColor = '#AEAEAE'
        email2.style.background = 'white'   
    } else {
        
        email2.style.borderColor = "red"
        email2.style.background = 'rgba(255, 0, 0, 0.2)'
        paragrafo.style.display = "block"
}
})

