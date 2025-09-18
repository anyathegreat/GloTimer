const slider = (sliderBlocks, slide, activeSlideClass = "portfolio-item-active", activeDotClass  = "dot-active") => {
    // const sliderBlock  = document.querySelector(".portfolio-content");
    // const slides = document.querySelectorAll(".portfolio-item");
    const sliderBlock  = document.querySelector(`${sliderBlocks}`);
    if(!sliderBlock) return;

    const slides = document.querySelectorAll(`${slide}`);
    if(slides.length === 0) return;

    const listDots = document.querySelector(".portfolio-dots");

    const timeInterval = 2000;
    
    let dots = createDots();
    let currentSlide = 0;
    let interval;

    function createDots(){
        let dots = [];

        slides.forEach((item,index)=>{
            let dot = document.createElement("li");
            dot.className = index === 0 ? `dot ${activeDotClass}` : "dot";

            dots.push(dot);
            listDots.appendChild(dot);
        })

        return dots;
    }

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    }

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    }

    const autoSlide = () => {
        prevSlide(slides, currentSlide, activeSlideClass);
        prevSlide(dots, currentSlide, activeDotClass);
        currentSlide++;

        if(currentSlide >= slides.length){
            currentSlide = 0;
        }

        nextSlide(slides, currentSlide, activeSlideClass);
        nextSlide(dots, currentSlide, activeDotClass);
    }

    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide,timer);
    } 

    const stopSlide = () => {
        clearInterval(interval);
    }

    sliderBlock.addEventListener("click", (e)=>{
        e.preventDefault();

        if(!e.target.matches(".dot, .portfolio-btn")) return;

        prevSlide(slides, currentSlide, activeSlideClass);
        prevSlide(dots, currentSlide, activeDotClass);

        if(e.target.matches("#arrow-right")){
            currentSlide++;
        }else if(e.target.matches("#arrow-left")){
            currentSlide--;
        }else if(e.target.classList.contains("dot")){
            dots.forEach((dot,index)=>{
                if(e.target === dot){
                    currentSlide = index;
                }
            });
        }

        if(currentSlide >= slides.length){
            currentSlide = 0;
        }

        if(currentSlide < 0){
            currentSlide = slides.length - 1;
        }

        nextSlide(slides, currentSlide, activeSlideClass);
        nextSlide(dots, currentSlide, activeDotClass);
    });

    sliderBlock.addEventListener("mouseenter", (e) => {
        if(e.target.matches(".dot, .portfolio-btn")){
            stopSlide();
        };
    }, true);

    sliderBlock.addEventListener("mouseleave", (e) => {
        if(e.target.matches(".dot, .portfolio-btn")){
            startSlide(timeInterval);
        };
    }, true);

    startSlide(timeInterval);
}

export {slider};