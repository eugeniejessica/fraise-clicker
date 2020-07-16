let fraise = 1;
let counter = 0;
const upgrade = 2;
const upgradeAuto = 1.20;
let prixMulti = 100;
let prixAuto =  70;
let autoPlus = 1;
let nbrMulti = 0;
let nbrAuto = 0;
let parSec = 0;

/* Bouton principal du clicker, incrémente de 1 par click */

document.getElementById("buttonFraise").addEventListener("click", () => {
    
    counter = counter + fraise;
    document.getElementById("counter").innerHTML = counter;

    if(counter >= prixMulti) {

        document.getElementById("multiplier").style.backgroundColor = "green";

    } else {

        document.getElementById("multiplier").style.backgroundColor = "tomato";

    }

    if(counter >= prixAuto) {

        document.getElementById("autoclicker").style.backgroundColor = "green";
    
    } else {

        document.getElementById("autoclicker").style.backgroundColor = "tomato";

    }

});



/* Bouton multiplier, multiplie par 2 les clicks quand on l'active */

document.getElementById("multiplier").addEventListener("click", () => {

    document.getElementById("multiplier").style.backgroundColor = "tomato";

    if(counter < prixMulti) {

        document.getElementById("multiplier").style.backgroundColor = "grey";

        setTimeout(function(){ document.getElementById("multiplier").style.backgroundColor = "tomato";}, 5000);
         
    } else {

       fraise = fraise * 2;

       counter = counter - prixMulti;

       prixMulti = parseInt(prixMulti * upgrade);

       nbrMulti = nbrMulti + 1;
    
    }

    document.getElementById("counter").innerHTML = counter;

    document.getElementById("prixMulti").innerHTML = "prix de l'upgrade : " + prixMulti;

    document.getElementById("nbrMulti").innerHTML = "Nombre de fois achetés : " +  nbrMulti;

});

/* Bouton autoclicker, active l'autoclick et fais + 1 toutes les secondes */

document.getElementById("autoclicker").addEventListener("click", () => {

    document.getElementById("autoclicker").style.backgroundColor = "tomato";

    if(counter < prixAuto) {

        document.getElementById("autoclicker").style.backgroundColor = "grey";

        setTimeout(function(){ document.getElementById("autoclicker").style.backgroundColor = "tomato";}, 5000);

        let autoPlus = autoPlus + 1;

    } else {

        counter = counter - prixAuto;

        prixAuto = parseInt(prixAuto * upgradeAuto);

        nbrAuto = nbrAuto + 1;

        parSec = parSec + autoPlus;

        setInterval(function(){ counter = counter + autoPlus;document.getElementById("counter").innerHTML = counter;}, 1000);

    }

    document.getElementById("counter").innerHTML = counter;

    document.getElementById("prixAuto").innerHTML = "prix de l'upgrade : " + prixAuto;

    document.getElementById("nbrAuto").innerHTML = "Nombre de fois achetés : " + nbrAuto;

    document.getElementById("parSec").innerHTML = "Fraises par sec : " + parSec;
    
});

document.getElementById("bonus").disabled = true;

let timerBonus = setInterval(activateBonus,60000);

function activateBonus() {

    document.getElementById("bonus").disabled = false;
    document.getElementById("bonus").style.backgroundColor = "tomato";

}


document.getElementById("bonus").addEventListener("click", () => {
    document.getElementById("bonus").disabled = true;
    document.getElementById("bonus").style.backgroundColor = "grey";
    let d1 = new Date();
    fraise = fraise * 3;
    let startBonus = setInterval(counterBonus, 1000);
    function counterBonus() {
        let d2 = new Date();
        let dateDiff = d2 - d1;
        console.log(dateDiff);
        if (dateDiff > 30000) {
            fraise = fraise / 3;
            clearInterval(startBonus);
        };
        let timerDiff = 30000;
        timerDiff = (timerDiff - dateDiff);
        document.getElementById("timerBonus").innerHTML = "00:" + parseInt(timerDiff / 1000);

    };
    
});