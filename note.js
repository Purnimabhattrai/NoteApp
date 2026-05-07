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
   store();

});



notesContainer.addEventListener("click",(e)=>{

    if(e.target.tagName === "IMG"){

        e.target.parentElement.remove();
       store();
    }

});
// store the notes in local storage
function store(){
    localStorage.setItem("note",
         notesContainer.innerHTML);
}

function showStorage(){
    notesContainer.innerHTML=localStorage.getItem("note");  //get item bata previously stored vayeko data aauxa and it get stored in the notesContainer jun display hunxa
}
showStorage();
notesContainer.addEventListener("keyup",store);
//keyup ley key press released vaye paxi store function call garxa and save garxa
//gives autosave effect

