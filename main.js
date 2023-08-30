/*Javascript Main*/ 
/*Erick Villarroel*/ 
const email = document.querySelector('.navbar-email');
const menu = document.querySelector('.desktop-menu');
const humer = document.querySelector('.menu');
const mobile = document.querySelector('.mobile-menu');
email.addEventListener('click',desaparecerMenu);
humer.addEventListener('click',desaparecerMenuHumer);
const carro = document.querySelector('.navbar-shopping-cart');
const desplieguecarro = document.querySelector('.product-detail ');
carro.addEventListener('click',desaparecerMenuCarro)
function desaparecerMenuCarro(){
    desplieguecarro.classList.toggle('inactive');

}


function desaparecerMenu(){
    menu.classList.toggle('inactive');

}
function desaparecerMenuHumer(){
    mobile.classList.toggle('inactive');

}