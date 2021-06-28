// Modal Boxes
//Modal Box For Popular Post
let bodyOverlay = document.querySelector(".body-overlay");

let popularFullToggle = document.querySelector(".read-more[parent='popular']");
let popular = document.querySelector(".modal-article-1");
let poplarClose = document.querySelector("div[role='close-1']");

popularFullToggle.addEventListener("click", function(e){
    bodyOverlay.style.display = "block";
    popular.style.display = "block";
});
poplarClose.addEventListener("click", function(e){
    bodyOverlay.style.display = "none";
    popular.style.display = "none";
});

//Modal Box For Question Of The Day
let questionFullToggle = document.querySelector(".read-more[parent='question']");
let questionotd = document.querySelector(".modal-article-2");
let questionClose = document.querySelector("div[role='close-2']");

questionFullToggle.addEventListener("click", function(e){
    bodyOverlay.style.display = "block";
    questionotd.style.display = "block";
});
questionClose.addEventListener("click", function(e){
    bodyOverlay.style.display = "none";
    questionotd.style.display = "none";
});

//Download File
let downloadButton = document.querySelector("div[role='download']");
let downloadLink = document.querySelector("#download-link")
downloadButton.addEventListener("click", ()=>{
    downloadLink.click();
});

styles = "color: green;";
console.log("%c Be careful what you excecute in the console.", "color: green; font-size: 24px; font-family: 'Fira Code';")
console.log("%c--------------------------------------", styles);
console.log("%c|                                    |", styles);
console.log("%c|                                    |", styles);
console.log("%c|                                    |", styles);
console.log("%c|                                    |", styles);
console.log("%c|             MORSE                  |", styles);
console.log("%c|                                    |", styles);
console.log("%c|                                    |", styles);
console.log("%c|                                    |", styles);
console.log("%c|                                    |", styles);
console.log("%c--------------------------------------", styles);