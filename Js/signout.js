let signUpPage=document.getElementById('signUp')
let signupNameInput=document.getElementById('signupName')
let signupEmailInput=document.getElementById('signupEmail')
let signupPasswordInput=document.getElementById('signupPassword')
let signUpBtn=document.getElementById('signUpBtn')
let existEmail=document.getElementById('existEmail')
let validSignUp=document.getElementById('validSignUp')
let signUpFirst=document.getElementById('signUpFirst')
let successful=document.getElementById('successful')
let newAccounts=[] 
if(localStorage.getItem('newAccounts')){
    newAccounts=JSON.parse(localStorage.getItem('newAccounts'))
};
signUpBtn.addEventListener('click',function singUpAccount(){
    if(validationSignUpName()&&validationSignUpEmail()&&validationSignupPassword()){
                let newAccount={
                newName:signupNameInput.value,
                newEmail:signupEmailInput.value,
                newPassword:signupPasswordInput.value
            }
            if(exist()==true){
                existEmail.classList.remove('d-none')
                validSignUp.classList.add('d-none')
            }else{
                newAccounts.push(newAccount)
                localStorage.setItem('newAccounts',JSON.stringify(newAccounts))
                existEmail.classList.add('d-none')
                successful.classList.remove('d-none')
                validSignUp.classList.add('d-none')
                window.location="index.html"
            }
    }else{
        validSignUp.classList.remove('d-none')
        existEmail.classList.add('d-none')
    }
});



function exist(){
    for (let i = 0; i < newAccounts.length; i++) {
        if(signupEmailInput.value==newAccounts[i].newEmail){
            existEmail.classList.add('d-none')
            return true
        }else{
            return false
        }
        
    }
}

    
    function validationSignUpName(){
       let regexName=/^[a-zA-ZÀ-ÖØ-öø-ÿ'.\s-]{4,100}$/    
        if(regexName.test(signupNameInput.value)){
            signupNameInput.classList.replace('is-invalid', 'is-valid')
            return true
        }else{
            signupNameInput.classList.add('is-invalid')
            signupNameInput.classList.remove('is-valid')
            return false
        }
    }
    
function validationSignUpEmail(){
          let regexEmail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/  
        if(regexEmail.test(signupEmailInput.value)){
            signupEmailInput.classList.replace('is-invalid', 'is-valid')
            return true
        }else{
            signupEmailInput.classList.add('is-invalid')
            signupEmailInput.classList.remove('is-valid')
            return false
        }
    }
    function validationSignupPassword(){
        let regexPassword=/^([A-Za-z])[A-Za-z\d]{4,}$/  
        if(regexPassword.test(signupPasswordInput.value)){
            signupPasswordInput.classList.replace('is-invalid', 'is-valid')
            return true
        }else{
            signupPasswordInput.classList.add('is-invalid')
            signupPasswordInput.classList.remove('is-valid')
            return false
        }
    }


    
    