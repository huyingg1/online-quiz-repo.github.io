"use strict";
var currentgrade;
currentgrade = 0;
var nowtimenum;
nowtimenum = 60;
var timer;
//start page
//view score history btn
document.querySelector("#title").addEventListener("click", function () {
  document.getElementById("start").style.display = "none";
  document.getElementById("highscorepage").style.display = "block";
});
//start button
document.querySelector("#btnstart").addEventListener("click", function () {
  currentgrade = 0;
  nowtimenum = 60;
  //set up timer
  timer = setInterval(function () {
    nowtimenum--;
    if (nowtimenum <= 0) {
      document.getElementById("nowtime").innerHTML = 0;
      document.getElementById("one").style.display = "none";
      document.getElementById("two").style.display = "none";
      document.getElementById("three").style.display = "none";
      document.getElementById("four").style.display = "none";
      document.getElementById("five").style.display = "none";
      document.getElementById("gradepage").style.display = "block";
      document.getElementById("highscorepage").style.display = "none";
      document.getElementById("scorenum").innerHTML = currentgrade;
    } else {
      document.getElementById("nowtime").innerHTML = nowtimenum;
    }
  }, 1000);

  var elements = document.getElementsByClassName("choice");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "#8a2be2";
  }

  document.getElementById("title").style.display = "none";
  document.getElementById("start").style.display = "none";
  document.getElementById("one").style.display = "block";
});

//!!Important function for pageswitch after click a choice
//ex. clickchoicebtn("red", "Wrong", "onea", "answer1", "one", "two")
//ex. clickchoicebtn("green", "Correct", "onec", "answer1", "one", "two");
function clickchoicebtn(
  backgroundcolor,
  answertype,
  spechoice,
  answerArea,
  currentpage,
  nextpage
) {
  document.getElementById(spechoice).style.backgroundColor = backgroundcolor;
  document.getElementById(answerArea).innerHTML = answertype;
  setTimeout(function () {
    document.getElementById(currentpage).style.display = "none";
    document.getElementById(nextpage).style.display = "block";
  }, 1000);
  if (answertype == "Wrong") {
    nowtimenum -= 8;
  } else {
    currentgrade += 20;
  }
}
//question One
//question 1a
document.querySelector("#onea").addEventListener("click", function () {
  clickchoicebtn("red", "Wrong", "onea", "answer1", "one", "two");
});

//question 1b
document.querySelector("#oneb").addEventListener("click", function () {
  clickchoicebtn("red", "Wrong", "oneb", "answer1", "one", "two");
});
//question 1c
document.querySelector("#onec").addEventListener("click", function () {
  clickchoicebtn("green", "Correct", "onec", "answer1", "one", "two");
});
//question 1d
document.querySelector("#oned").addEventListener("click", function () {
  clickchoicebtn("red", "Wrong", "oned", "answer1", "one", "two");
});

//question Two
//question 2a
document.querySelector("#twoa").addEventListener("click", function () {
  clickchoicebtn("red", "Wrong", "twoa", "answer2", "two", "three");
});

//question 2b
document.querySelector("#twob").addEventListener("click", function () {
  clickchoicebtn("red", "Wrong", "twob", "answer2", "two", "three");
});
//question 2c
document.querySelector("#twoc").addEventListener("click", function () {
  clickchoicebtn("green", "Correct", "twoc", "answer2", "two", "three");
});
//question 2d
document.querySelector("#twod").addEventListener("click", function () {
  clickchoicebtn("red", "Wrong", "twod", "answer2", "two", "three");
});

//question Three
//question 3a
document.querySelector("#threea").addEventListener("click", function () {
  clickchoicebtn("red", "Wrong", "threea", "answer3", "three", "four");
});

//question 3b
document.querySelector("#threeb").addEventListener("click", function () {
  clickchoicebtn("red", "Wrong", "threeb", "answer3", "three", "four");
});
//question 3c
document.querySelector("#threec").addEventListener("click", function () {
  clickchoicebtn("red", "Wrong", "threec", "answer3", "three", "four");
});
//question 3d
document.querySelector("#threed").addEventListener("click", function () {
  clickchoicebtn("green", "Correct", "threed", "answer3", "three", "four");
});

//question Four
//question 4a
document.querySelector("#foura").addEventListener("click", function () {
  clickchoicebtn("red", "Wrong", "foura", "answer4", "four", "five");
});

//question 4b
document.querySelector("#fourb").addEventListener("click", function () {
  clickchoicebtn("red", "Wrong", "fourb", "answer4", "four", "five");
});
//question 4c
document.querySelector("#fourc").addEventListener("click", function () {
  clickchoicebtn("green", "Correct", "fourc", "answer4", "four", "five");
});
//question 4d
document.querySelector("#fourd").addEventListener("click", function () {
  clickchoicebtn("red", "Wrong", "fourd", "answer4", "four", "five");
});

//question Five
//question 5a
document.querySelector("#fivea").addEventListener("click", function () {
  clickchoicebtn("red", "Wrong", "fivea", "answer5", "five", "gradepage");
  document.getElementById("scorenum").innerHTML = currentgrade;
  nowtimenum = 0;
  document.getElementById("nowtime").innerHTML = nowtimenum;
  clearInterval(timer);
});

//question 5b
document.querySelector("#fiveb").addEventListener("click", function () {
  clickchoicebtn("red", "Wrong", "fiveb", "answer5", "five", "gradepage");
  document.getElementById("scorenum").innerHTML = currentgrade;
  nowtimenum = 0;
  document.getElementById("nowtime").innerHTML = nowtimenum;
  clearInterval(timer);
});
//question 5c
document.querySelector("#fivec").addEventListener("click", function () {
  clickchoicebtn("red", "Wrong", "fivec", "answer5", "five", "gradepage");
  document.getElementById("scorenum").innerHTML = currentgrade;
  nowtimenum = 0;
  document.getElementById("nowtime").innerHTML = nowtimenum;
  clearInterval(timer);
});
//question 5d
document.querySelector("#fived").addEventListener("click", function () {
  clickchoicebtn("green", "Correct", "fived", "answer5", "five", "gradepage");
  document.getElementById("scorenum").innerHTML = currentgrade;
  nowtimenum = 0;
  document.getElementById("nowtime").innerHTML = nowtimenum;
  clearInterval(timer);
});

//final grade page
document.querySelector("#sub").addEventListener("click", function () {
  clearInterval(timer);
  document.getElementById("gradepage").style.display = "none";
  document.getElementById("highscorepage").style.display = "block";
  document.getElementById("res").innerHTML +=
    document.getElementById("name").value + " - " + currentgrade + "<br/>";
});

//highscore page
document.querySelector("#goback").addEventListener("click", function () {
  document.getElementById("title").style.display = "block";
  document.getElementById("start").style.display = "block";
  document.getElementById("highscorepage").style.display = "none";
});

document.querySelector("#clearrecords").addEventListener("click", function () {
  console.log("asdsf");
  document.getElementById("res").innerHTML = "";
});
