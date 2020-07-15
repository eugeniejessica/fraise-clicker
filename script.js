let fraise = 1;
let counter = 0;

document.getElementById("buttonFraise").addEventListener("click", () => {
    
    counter = counter + fraise;
    document.getElementById("counter").innerHTML = counter;
});