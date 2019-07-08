console.log("hello world main.js");

//DOM elements
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');

// Options
const showAmPm = true;

//show time
function showTime (){
    let today = new Date(), hour = today.getHours(), min = today.getMinutes(), sec = today.getSeconds();

//set AM or PM
//use a conditional/ternary statement
const amPm = hour >=12 ? 'PM' : "AM"

//civilian time i.e. not 24hr format
hour = hour % 12 || 12;

// output the time
time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;
;

setTimeout(showTime, 1000)
}

//addZero's as placeholders
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
  }

//set background and greeting via conditionals
function setbgGreet(){
    let today = new Date();
    let hour = today.getHours();
    if (hour < 12){
        //morning
        document.body.style.backgroundImage = "url('img/dawn.jpeg')"
        greeting.textContent = "Good morning"
    }
    else if (hour < 18){
        document.body.style.backgroundImage = "url('img/beachdog.jpeg')"
        greeting.textContent = "Good afternoon"
        document.body.style.color = "white"

    }
    else {
        document.body.style.backgroundImage = "url('img/nightsky.jpeg')"
        greeting.textContent = "Good evening"
        document.body.style.color = "white"
        }

}

// Get Name
function getName() {
    if (localStorage.getItem('name') === null) {
      name.textContent = '[Enter Name]';
    } else {
      name.textContent = localStorage.getItem('name');
    }
  }

  // Set Name
  function setName(e) {
    if (e.type === 'keypress') {
      // Make sure enter is pressed
      if (e.which == 13 || e.keyCode == 13) {
        localStorage.setItem('name', e.target.innerText);
        name.blur();
      }
    } else {
      localStorage.setItem('name', e.target.innerText);
    }
  }

  // Get Focus
  function getFocus() {
    if (localStorage.getItem('focus') === null) {
      focus.textContent = '[Enter Focus]';
    } else {
      focus.textContent = localStorage.getItem('focus');
    }
  }

  // Set Focus
  function setFocus(e) {
    if (e.type === 'keypress') {
      // Make sure enter is pressed
      if (e.which == 13 || e.keyCode == 13) {
        localStorage.setItem('focus', e.target.innerText);
        focus.blur();
      }
    } else {
      localStorage.setItem('focus', e.target.innerText);
    }
  }

  name.addEventListener('keypress', setName);
  name.addEventListener('blur', setName);
  focus.addEventListener('keypress', setFocus);
  focus.addEventListener('blur', setFocus);

  // Run
  showTime();
  setbgGreet();
  getName();
  getFocus();
