const body = document.querySelector("body");
const header = document.querySelector(".header");
const menuLink = [...document.querySelectorAll('.btn-link[href^="#"]')];
const apresentation = document.querySelector(".apresentation");
const btnMobile = document.querySelector(".btn-mobile");
const nav = document.querySelector(".nav");
const apresentationParagraph = document.querySelector(".apresentation-paragraph");
const discordBtn = document.querySelector(".social-discord");

let onSpan = false;

window.addEventListener("scroll", () => {
  scrollPage();
});

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();

  nav.classList.toggle("active");
  body.classList.toggle("active");
  const active = nav.classList.contains("active");

  event.currentTarget.setAttribute("aria-expanded", active ? "true" : "false");
  event.currentTarget.setAttribute("aria-label", active ? "Fechar menu" : "Abrir menu");

  if (active) {
    header.classList.add("active");
  } else {
    setTimeout(() => {
      header.classList.remove("active");
    }, 800);
  }
}

function toggleFlip(card) {
  card.classList.toggle("flipped");
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

menuLink.forEach((elemento) => {
  elemento.addEventListener("click", (event) => {
    event.preventDefault();

    nav.classList.remove("active");
    body.classList.remove("active");
    btnMobile.setAttribute("aria-expanded", "false");
    btnMobile.setAttribute("aria-label", "Abrir menu");
    setTimeout(() => {
      header.classList.remove("active");
    }, 800);

    const destino = document.querySelector(elemento.getAttribute("href"));
    if (destino) {
      setTimeout(() => {
        destino.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  });
});

async function copiarDiscord() {
  try {
    const texto = discordBtn.querySelector(".discord").textContent;
    await navigator.clipboard.writeText(texto);
    showDiscordText();
  } catch (error) {
    console.error("Erro ao copiar Discord:", error);
  }
}

const showDiscordText = () => {
  const discordText = document.querySelector(".discord--text");
  if (!discordText) return;
  discordText.classList.add("active");
  setTimeout(() => {
    discordText.classList.remove("active");
  }, 3000);
};

if (discordBtn) {
  discordBtn.addEventListener("click", copiarDiscord);
}

const spanApresentation = () => {
  const span = document.createElement("span");
  span.classList.add("name-apresentation");
  span.innerHTML = `Olá eu sou o Rafael =&#41;`;
  apresentationParagraph.insertAdjacentElement("afterbegin", span);
};

const scrollPage = () => {
  if (window.pageYOffset > 80) header.classList.add("wrap-header");
  if (window.pageYOffset < 80) header.classList.remove("wrap-header");
  if (!onSpan) {
    if (window.pageYOffset > apresentation.getBoundingClientRect().bottom / 4) {
      spanApresentation();
      onSpan = true;
    }
  }
};
