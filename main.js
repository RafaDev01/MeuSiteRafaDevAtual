const body = document.querySelector("body")
const header = document.querySelector(".header")
const apresentation = document.querySelector(".apresentation")
const btnMobile = document.querySelector(".btn-mobile")
const nav = document.querySelector(".nav")
const apresentationParagraph = document.querySelector(".apresentation-paragraph")
const discord = document.querySelector(".discord").parentElement
const arrow = document.querySelector(".portfolio--works")
const works = document.querySelectorAll(".work")

let onSpan = false
let onHover = false

window.addEventListener("scroll", e =>{
    scrollPage() 
})

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

async function copiarTexto() {
    try { await navigator.clipboard.writeText(discord.lastChild.textContent);
    } catch (error) {"erro"}
  }

discord.addEventListener("click",()=>{
    copiarTexto()
    showDiscordText()
})

showDiscordText = () =>{ 
    let discordText = document.querySelector(".discord--text")
    discordText.classList.add("active")
    setTimeout(()=>{
        discordText.classList.remove("active")
    },8000)
}

const spanApresentation = () =>{
    let span = document.createElement("span")
    span.classList.add("name-apresentation")
    span.innerHTML = `Olá eu sou o Rafael =&#41;`
    apresentationParagraph.insertAdjacentElement('afterbegin', span)
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

const arrowShowMore = () => {
    let arrow = document.createElement("span")
}

const creatHoverWork = () =>{
    let hoverWorkDiv = document.createElement("div")
    hoverWorkDiv.classList.add("hover-white")

    let hoverWorkP = document.createElement("p")
    hoverWorkP.innerHTML = `Conteúdo</br>não disponivel`
    hoverWorkDiv.appendChild(hoverWorkP)
    return hoverWorkDiv
}

//scroll reveal code
// window.sr = ScrollReveal({ reset: true });

// sr.reveal(".name-apresentation", {duration: 1000})