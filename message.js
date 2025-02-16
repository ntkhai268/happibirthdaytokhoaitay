var modal = document.getElementById('paperModal');
var card = document.querySelector('.card'); // Accessing the card class
var span = document.getElementsByClassName('close')[0];

card.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
