'use strict';
var check=true;

///////// add event to the form //////////////
var formdiv = document.getElementById('formdiv');
formdiv.addEventListener('submit', signin);
function signin(event) {
    event.preventDefault();
    var studentPass = event.target.pass.value;
    var studentName = event.target.name.value;
    var studentAge = event.target.age.value;
    // var studentCourse = event.target.course.value;
    var studentEmail = event.target.email.value;
  
    if(localStorage.getItem(studentName) !==null ){
      alert('user is already rigestred!!')
      check=false; 
      window.open('registration.html','_self')
  }
    
    if(localStorage.length===0){
     
        localStorage.setItem(studentName, JSON.stringify([ studentEmail, studentAge, studentPass]));
        window.open('login.html','_self');
    }
        if(check===true)
      {  
        localStorage.setItem(studentName, JSON.stringify([ studentEmail, studentAge, studentPass]));
        window.open('login.html','_self');
         }
    }

