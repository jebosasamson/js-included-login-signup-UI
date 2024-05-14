
let SignIn = document.querySelector('.signin')
let SignUp = document.querySelector('.signup')
let form = document.querySelector('.form-container')
let headerContent = document.querySelector('.header-container')

let  rangeButton = document.querySelector('.input-range')
let rangeValue = document.querySelector('.range')

// console.log(rangeButton.value)

// rangeButton.addEventListener('change', function(){
//  rangeValue.textContent = rangeButton.value
// })

function handleSignin (){
    form.style.marginLeft = '0';
    headerContent.style.marginLeft = '0'
    SignUp.style.background = 'none'
    SignIn.style.background = 'rgb(16, 16, 127)'
    SignUp.style.color = 'black'
    SignIn.style.color = 'white'
    
}

function handleSignup (){
    form.style.marginLeft = '-100%';
    headerContent.style.marginLeft = '-100%'
    SignIn.style.background = 'none'
    SignUp.style.background = 'rgb(16, 16, 127)'
    SignIn.style.color = 'black'
    SignUp.style.color = 'white'
   

}


SignIn.addEventListener('click', handleSignin)
SignUp.addEventListener('click', handleSignup )