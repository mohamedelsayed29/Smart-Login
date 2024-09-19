let signInPage=document.getElementById('signIn')
let signInEmailInput=document.getElementById('signInEmail')
let signInPasswordInput=document.getElementById('signInPassword')
let signInBtn=document.getElementById('signInBtn')
let validSignIn=document.getElementById('validSignIn')
let newAccounts=[] 

    newAccounts=JSON.parse(localStorage.getItem('newAccounts'))

signInBtn?.addEventListener('click',function signInAccount(){
    if(validationSignInPassword()&&validationSignInEmail()){
        for (let i = 0; i < newAccounts.length; i++) {
            if(signInEmailInput.value==newAccounts[i].newEmail&&signInPasswordInput.value==newAccounts[i].newPassword){
                signUpFirst.classList.add('d-none')  
                localStorage.setItem('userName',newAccounts[i].newName)
                window.location="home.html"
            }else{
                signUpFirst.classList.remove('d-none')
                validSignIn.classList.add('d-none')
                }
        } 
      }else{
        validSignIn.classList.remove('d-none')
        signUpFirst.classList.add('d-none')
      }
});



function validationSignInEmail(){
    let regexEmail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/  
  if(regexEmail.test(signInEmailInput.value)){
      signInEmailInput.classList.replace('is-invalid', 'is-valid')
      return true
  }else{
      signInEmailInput.classList.add('is-invalid')
      signInEmailInput.classList.remove('is-valid')
      return false
  }
}
function validationSignInPassword(){
 let regexPassword=/^([A-Za-z])[A-Za-z\d]{4,}$/  
if(regexPassword.test(signInPasswordInput.value)){
  signInPasswordInput.classList.replace('is-invalid', 'is-valid')
  return true
}else{
  signInPasswordInput.classList.add('is-invalid')
  signInPasswordInput.classList.remove('is-valid')
  return false
}
}