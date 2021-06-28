//Working on Links
let fakeLinks = Array.from(document.querySelectorAll(".fake-nav > *"));
let realLinks = Array.from(document.querySelectorAll("#nav-menu > *"));

fakeLinks.forEach(function(fakelink){
    fakelink.addEventListener("click", function(){
        for(let i =0; i<fakeLinks.length; i++) {
            let link = fakelink.getAttribute("href");
            if(realLinks[i].getAttribute("href") == link ) {
                realLinks[i].click();
            }
        }
    });
});

// Coloring of Active Link
let links = document.querySelectorAll(".fake-nav > *");
links = Array.from(links);
links.forEach(function(link){
    if (document.location["pathname"] == link.getAttribute("href")) {
        link.style.cssText = "color: #179e75;";
    }
});
