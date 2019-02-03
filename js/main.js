// create close button

const myList = document.getElementsByTagName("li");
let i;
for (i = 0; i < myList.length; i++){
    const span = document.createElement("span");
    const closeX = document.createTextNode("\u00d7");
    span.className = "close";
    span.appendChild(closeX);
    myList[i].appendChild(span);
}

// hide li on click close button

const close = document.getElementsByClassName("close");
let j;
for (j = 0; j < close.length; j++){
    close[j].addEventListener("click", function(){
        const div = this.parentElement;
        div.style.display = "none";
    });
}

// add color to checked li

const myUl = document.querySelector("ul");
myUl.addEventListener("click", function(event){
    if(event.target.tagName.toLowerCase() === "li"){
        event.target.classList.toggle("checked");
    }
}, false);


    // add new Li after click addbutton
const addButton = document.getElementById("addBtn");


addButton.addEventListener("click", function(){
    const newLi = document.createElement("li");
    const inputText = document.getElementById("myTask").value;
    const text = document.createTextNode(inputText);
    newLi.appendChild(text);
    if (inputText === ""){
        alert("Pole nie może być puste");
    } else {
        document.getElementById("ulCont").appendChild(newLi);
    }
    document.getElementById("myTask").value = "";
    newLi.className = "col-12 mb-2";

    const span = document.createElement("span");
    const closeX = document.createTextNode("\u00d7");
    span.className = "close";
    span.appendChild(closeX);
    newLi.appendChild(span);

    for (i = 0; i < close.length; i++){
        close[i].addEventListener("click", function(){
            const div = this.parentElement;
            div.style.display = "none";
        })
    }
}, false);