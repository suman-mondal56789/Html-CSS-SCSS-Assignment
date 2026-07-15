const button = document.querySelector(".dropdown-btn");
const menu = document.querySelector(".dropdown-menu");
button.addEventListener("click",() =>{
    menu.classList.toggle("show");
}
);

document.addEventListener("click",(e) =>{
    if(!e.target.closest(".dropdown")){
        menu.classList.remove("show");
    }
    }
);
 
