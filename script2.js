//Create buttons variables that holds all of the button tags from HTML

var buttons = document.querySelectorAll('input[type=checkbox]'),
    i;

//Use a for loop, if i is less than the number of buttons, check if the button is clicked, if the button is pressed, add the value of that button to the input box and add a straight line, if the pressed values = what's in data-valid in HTML, pop up an alert window. If pressed the # of values and it's wrong, start over.

for(i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        var pressed = document.getElementById('pressed');
        pressed.value += this.value+"|";
        if(pressed.value === pressed.dataset.valid) {
            alert('You unlocked it!');     window.open("https://kblee9.github.io/EscapeRoomDesign/puzzle3.html", "_self")
          return true;
        }
        if(pressed.value.split('|').length > pressed.dataset.buttons) {
          alert('Oh no, a dead end. Looks like you need to retrace your steps and start over.');
            //Start over
            pressed.value = "";
        }
    }, false);
}
// script for revealing the hints
function toggleText(){
  var x = document.getElementById("hint1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function toggleText2(){
  var x = document.getElementById("hint2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function toggleText3(){
  var x = document.getElementById("hint3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function toggleText4(){
  var x = document.getElementById("answer");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}