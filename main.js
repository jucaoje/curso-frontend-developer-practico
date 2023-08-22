let cantidadNumbercart =0;
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');

const menuMobile = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside =document.querySelector('.product-detail');
const cardContainer = document.querySelector('.cards-container');
const productDetailSecundary = document.querySelector('.product-detailSecundary');

const productDetailSecundaryClose = document.querySelector('.product-detailSecundary-close');
const cantidadcart = document.querySelector('.cantidadCart');

//esta es la forma corta se remplaza el nombre de la funcion parentesis                               se coloca  la   la flecha y dentro de las llaves se coloca lo que va hacer la funcion, la de abajo es lo forma convencional.
menuEmail.addEventListener('click', ()=> {   
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
      aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
    productDetailSecundary.classList.add('inactive');

    
})

menuMobile.addEventListener('click', ()=> {   
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
      aside.classList.add('inactive'); 
    } 
    mobileMenu.classList.toggle('inactive');
    productDetailSecundary.classList.add('inactive');

    
})
menuCarritoIcon.addEventListener('click', ()=> {  
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  
    if (!isMobileMenuClosed) {
      mobileMenu.classList.add('inactive'); 
    }
    aside.classList.toggle('inactive');
    productDetailSecundary.classList.add('inactive');


    
})



const productList = [];
productList.push({
  name: 'Bike',
  price:  120,
  image:  'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Clock',
  price:  50,
  image:  'https://picsum.photos/640/640?r=4851',
});
productList.push({
  name: 'Kitchen',
  price:  230,
  image:  'https://picsum.photos/640/640?r=2483',
});
productList.push({
  name: 'Bike',
  price:  120,
  image:  'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Clock',
  price:  50,
  image:  'https://picsum.photos/640/640?r=4851',
});
productList.push({
  name: 'Kitchen',
  price:  230,
  image:  'https://picsum.photos/640/640?r=2483',
});
productList.push({
  name: 'Clock',
  price:  50,
  image:  'https://picsum.photos/640/640?r=4851',
});
productList.push({
  name: 'Kitchen',
  price:  230,
  image:  'https://picsum.photos/640/640?r=2483',
});

/* Product detail secundary */




function renderProducts(arr){
  for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click',()=>{
    productDetailSecundary.classList.remove('inactive');
    aside.classList.add('inactive');
    desktopMenu.classList.add('inactive');

      

    });
    
    
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement ('div');
  
    const productPrice = document.createElement ('p');
    productPrice.innerText = '$' + product.price;
  
    const productName = document.createElement ('p');
    productName.innerText =  product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure =document.createElement ('figure');
    
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
    productImgCart.addEventListener ('click', ()=> {

      cantidadNumbercart++;
      cantidadcart.innerText= cantidadNumbercart;
    
    });

  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardContainer.appendChild(productCard);
  }
}
renderProducts(productList);



productDetailSecundaryClose.addEventListener('click', ()=> {
  productDetailSecundary.classList.add('inactive');
})

const iconClose = document.createElement('img');
iconClose.setAttribute('src', './icons/icon_close.png');
productDetailSecundaryClose.appendChild(iconClose);


/*setAttribute('src', imgCart);*/
