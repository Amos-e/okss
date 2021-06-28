let overlay = document.querySelector(".overlay");
let modal1 = document.querySelector(".modal1");
let submitbtn = document.querySelector(".modal1 #submit");
let form = document.forms[0];

form.addEventListener("submit", function(e){
    e.preventDefault();
    overlay.style.cssText = "display: block";
    modal1.style.cssText = "display: block;";
});

submitbtn.addEventListener("click", function(){
    modal1.style.cssText = "display: none;";
    form.submit();
});