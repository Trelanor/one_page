
var hamburgerElement = document.getElementById("hamburger");
var menuElement = document.getElementById("menu");
 
  hamburgerElement.addEventListener('click', function() {
    
    if(menuElement.style.display == "block")
      menuElement.style.display = "none";
    else
      menuElement.style.display = "block";
    
  })

  window.addEventListener('resize', function() {
    if (window.matchMedia("(min-width: 750px)").matches){
      menuElement.style.display = "block";
    }
    else{
      menuElement.style.display = "none";
    }
  })


