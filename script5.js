function passAnswer() {
   var password = document.getElementById("passwordBox");
  /*add .toUpperCase() String function so that even if the user types in the password in lower-case, it will check against uppercase password text*/
   var passwordText = password.value.toUpperCase();
    /*If password text is correct, window opens to conclusion page... */
   if(passwordText == "ICARUS") {
     window.open("https://kblee9.github.io/EscapeRoomDesign/puzzle6.html", "_self")
     return true;
   }
    /* ... if not, an alert apears*/
    alert("That is incorrect, try again!");
 return false;
}