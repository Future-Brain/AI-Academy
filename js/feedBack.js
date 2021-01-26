'use strict';

var feedBackDiv = document.getElementById('feedBackDiv');
var feedBackForm = document.getElementById('feedBackForm');
////// constructor
function FeedBack(name, course, feedBack) {
  this.name = name;
  this.course = course;
  this.feedBack = feedBack;
  FeedBack.prototype.allFeedBack.push(this);
}
FeedBack.prototype.allFeedBack = [];
/////////////////// render function
FeedBack.prototype.render = function () {
  var newDiv = document.createElement('div');
  newDiv.setAttribute('class','comment')
  feedBackDiv.appendChild(newDiv);

  var studentName = document.createElement('h3');
  studentName.textContent = this.name + ':' ;
  newDiv.appendChild(studentName);

  var studentCourse = document.createElement('h4');
  studentCourse.textContent='[' + this.course+']' ;
  newDiv.appendChild(studentCourse);

  var studentFeedBack = document.createElement('h5');
  studentFeedBack.textContent =this.feedBack;
  newDiv.appendChild(studentFeedBack);
};
///// local Stoarage
var dataFromLocal = JSON.parse(localStorage.getItem('feedBack'));
if (dataFromLocal) {
  for (var i = 0;i< dataFromLocal.length; i++) {

    var JsData = new FeedBack(dataFromLocal[i].name+": ", dataFromLocal[i].course, dataFromLocal[i].feedBack);   JsData.render();
  }
}


feedBackForm.addEventListener('submit', submitFun);

////// form function
function submitFun(event) {
  event.preventDefault();

  var studentNameVal = event.target.studentName.value;
  var courseVal = event.target.course.value;
  var feedBackVal = event.target.studentFeedBack.value;

  var newFeedBack = new FeedBack(studentNameVal, courseVal, feedBackVal);
  localStorage.setItem('feedBack', JSON.stringify(FeedBack.prototype.allFeedBack));
  newFeedBack.render();



}

