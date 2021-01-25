'use strict';
var check=true;
///// constructor////////
function Users(name, email, course, age, password) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.course = course;
    this.pass = password;
    Users.prototype.allusers.push(this);
}
///// prototype/////////
Users.prototype.allusers = [];
if (localStorage.length > 0) {
    Users.prototype.allusers.push(JSON.parse(localStorage.getItem('user')));
console.log(Users.prototype.allusers);
}
///////// add event to the form //////////////
var formdiv = document.getElementById('formdiv');
formdiv.addEventListener('submit', signin);
function signin(event) {
    event.preventDefault();
  
    var studentPass = event.target.pass.value;
    var studentName = event.target.name.value;
    var studentAge = event.target.age.value;
    var studentCourse = event.target.course.value;
    var studentEmail = event.target.email.value;
    if(localStorage.length===0){var user = new Users(studentName, studentEmail, studentCourse, studentAge, studentPass);
        localStorage.setItem('user', JSON.stringify(Users.prototype.allusers));
    }
    else{
        
    for (let i = 0; i <JSON.parse(localStorage.length); i++) {
       
            if(JSON.parse(localStorage.getItem('user'))[i].name==studentName ||JSON.parse(localStorage.getItem('user'))[i].email==studentEmail){check=false;}}
    { 
        if(check===true)
      {  var user = new Users(studentName, studentAge, studentCourse, studentEmail, studentPass);
        localStorage.setItem('user', JSON.stringify(Users.prototype.allusers));
    
    }     } 
   
    }}
//////////////////////////////////////////////////////////////////////////
//   var password = document.getElementById('sign');
//   password.addEventListener('submit',enroll)
//   function enroll(event){
//       if(event.target.pass.value==='1234'){
//           console.log(event.target.pass.value);
//           window.open('https://google.com','_self');}
//           else{alert('unvalid password');}
//       }
// //   function saveData (){

//     {alert(' user name not available');}}
  // localStorage.setItem(event.target.name.value ,event.target.email.value);
    // alert('your password 1234')
    // window.open('https://google.com','_self');
  //  if(localStorage.getItem('user')!== null ){alert();}