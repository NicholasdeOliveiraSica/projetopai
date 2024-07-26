const menuOpen = document.querySelector("nav.open")
const txtMenuOpen = document.querySelector("nav.open a")
const menuClose = document.querySelector("nav.bloco")
const focusMask = document.querySelector("div.focus-mask")
const formMask = document.querySelector("div.form-mask")
const form = document.querySelector("form.form-fale-conosco")

function menuAbrindo(){
    menuOpen.style.top = "20px"
    menuOpen.style.right = "20px"
    menuOpen.style.visibility = "visible"
    menuClose.style.visibility = "hidden"
    focusMask.style.display = "block"
}

function menuFechando(){
    menuOpen.style.top = "-50%"
    menuOpen.style.right = "-50%"
    menuClose.style.visibility = "visible"
    focusMask.style.display = "none"
}

function formVem(){
    form.style.left = "50%"
    formMask.style.display = "block"
}

function formVai(){
    form.style.left = "-150px"
    formMask.style.display = "none"
}
