const body = document.querySelector("body")
const header = document.querySelector(".header")
const apresentation = document.querySelector(".apresentation")
const btnMobile = document.querySelector(".btn-mobile")
const nav = document.querySelector(".nav")
const apresentationParagraph = document.querySelector(".apresentation-paragraph")
const discord = document.querySelector(".discord").parentElement
const portfolioWorks = [...document.querySelectorAll(".portfolio--works")]
const portfolio = document.querySelector(".portfolio")
const btnShowMore = document.querySelector(".btn-show-more")
const btnShowLess = document.querySelector(".btn-show-less")
const works = document.querySelectorAll(".work")

let onSpan = false

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

const creatHoverWork = () =>{
    let hoverWorkDiv = document.createElement("div")

    let hoverWorkP = document.createElement("p")
    hoverWorkP.innerHTML = `Conteúdo</br>indisponível`
    hoverWorkDiv.appendChild(hoverWorkP)
    return hoverWorkDiv
}

function mouseHoverWork(elemento){
    const eventAdd = () => {
        if(elemento.classList.contains("active")){
            let newElement = elemento.appendChild(creatHoverWork())
            newElement.classList.add("hover-white")
            elemento.addEventListener("mouseleave", ()=>{
            setInterval(()=>{
                newElement.remove()
            },500)
        });
        }
    };
    elemento.addEventListener("mouseenter", eventAdd);
}

btnShowMore.addEventListener("click", ()=>{
    btnShowMore.classList.add("btn-down")
    setTimeout(()=>{
        portfolio.classList.toggle("active")
        works.forEach((elemento, index) =>{
        elemento.classList.add("active")
        if(index > 2){
            elemento.classList.toggle("off")
        }
        btnShowMore.classList.remove("btn-down")
    })
    },500)
})

btnShowLess.addEventListener("click", ()=>{
    btnShowLess.classList.add("btn-up")
    setTimeout(()=>{
            portfolio.classList.toggle("active")
            works.forEach((elemento,index)=>{
            if(index > 2){
                elemento.classList.remove("active")
                if(index > 2){
                    elemento.classList.toggle("off")
                }
            }
            btnShowLess.classList.remove("btn-up")
        })
    },500)
})

const addHoverWork = () =>{
    works.forEach(elemento =>{
        mouseHoverWork(elemento)
    })
}

addHoverWork()

console.log(works)

//scroll reveal code
// window.sr = ScrollReveal({ reset: true });

// sr.reveal(".name-apresentation", {duration: 1000})