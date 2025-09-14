const modal = ()=>{
    const buttons = document.querySelectorAll(".popup-btn");
    const modal = document.querySelector(".popup");
    const closeBtn = modal.querySelector(".popup-close");
    const modalContent = modal.querySelector(".popup-content");
    const width = screen.availWidth;

    if(width > 768){
        modalContent.style.transform = "scale(0)";
        modalContent.style.transition = "transform 0.3s ease";
    }

    buttons.forEach((btn)=>{
        btn.addEventListener("click",()=>{
            modal.style.display = "block";

            if(width > 768){
                setTimeout(() => {
                    modalContent.classList.add("show");
                    if(modalContent.classList.contains("show")){
                        modalContent.style.transform = "scale(1)";
                    }
                }, 10);
            }
        });
    });

    closeBtn.addEventListener("click",()=>{
        modal.style.display = "none";
        if(width > 768){
            modalContent.classList.remove("show");
            modalContent.style.transform = "scale(0)";
        }
    });
}

export default modal;