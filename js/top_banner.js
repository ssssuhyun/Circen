const closeBtn = document.getElementById("btn-banner-close")
const banner = document.querySelectorAll(".header-banner")

closeBtn.addEventListener("click", function() {
  banner[0].classList.add("banner-hidden")  
}, false);