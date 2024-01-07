function dark(){
    var body = document.getElementById("body_page")
    var container = document.querySelector(".container")
    var about = document.querySelector(".about-me")
    var dark_ligh_theme = document.querySelector(".dark_ligh_theme")
    var theme_cicle = document.querySelector(".theme_cicle")
    var menu = document.querySelector(".menu")
    body.classList.toggle("dark")
    dark_ligh_theme.classList.toggle("dark")
    theme_cicle.classList.toggle("dark")
    menu.classList.toggle("dark")
    container.classList.toggle("dark")
    about.classList.toggle("dark")
}

function addFollow(){
    var add_followers = document.querySelector(".add-followers");
    add_followers.innerHTML = 1; 
}

function more_languages(){
    var more_languages = document.querySelector(".more_languages")
    more_languages.classList.toggle("active")
}

function openAccordion(){
    const accordionContent = document.querySelector(".accordion-content")
    const accordionOpenButton = document.querySelector(".accordion-open-button")
    accordionContent.classList.toggle("open")
    accordionOpenButton.classList.toggle("open")
}

function openAccordion2(){
    const accordionContent = document.querySelector(".accordion-content2")
    const accordionOpenButton = document.querySelector(".accordion-open-button2")
    accordionContent.classList.toggle("open")
    accordionOpenButton.classList.toggle("open")
}

function openAccordion3(){
    const accordionContent = document.querySelector(".accordion-content3")
    const accordionOpenButton = document.querySelector(".accordion-open-button3")
    accordionContent.classList.toggle("open")
    accordionOpenButton.classList.toggle("open")
}

function openAccordion4(){
    const accordionContent = document.querySelector(".accordion-content4")
    const accordionOpenButton = document.querySelector(".accordion-open-button4")
    accordionContent.classList.toggle("open")
    accordionOpenButton.classList.toggle("open")
}

function openAccordion5(){
    const accordionContent = document.querySelector(".accordion-content5")
    const accordionOpenButton = document.querySelector(".accordion-open-button5")
    accordionContent.classList.toggle("open")
    accordionOpenButton.classList.toggle("open")
}
