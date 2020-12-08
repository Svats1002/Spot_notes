console.log("welcome to Spot Notes");
showNotes();

// If user adds a note, add it to the localStorage

let addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click", function (e) {
    let addtxt = document.getElementById('addtxt');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addtxt.value = "";

    showNotes();
});

// Function to show elements from localStorage

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let txt = "";
    notesObj.forEach(function (element, index) {
        txt += `
        <div class="notecard my-2 mx-2 card" style="width: 18rem;">
             <div class="card-body">
                 <h5 class="card-title">Note ${index + 1}</h5>
                 <p class="card-text">${element}</p>
                 <button id="${index}" onclick = "DeleteNote(this.id)" class="btn btn-primary"><i class="fas fa-trash"></i></button>
             </div>
        </div>
        `;
        
        

    });
    let notesele = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesele.innerHTML = txt;
    }
    else {
        notesele.innerHTML = ` Nothing to show you "Add notes "`;
    }
}
function DeleteNote(index)
{ 
    
     
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
    
}

let search = document.getElementById('searchtxt');
search.addEventListener('input',function(){
    let inpvalue = search.value.toLowerCase();
    
    let notecard = this.getElementsByClassName('notecard');
    Array.from(notecard).forEach(function(element){
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        if(cardtxt.includes(inpvalue))
        {
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
})

