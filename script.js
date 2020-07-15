let fraise = 1;
let counter = 0;

document.getElementById("buttonFraise").addEventListener("click", () => {
    
    counter = counter + fraise;
    document.getElementById("counter").innerHTML = counter;

});

document.getElementById("multiplier").addEventListener("click", () => {

    fraise = fraise * 2;

});


document.getElementById("autoclicker").addEventListener("click", () => {

    setInterval(function(){ counter = counter + 1;document.getElementById("counter").innerHTML = counter;}, 1000)
    
});

