const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", ()=> {
    
    const visiblity = nav.getAttribute("data-visible");
    if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true)
    }else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})



// const hamburger = document.querySelector('.hamburger');
// const close = document.querySelector('.x');
// const sideMenu = document.querySelector('.primary-navigation');

// hamburger.addEventListener('click',() =>{
//     if (close.classList.contains('x')) {
//         close.classList.add('active') ;
//         hamburger.classList.remove('active');
        

//         };

//     })

// close.addEventListener('click',() =>{
//     if(hamburger.classList.contains('hamburger')) {
//         hamburger.classList.add('active');
//         close.classList.remove('active');
        
//     }
// })