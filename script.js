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

document.getElementById("bonus").addEventListener("click", () => {

    let d1 = new Date();
    fraise = fraise * 100;
    let startBonus = setInterval(counterBonus, 1000);
    function counterBonus() {
        let d2 = new Date();
        let dateDiff = d2 - d1;
        if (dateDiff > 30000) {
            fraise = fraise / 100;
            clearInterval(startBonus);
        };

    };
    
});

