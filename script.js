const page = document.querySelector(".page")
const page1 = document.querySelector("#page1");
const page2 = document.querySelector("#page2");
const page3 = document.querySelector("#page3");
const page4 = document.querySelector("#page4");
const page5 = document.querySelector("#page5");
const page6 = document.querySelector("#page6");
const card = document.querySelector(".card");
const pointer = document.querySelector(".pointer");
let pt = new Audio("pageturn-102978.mp3");
let M1 = new Audio("Humsatthsathhhai.mp3");
let M3 = new Audio("happybday.mp3");
let M2 = new Audio("tuhaiterayesansar.mp3");


page1.addEventListener("click",()=>{
    page1.classList.add("flip");
    pt.play();
    pointer.classList.remove("pointerAni");
    page1.innerHTML = '';
})

page2.addEventListener("click",()=>{
    page2.classList.add("flip");
    pt.play();

})

page3.addEventListener("click",()=>{
    page3.classList.add("flip");
    pt.play();
    M1.play();


})

page4.addEventListener("click",()=>{
    page4.classList.add("flip");
    pt.play();
    M2.play();
    M1.pause();

})

page5.addEventListener("click",()=>{
    page5.classList.add("flip");
    pt.play();
    M3.play();
    M2.pause();

})

page6.addEventListener("click",()=>{
    page1.classList.add("home");
    page2.classList.add("home");
    page3.classList.add("home");
    page4.classList.add("home");
    page5.classList.add("home");
    page6.classList.add("home");
    pt.play();
    M3.pause();
    page1.innerHTML = "<h2>Happy Birthday</h2><h3>Vishal Mama</h3><div class='imgcontainer'><img src='WhatsApp Image 2024-07-07 at 07.59.16_754bdfcf.jpg' </div>"
})

