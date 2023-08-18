const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');

const menuMobile = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside =document.querySelector('.product-detail');

//esta es la forma corta se remplaza el nombre de la funcion parentesis                                               se coloca  la   la flecha y dentro de las llaves se coloca lo que va hacer la funcion, la de abajo es lo forma convencional.
menuEmail.addEventListener('click', ()=> {   
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
      aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
})

menuMobile.addEventListener('click', ()=> {   
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
      aside.classList.add('inactive'); 
    } 
    mobileMenu.classList.toggle('inactive');
})
menuCarritoIcon.addEventListener('click', ()=> {  
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  
    if (!isMobileMenuClosed) {
      mobileMenu.classList.add('inactive'); 
    }
    aside.classList.toggle('inactive');
})


/*menuEmail.addEventListener('click', toggleDesktopMenu);
function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}*/


