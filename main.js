const body = document.querySelector("body")
const header = document.querySelector(".header")
const apresentation = document.querySelector(".section")
const btnMobile = document.querySelector(".btn-mobile")
const nav = document.querySelector(".nav")

function toggleMenu(event){
    if(event.type === "touchstart") event.preventDefault()
    
    nav.classList.toggle("active")
    body.classList.toggle("active")
    let active = nav.classList.contains("active")

    if(active){
        header.classList.add("active")
        event.currentTarget.setAttribute("aria-expended", "true")
        event.currentTarget.setAttribute("aria-label", "Fechar menu")
    } 
    if(!active){
        event.currentTarget.setAttribute("aria-expended", "false")
        event.currentTarget.setAttribute("aria-label", "Abrir menu")
        setTimeout(()=>{
            header.classList.remove("active")
        },1000)
    }
}

btnMobile.addEventListener("click", toggleMenu)
btnMobile.addEventListener("touchstart", toggleMenu);

const headerAtivo = () =>{
    if(window.pageYOffset > 80) header.classList.add("wrap-header")
    if(window.pageYOffset < 80) header.classList.remove("wrap-header")
}

window.addEventListener("scroll", e =>{
     headerAtivo() 
})