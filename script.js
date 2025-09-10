const input = document.querySelector("input[type=text]");
const p = document.querySelector(".text");

let timer;

input.addEventListener("input",()=>{
    if(timer){
        clearTimeout(timer);
    }

    timer = setTimeout(()=>{
        p.textContent = input.value;
    },300);
});