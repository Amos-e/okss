//For main resources
let fakeSubjectLinks = Array.from(document.querySelectorAll(".subject"));

fakeSubjectLinks.forEach((fakeSubjectLink)=>{
    fakeSubjectLink.addEventListener("click", ()=>{
        let realSubjectLink = fakeSubjectLink.querySelector("a");
        realSubjectLink.click();
    });
});

//For Subject detail
let fakeSubjectLinks2 = Array.from(document.querySelectorAll(".sub"));

fakeSubjectLinks2.forEach((fakeSubjectLink)=>{
    fakeSubjectLink.addEventListener("click", ()=>{
        let realSubjectLink = fakeSubjectLink.querySelector("a");
        realSubjectLink.click();
    });
});
