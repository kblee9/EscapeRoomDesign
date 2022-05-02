// Get the coin modal
var coinModal = document.getElementById("coinModal");

// Get the button that opens the modal
var coin = document.getElementById("coin");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("closeCoin")[0];

// When the user clicks on the button, open the modal
coin.onclick = function() {
  coinModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  coinModal.style.display = "none";
}

// Get the disc modal
var discModal = document.getElementById("discModal");

// Get the button that opens the modal
var disc = document.getElementById("disc");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("closeDisc")[0];

// When the user clicks on the button, open the modal
disc.onclick = function() {
  discModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  discModal.style.display = "none";
}




// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == coinModal) {
    coinModal.style.display = "none";
  }
  if (event.target == discModal) {
    discModal.style.display = "none";
  }
}

// Get the disc modal
var ringModal = document.getElementById("ringModal");

// Get the button that opens the modal
var ring = document.getElementById("ring");

// Get the <span> element that closes the modal
var cont = document.getElementsByClassName("button")[0];

// When the user clicks on the button, open the modal
ring.onclick = function() {
  ringModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
cont.onclick = function() {     window.open("https://kblee9.github.io/EscapeRoomDesign/puzzle4.html", "_self")
}