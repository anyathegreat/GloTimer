const calculator = (price = 100) => {
    const calcBlock = document.querySelector(".calc-block");
    const calcType = document.querySelector(".calc-type");
    const calcSquare = document.querySelector(".calc-square");
    const calcCount = document.querySelector(".calc-count");
    const calcDay = document.querySelector(".calc-day");
    const total = document.getElementById("total");
    const calcItem = document.querySelectorAll("input.calc-item");

    let oldPrice = 0;
    let newPrice = 0;

    const updateTime = () => {
        const totalFrames = Math.floor(2000 / (1000 / 30)); // Количество кадров для анимации
        const priceChange = (newPrice - oldPrice) / totalFrames; // Изменение цены на каждом кадре

        let currentFrame = 0; // Текущий кадр

        const interval = setInterval(()=>{
            currentFrame++;

            const newPriceValue = Math.round(oldPrice + priceChange * currentFrame);
            total.textContent = newPriceValue;

            if (currentFrame >= totalFrames) {
                clearInterval(interval);
                total.textContent = newPrice; // Устанавливаем конечное значение
            }
        }, 1000/30); 
    }

    calcItem.forEach((item)=>{
        item.setAttribute("type","number");
    });

    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcSquareValue = +calcSquare.value;

        let totalValue = 0;
        let calcCountValue = 1;
        let calcDayValue = 1;

        oldPrice = +total.textContent;
        
        if(calcCount.value > 1){
            calcCountValue += +calcCount.value / 10;
        }

        if(calcDay.value && calcDay.value < 5){
            calcDayValue = 2;
        }else if(calcDay.value && calcDay.value < 10){
            calcDayValue = 1.5;
        }

        
        if(calcType.value && calcSquare.value){
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
        }else{
            totalValue = 0;
        }

        newPrice = totalValue;
    }

    calcBlock.addEventListener("change", (e)=>{
        if(e.target === calcType || e.target === calcSquare ||
            e.target === calcCount || e.target === calcDay){
                countCalc();
                updateTime();
        }
    });
}

export default calculator;