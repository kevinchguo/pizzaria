window.onscroll = function() {
  stickyTop();
  topButton();
}

var navbar = document.getElementById("topMenu");
console.log(navbar)
var sticky = navbar.offsetTop;
console.log(sticky)

window.addEventListener('scroll', stickyTop);

function stickyTop() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky')
  }else{
    navbar.classList.remove('sticky');
  }
}



function topButton() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

myBtn.addEventListener('click', topFunction)

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

submitButton.addEventListener('click', thankYou)

function thankYou() {
  var findDeal = document.getElementById('deal');
  findDeal.style.color = 'lime'
  findDeal.innerHTML = 'Thank you for subscribing. <br> We will send you details soon!'
}