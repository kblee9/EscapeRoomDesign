var buttons = document.querySelectorAll('button'),
    i;

//Use a for loop, if i is less than the number of buttons, check if the button is clicked, if the button is pressed, add the value of that button to the input box and add a straight line, if the pressed values = what's in data-valid in HTML, pop up an alert window. If pressed the # of values and it's wrong, start over.

for(i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        var pressed = document.getElementById('pressed');
        pressed.value += this.value+"|";
        if(pressed.value === pressed.dataset.valid) {
            alert('We made it through!'); window.open("https://kblee9.github.io/EscapeRoomDesign/puzzle2.html", "_self")
          return true;
        }
        if(pressed.value.split('|').length > pressed.dataset.buttons) {
            alert('Oh no a dead end! Retrace your steps and try again');
          pressed.value = "";
        }
    }, false);
}