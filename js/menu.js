let openBtn = document.getElementById("openBtn");

openBtn.addEventListener("click", () => {
    let nav = document.getElementById("nav");
    nav.classList.add("active");

    let closeBtn = document.getElementById("closeBtn");

    if(nav.classList.contains("active")){
        closeBtn.addEventListener("click", ()=>{
            nav.classList.remove("active");
        })
    }
})