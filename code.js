function myFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("myP").style.display = "block";
  } else {
    document.getElementById("myP").style.display = "none";
  }
}

window.onscroll = myFunction;
