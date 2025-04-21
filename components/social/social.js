const discord = document.querySelector(".discord").parentElement

async function copiarTexto() {
    try {
        await navigator.clipboard.writeText(discord.lastChild.textContent);
    } catch (error) { "erro" }
}

discord.addEventListener("click", () => {
    copiarTexto()
    showDiscordText()
})

showDiscordText = () => {
    let discordText = document.querySelector(".discord--text")
    discordText.classList.add("active")
    setTimeout(() => {
        discordText.classList.remove("active")
    }, 8000)
}