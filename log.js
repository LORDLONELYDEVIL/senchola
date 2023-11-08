const form=document.querySelector('#form');
const username=document.querySelector('#username');
const password=document.querySelector('#password');

/*  login.addEventListener('click',()=>{
    const usernameVal=username.value.trim();
    const passwordVal=password.value.trim();
    if(!usernameVal.length<6 && !passwordVal.length<8){
        window.location.replace('todo.html');
    })
    }*/



login.addEventListener('click',(e)=>{

    if(!validateInputs()){
        
        e.preventDefault();    

    } 

})





function validateInputs(){
   const usernameVal=username.value.trim();
   const passwordVal=password.value.trim();
   let success=true;
 

   if (usernameVal===""){
    success=false;
    setError(username,"username is required")
   }
   else if(usernameVal.length<8){
    success=false;
    setError(username,"username must be  atleast 8 characters")
   }
   else{
    setSuccess(username)
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

    


    


