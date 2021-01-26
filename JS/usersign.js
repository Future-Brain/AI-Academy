'use strict';
var login = document.getElementById('log');
var information = document.getElementById('info');
login.addEventListener('submit', log)

function log(event) {
    event.preventDefault();
    var userName = event.target.userName.value;
    var pass = event.target.pass.value;
    var userEmail = event.target.email.value;
    if (JSON.parse(localStorage.getItem(userName))[0] == userEmail && JSON.parse(localStorage.getItem(userName))[3] == pass) {
        window.open(JSON.parse(localStorage.getItem(userName))[1]+'.html','_self');
        
    }

else{
    alert('unvalid');
}

    login.removeEventListener('submit', log)
}



