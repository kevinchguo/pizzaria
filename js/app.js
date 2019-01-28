window.onscroll = function() {myFunction()};

var navbar = document.getElementById("topMenu");
console.log(navbar)
var sticky = navbar.offsetTop;
console.log(sticky)

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky')
  }else{
    navbar.classList.remove('sticky');
  }
}

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("myBtn").style.display = "block";
//   } else {
//     document.getElementById("myBtn").style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

button.addEventListener('click', thankYou)

function thankYou() {
  var findDeal = document.getElementById('deal');
  findDeal.style.color = 'lime'
  findDeal.innerHTML = 'Thank you for subscribing. <br> We will send you details soon!'
}