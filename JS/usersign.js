'use strict';
var login = document.getElementById('log');
var information = document.getElementById('info');
login.addEventListener('submit', log);

function log(event) {
    event.preventDefault();
    var userName = event.target.userName.value;
    var pass = event.target.pass.value;
    var userEmail = event.target.email.value;
    if (JSON.parse(localStorage.getItem(userName))[0] == userEmail && JSON.parse(localStorage.getItem(userName))[2] == pass) {
    login.remove();
    
    
    // var check1=document.createElement('input');
    //  check1.type='checkbox';
    //  information.appendChild(check1);
    //  var label1=document.createElement('label');
    //   label1.textContent='Artificial Intelligence for Finance, Accounting & Auditing';
    //  information.appendChild(label1);
    //  label1.style.color='red';

    //  var check2=document.createElement('input');
    //  check2.type='checkbox';
    //  information.appendChild(check2);
    //  var label2=document.createElement('label');
    //   label2.textContent='Introduction to Artificial Intelligence';
    //  information.appendChild(label2);
    //  label2.style.color='red';

    //  var check3=document.createElement('input');
    //  check3.type='checkbox';
    //  information.appendChild(check3);
    //  var label3=document.createElement('label');
    //   label3.textContent='Artificial Intelligence for Business';
    //  information.appendChild(label3);
    //  label3.style.color='red';
     
    //  var check4=document.createElement('input');
    //  check4.type='checkbox';
    //  information.appendChild(check4);
    //  var label4=document.createElement('label');
    //   label4.textContent='Artificial Intelligence Masterclass';
    //  information.appendChild(label4);
    //  label4.style.color='red';

    //  var check5=document.createElement('input');
    //  check5.type='checkbox';
    //  information.appendChild(check5);
    //  var label5=document.createElement('label');
    //   label5.textContent='Advanced AI For Games with Goal-Oriented Action Planning';
    //  information.appendChild(label5);
    //  label5.style.color='red';
    
    var checkbox=document.getElementById('courses');
    checkbox.style.display='block';


    var table= document.createElement('table');
    information.appendChild(table);
    
    var firstRow=document.createElement('tr');
    firstRow.textContent='Welcome '+ userName;
    table.appendChild(firstRow);
     
    var secondRow=document.createElement('tr');
    table.appendChild(secondRow);
    secondRow.textContent='Age : '+ JSON.parse(localStorage.getItem(userName))[2];
    
    var thirdRow=document.createElement('tr');
    table.appendChild(thirdRow);
    thirdRow.textContent='Email : '+ JSON.parse(localStorage.getItem(userName))[0];

    var check1=document.getElementById('check1');
    check1.addEventListener('change',click);
   
   function click(event){
    if(check1.checked===true){
    localStorage.setItem('courses for'+userName,event.target.name);
    }

}

    var check2=document.getElementById('check2');
    check2.addEventListener('change',click2);

   function click2(event){
    if(check2.checked===true){
    var localStorItem=localStorage.getItem('courses for'+userName);
    localStorage.setItem('courses for'+userName,[localStorItem,event.target.name]);
 }
}

var check3=document.getElementById('check3');
check3.addEventListener('change',click3);

function click3(event){
if(check3.checked===true){
var localStorItem=localStorage.getItem('courses for'+userName);
localStorage.setItem('courses for'+userName,[localStorItem,event.target.name]);
}
}

var check4=document.getElementById('check4');
check4.addEventListener('change',click4);

function click4(event){
if(check4.checked===true){
var localStorItem=localStorage.getItem('courses for'+userName);
localStorage.setItem('courses for'+userName,[localStorItem,event.target.name]);
}
}

var check5=document.getElementById('check5');
check5.addEventListener('change',click5);

function click5(event){
if(check5.checked===true){
var localStorItem=localStorage.getItem('courses for'+userName);
localStorage.setItem('courses for'+userName,[localStorItem,event.target.name]);
}
}














///////// main if } 
 }      
else{
    alert('unvalid');
}

    login.removeEventListener('submit', log)
}



