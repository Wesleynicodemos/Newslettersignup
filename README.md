# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page


### Links

- Solution URL: https://github.com/Wesleynicodemos/Newslettersignup/
- Live Site URL: https://wesleynicodemos.github.io/Newslettersignup/



### Built with

- Semantic HTML5 markup
- CSS 
- JavaScript

### What I learned

I could learn how to validate a email using javascript and consolidate knowledge.


```js
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
```

### Useful resources

- https://www.devmedia.com.br/ - This helped me to understand how to validade the user email.
- https://developer.mozilla.org/ - This helped me to understand some javascript methods.
