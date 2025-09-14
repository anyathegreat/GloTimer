const scroll = () => {
    const links = document.querySelectorAll("menu>ul>li>a");
    const linkScroll = document.querySelector(`main>a[href="#service-block"]`);

    links.forEach((item)=>{
        const url = item.href;
        const href = url.includes("#") ? url.split("#")[1] : null;
        const elementScroll = document.getElementById(`${href}`);
        
        item.addEventListener("click",(e)=>{
            e.preventDefault();

            elementScroll.scrollIntoView({behavior: "smooth"});
        });

    });
    
    linkScroll.addEventListener("click", (e)=>{
        e.preventDefault();

        const elementScroll = document.getElementById(`service-block`);
        elementScroll.scrollIntoView({behavior: "smooth"});
    });
}

export default scroll;