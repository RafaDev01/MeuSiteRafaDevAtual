const body = document.querySelector("body")
const header = document.querySelector(".header")
const apresentation = document.querySelector(".apresentation")
const btnMobile = document.querySelector(".btn-mobile")
const nav = document.querySelector(".nav")
const apresentationParagraph = document.querySelector(".apresentation-paragraph")
let onSpan = false

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
        },800)
    }
}

btnMobile.addEventListener("click", toggleMenu)
btnMobile.addEventListener("touchstart", toggleMenu);

const spanApresentation = () =>{
    let span = document.createElement("span")
    span.classList.add("name-apresentation")
    span.innerHTML = `Olá eu sou o Rafael =&#41;`
    apresentationParagraph.insertAdjacentElement('afterbegin', span)

    return true
}

const scrollPage = () =>{
    if(window.pageYOffset > 80) header.classList.add("wrap-header")
    if(window.pageYOffset < 80) header.classList.remove("wrap-header")
    if(!onSpan){
        if(window.pageYOffset > apresentation.getBoundingClientRect().bottom / 4){
            spanApresentation()  
            onSpan = true
        }
    }
}

window.addEventListener("scroll", e =>{
     scrollPage() 
})

//scroll reveal code
// window.sr = ScrollReveal({ reset: true });

// sr.reveal(".name-apresentation", {duration: 1000})