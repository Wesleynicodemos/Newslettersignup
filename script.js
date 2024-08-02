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
        localStorage.setItem('text', email)
        paragrafo.style.display = 'none'
        email2.style.borderColor = '#AEAEAE'
        email2.style.background = 'white' 
        window.location.assign("./confirmation.html")  
    } else {
        
        email2.style.borderColor = "red"
        email2.style.background = 'rgba(255, 0, 0, 0.2)'
        paragrafo.style.display = "block"
}
})

//  SCRIPT CONFIMATION PAGE
function userEmail(){
 
    let spanConfirmation = document.querySelector('.span-confirmation')
    spanConfirmation.textContent = `${localStorage.getItem('text')}.`
    spanConfirmation.style.fontWeight = 'bolder'
}

window.addEventListener('load', userEmail())


