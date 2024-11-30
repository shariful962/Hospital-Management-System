// header scroll 

let nav = document.querySelector(".navbar");
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('header-scrolled');
    } else {
      nav.classList.remove('header-scrolled');
    }
  });

//   nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    })
})

// nav hide  
// let navBar = document.querySelectorAll(".nav-link");
// let navCollapse = document.querySelector(".navbar-collapse.collapse");
// navBar.forEach(function(a){
//     a.addEventListener("click", function(){
//         navCollapse.classList.remove("show");
//     })
// })