// Script for navigation bar
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}

if (close){
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}

var loader = document.getElementById("preloader");
window.addEventListener("load",function(){
    loader.style.display = "none";
})

const wrapper=document.querySelector('.wrapper');
const registerLink=document.querySelector('.register-link');
// const loginLink=document.querySelector('.login-link');
registerLink.onclick = () => {
    wrapper.classList.add('active');
};




const pass_field = document.querySelector(".pass-key");
const showBtn = document.querySelector(".show");
showBtn.addEventListener("click", function () {
  if (pass_field.type === "password") {
    pass_field.type = "text";
    showBtn.textContent = "HIDE";
    showBtn.style.color = "#3498db";
  } else {
    pass_field.type = "password";
    showBtn.textContent = "SHOW";
    showBtn.style.color = "#222";
  }
});



// var email= document.forms['form']['email'];
// var password= document.forms['form']['password'];

// var email_error=document.getElementById('email_error');
// var pass_error=document.getElementById('pass_error');

//   function validation(){
//     if(email.value.lenght < 9 ){
//         email.style.border = "1px solid red";
//         email.focus();
//         return false;
//     }
//     if(password.value.lenght < 9 ){
//         password.style.border = "1px solid red";
//         pass_error.style.display="block";
//         password.focus();
//         return false;
//     }
//     }
// logicLink.onclick = () => {
//     wrapper.classList.remove('active');
// };






// window.addEventListener("load" , () => {
//     const loader =document.querySelector(".loader");
//     loader.classList.add("loader-hidden");

//     loader.addEventListener("transitionend" , () =>{
//         document.body.removeChild("loader");
//     })
// }) 