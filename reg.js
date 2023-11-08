const form=document.querySelector('#form');
const username=document.querySelector('#username');
const email=document.querySelector('#email');
const password=document.querySelector('#password');
const crt=document.querySelector('#crt');


form.addEventListener('submit',(e)=>{
    if(!validateInputs()){
        e.preventDefault()

    }
    

})

function validateInputs(){
   const usernameVal=username.value.trim();
   const emailVal=email.value.trim();
   const passwordVal=password.value.trim();
   const crtVal=crt.value.trim();
   let success=true;

   if (usernameVal===""){
    success=false;
    setError(username,"username is required")
   }
   else{
    setSuccess(username)
   }
   if (emailVal===""){
    success=false;
    setError(email,"email is required")
   }
   else if(!validateMail(emailVal)){
    success=false;
    setError(email,"enter a valid email")
   }
   else{
    setSuccess(emailVal)
   }
   if(passwordVal===""){
    success=false;
    setError(password,"password required")
   }
   else if(passwordVal.length<8){
    success=false;
    setError(password,"password must be  atleast 8 characters")
   }
   else{
    setSuccess(password)
   }
   if (crtVal===""){
    success=false;
    setError(crt," password is required")
   }
   else if(crtVal!==passwordVal){
    success=false;
    setError(crt,"password does not match")
   }
   else{
    setSuccess(crt)

   }
   return success;
    



}
function setError(element,message){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error');
    errorElement.innerText=message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');

}
function setSuccess(element){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error');
    errorElement.innerText='';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');

}
const validateMail=(email)=>{
    return String(email)
    .toLocaleLowerCase()
    .match(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );
    
};