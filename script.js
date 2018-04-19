
var hamburgerElement = document.getElementById("hamburger");
var menuElement = document.getElementById("menu");
 
  hamburgerElement.addEventListener('click', function() {
    
    if(menuElement.style.display == "block")
      menuElement.style.display = "none";
    else
      menuElement.style.display = "block";
    
  })
  


