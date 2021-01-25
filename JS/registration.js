'use strict';
var user = [];
var users = [];
var numberOfUsers = 0;
var formdiv = document.getElementById('formdiv');
formdiv.addEventListener('submit', signin);
function signin(event) {
    event.preventDefault();
    
    if(localStorage.length===0){
        localStorage.setItem(event.target.name.value ,event.target.email.value);

    }
else{

if(localStorage.getItem(event.target.name.value)!== null ) {alert(' user name not available');}
else{
    localStorage.setItem(event.target.name.value ,event.target.email.value);
    alert('your password 1234')
    window.open('https://google.com','_self');
  }
  }}
       
  var password = document.getElementById('sign');
  password.addEventListener('submit',enroll)
  function enroll(event){
      if(event.target.pass.value==='1234'){
          console.log(event.target.pass.value);
          window.open('https://google.com','_self');}
          else{alert('unvalid password');}
      }
  function saveData (){
    if(localStorage.getItem(target.name.value)!== null )
    {alert(' user name not available');}}