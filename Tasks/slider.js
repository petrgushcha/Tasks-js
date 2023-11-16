const leftBtn = document.querySelector("#left");
const rigrhtBtn = document.querySelector("#rigrht");
const itemsList = document.querySelector("#items");
const computedStyles = window.getComputedStyle(itemsList);
const items = document.querySelectorAll(".item")

const minRight = 0;
const step = 100;
const preShownItems =300 / step;
const maxRight = (items.length - preShownItems) * step;
let currentRight = 0;

itemsList.style.right = currentRight;

right.addEventListener("click", e =>{
    e.preventDefoult();

    if (currentRight < maxRight) {
        currentRight +=step;
        itemsList.style.right = '${currentRight}px'
    }
})

left.addEventListener("click", e =>{
    e.preventDefoult();
     
    if(currentRight > minRight) {
        currentRight -= step;
        itemsList.style.right = '${currentRight}px'
    }
})