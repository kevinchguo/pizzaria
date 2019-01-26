window.onscroll = function() {myFunction()};

var navbar = document.getElementById("topMenu");
console.log(navbar)
var sticky = navbar.offsetTop;
console.log(sticky)
window.pageYOffset = document.getElementById('today')

function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add('sticky')
  }else{
    navbar.classList.remove('sticky');
  }
}