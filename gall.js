function filterImages(event, category){

let cards = document.querySelectorAll(".card");
let buttons = document.querySelectorAll(".filters button");

buttons.forEach(btn => btn.classList.remove("active"));
event.target.classList.add("active");

cards.forEach(card => {

    if(category === "all"){
        card.classList.remove("hide");
    }
    else if(card.classList.contains(category)){
        card.classList.remove("hide");
    }
    else{
        card.classList.add("hide");
    }

});

}

// DARK MODE
const toggle = document.getElementById("modeToggle");

toggle.onclick = () => {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
    toggle.textContent = "☀️";
}
else{
    toggle.textContent = "🌙";
}

};
