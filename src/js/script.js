const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.header__menu');
if (iconMenu) {
   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('menu-open');
      iconMenu.classList.toggle('active');
      menuBody.classList.toggle('active');
   });
}



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
   acc[i].addEventListener("click", function () {
      this.classList.toggle("actions");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
         panel.style.display = "none";
      } else {
         panel.style.display = "block";
      }
   });
}