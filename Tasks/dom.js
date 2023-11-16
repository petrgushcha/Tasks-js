const quantitySelector = document.querySelector("quantity-selector");
const colorSelector = document.querySelector("color-selector");
const blocksContainer = document.querySelector("blocks");

const createMarkup =quantity => {
    let markup = "";

    for (let i = 0; i < quantity; i++) {
        const block = document.createElement("div");
        block. className ="item";
        block.innerText = i + 1;

        markup += block.outerHTML;
    }
}

quantitySelector.addEventListener("change", e =>{
    const quantity = e.target.value;

    blocksContainer.innerHTML =markup;
})

const colorTheBlock =(block, color)=> {
    block,style.backgraundColor = color;
}

let changed = false;

colorSelector.addEventListener("change", e =>{
    const color = e.target.value;
    const items = blocksContainer.querySelectorAll(".item");

    changed = !changed;

    for (let i =0; i < items.length; i++){
        const currenBlock = items[i];
        const blockNamber = i+1;

        if(changed){
            if(blockNamber % 2 != 0){
            colorTheBlock(currenBlock, color);
            }else{
                colorTheBlock(currenBlock, "#fff")
            }
        }else {
            if(blockNamber % 2 == 0){}
                colorTheBlock(currenBlock, color);
            }
        }
    })