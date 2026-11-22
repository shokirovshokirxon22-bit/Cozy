const imgEl = document.querySelector(`.asosiy-img`);

const btnEls = document.querySelectorAll(".img-mini");

const sanoqEl = document.querySelector(".img-sanoq");

const leftEl = document.querySelector(".left");

const rightEl = document.querySelector(".right")


import { images } from "./data.js" ;




btnEls.forEach((btn , index) =>{
    btn.addEventListener("click" , ()=>{
        imgEl.setAttribute("src" , images[index]);
        sanoqEl.textContent = index + 1;
        btnEls[index].classList("tanlangan");
    });
});



let sanoq = 0;

function almashrasm(){
    if(imgEl && images.length > 0){
        imgEl.setAttribute("src" , images[sanoq]);
    }
}

rightEl.addEventListener("click" , ()=>{
    sanoq = (sanoq + 1) % images.length;
    almashrasm();

    imgEl.setAttribute("src" , images[sanoq]);
        sanoqEl.textContent = sanoq + 1;
});

leftEl.addEventListener("click" , ()=>{
    sanoq = (sanoq - 1 + images.length) % images.length;
    almashrasm();

    imgEl.setAttribute("src" , images[sanoq]);
        sanoqEl.textContent = sanoq + 1;
});


