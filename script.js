const header = document.querySelector("header");

window.addEventListener ("scroll",function() {
    header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
};
// home start
const productcontainers = [...document.querySelectorAll('.product-container')]


const nxtBtn = [...document.querySelectorAll('.arrow-right')];
const preBtn = [...document.querySelectorAll('.arrow-left')];

productcontainers.forEach((item, i)=>{
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click',()=>{
        item.scrollLeft += containerWidth;
    })


    preBtn[i].addEventListener('click',() => {
        item.scrollLeft -= containerWidth;
    })
})



// home end








