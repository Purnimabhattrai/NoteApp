const notesContainer = document.querySelector(".notes-container");

const createbtn = document.querySelector(".create");


createbtn.addEventListener("click",()=>{

    let inputbox = document.createElement("div");

    let text = document.createElement("p");

    let img = document.createElement("img");


    inputbox.className = "input-box";

    text.className = "note-text";


    text.setAttribute("contenteditable","true");


    img.src = "Download Free Vectors, Images, Photos & Videos _ Vecteezy.jpg";


    inputbox.appendChild(text);

    inputbox.appendChild(img);


    notesContainer.appendChild(inputbox);

});



notesContainer.addEventListener("click",(e)=>{

    if(e.target.tagName === "IMG"){

        e.target.parentElement.remove();

    }

});

function store(){
    localStorage.setItem("notes",
         notesContainer.innerHTML);
}
