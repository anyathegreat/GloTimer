const calculator = () => {
    const calcType = document.querySelector(".calc-type");
    const calcItem = document.querySelectorAll("input.calc-item");

    calcType.addEventListener("change",(e)=>{
        console.log(e.target.value);
    });

    calcItem.forEach((item)=>{
        item.setAttribute("type","number");
    });
}

export default calculator;