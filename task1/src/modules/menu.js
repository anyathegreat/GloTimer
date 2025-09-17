const menu = () => {
    const menuBtn = document.querySelector(".menu");
    const menu = document.querySelector("menu");
    const menuItems = menu.querySelectorAll("ul>li>a");

    function handleMenu(){
        menu.classList.toggle("active-menu");
    }

    menuBtn.addEventListener("click",handleMenu);

    menu.addEventListener("click",(e)=>{
        const link = e.target.closest('ul > li > a');

        if(e.target.closest(".close-btn")){
            handleMenu();
        }

        menuItems.forEach((item)=>{
            if(item === link){
                handleMenu();
            }
        });
    });
}

export default menu;