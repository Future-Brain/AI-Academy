'use strict';
var button = document.getElementById('button');
var login = document.getElementById('log');
var checkbox = document.getElementById('courses');
var information = document.getElementById('info');
var studentCourses=document.createElement('tr');
var result = document.getElementById('result');
var checkedCourse = [];
var nameUser;
var lastList = document.getElementById('last');
var timeInfLoc=false;
var table = document.createElement('table');
login.addEventListener('submit', log);
function log(event) {
    event.preventDefault();
   
    var userName = event.target.userName.value;
    var pass = event.target.pass.value;
    var userEmail = event.target.email.value;
    nameUser=userName;
    if (localStorage.getItem(userName)===null){
        alert('not regestered');
        window.open('login.html','_self');
    }

   
    if (JSON.parse(localStorage.getItem(userName))[0] == userEmail && JSON.parse(localStorage.getItem(userName))[2] == pass) {
        login.remove();
        if(localStorage.getItem(nameUser +' courses: ')){checkbox.remove();
        button.remove();
         
timeInfLoc=true;

for (let i= 0; i < localStorage.getItem(nameUser+ ' courses: ').length; i++) {
    var list = document.createElement('li');
    
    list.textContent= JSON.parse (localStorage.getItem(nameUser +' courses: '))[i];
    result.appendChild(list);
    
}
       
    }
button.style.opacity=1;
       
        checkbox.style.display = 'block';
      
        information.appendChild(table);

        var firstRow = document.createElement('tr');
        firstRow.textContent = 'Welcome ' + userName;
        table.appendChild(firstRow);

        var secondRow = document.createElement('tr');
        table.appendChild(secondRow);
        secondRow.textContent = 'Age : ' + JSON.parse(localStorage.getItem(userName))[2];

        var thirdRow = document.createElement('tr');
        table.appendChild(thirdRow);
        thirdRow.textContent = 'Email : ' + JSON.parse(localStorage.getItem(userName))[0];
        ///////////////////////////////////////////////////////////////////////////
        
      
        table.appendChild(studentCourses);
        studentCourses.textContent= 'Courses: ';
        var check1 = document.getElementById('check1');
        check1.addEventListener('change', click);
       
        function click(event) {
            if (check1.checked === true) {
                checkedCourse.push(event.target.name);
                console.log(checkedCourse);
                localStorage.setItem( userName+' courses: ', JSON.stringify(checkedCourse));
              
            
            }
            if (checkedCourse.includes(event.target.name) && check1.checked === false) {
                var removedCourse=  checkedCourse.indexOf(event.target.name);
                checkedCourse.splice(removedCourse,1);
                localStorage.setItem(userName+' courses: ', JSON.stringify(checkedCourse));
    
            }
        }
        var check2 = document.getElementById('check2');
        check2.addEventListener('change', click2);

        function click2(event) {
            if (check2.checked === true) {
                checkedCourse.push(event.target.name);
                console.log(checkedCourse);
                localStorage.setItem(userName+' courses: ', JSON.stringify(checkedCourse));
                   
        
            }
            if (checkedCourse.includes(event.target.name) && check2.checked === false) {
              var removedCourse=  checkedCourse.indexOf(event.target.name);
                checkedCourse.splice(removedCourse,1);
                localStorage.setItem(userName+' courses: ', JSON.stringify(checkedCourse));
                check2.style.display='none';
            }
        }
        var check3 = document.getElementById('check3');
        check3.addEventListener('change', click3);

        function click3(event) {
            if (check3.checked === true) {
                checkedCourse.push(event.target.name);
              
                localStorage.setItem(userName+' courses: ', JSON.stringify(checkedCourse));
                 
        
            }
            if (checkedCourse.includes(event.target.name) && check3.checked === false) {
                var removedCourse=  checkedCourse.indexOf(event.target.name);
                checkedCourse.splice(removedCourse,1);
                localStorage.setItem(userName+' courses: ', JSON.stringify(checkedCourse));}
                
        }
        var check4 = document.getElementById('check4');
        check4.addEventListener('change', click4);

        function click4(event) {
            if (check4.checked === true) {

                checkedCourse.push(event.target.name);
                console.log(checkedCourse);
                localStorage.setItem(userName+' courses: ', JSON.stringify(checkedCourse));
                      
        
            }
            if (checkedCourse.includes(event.target.name) && check4.checked === false) {
                var removedCourse=  checkedCourse.indexOf(event.target.name);
                checkedCourse.splice(removedCourse,1);
                localStorage.setItem('your courses: ', JSON.stringify(checkedCourse));
                var coursesColumn= document.createElement('td');
                coursesColumn.textContent= checkedCourse[3];
                         
            }
        }
        var check5 = document.getElementById('check5');
        check5.addEventListener('change', click5);

        function click5(event) {
            if (check5.checked === true) {
                checkedCourse.push(event.target.name);
                console.log(checkedCourse);
                localStorage.setItem(userName+' courses: ', JSON.stringify(checkedCourse));

              
            }
            if (checkedCourse.includes(event.target.name) && check5.checked === false) {
                var removedCourse=  checkedCourse.indexOf(event.target.name);
                checkedCourse.splice(removedCourse,1);
                localStorage.setItem(userName+' courses: ', JSON.stringify(checkedCourse));
              
            }
        }

    }
   
    login.removeEventListener('submit', log)
}

function promp(){
    
         if(localStorage.getItem(nameUser+' courses: ') !==null){
             checkbox.remove();
             button.remove();
            for (let i = 0; i < checkedCourse.length; i++) {
               var firstCourse = document.createElement('li');
               firstCourse.textContent= checkedCourse[i];
               result.appendChild(firstCourse);

            
            }

         }
       }
      if (timeInfLoc===true){
          for (let i = 0; i < JSON.parse(localStorage.getItem(nameUser+' courses: ')).length; i++) {
              alert('hr');
           
            timeInfLoc=false;
              
          }
      }