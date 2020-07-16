let fraise = 1;
let counter = 0;
const upgrade = 2;
const upgradeAuto = 1.20;
let prixMulti = 100;
let prixAuto =  70;
let autoPlus = 1;
let nbrMulti = 0;
let nbrAuto = 0;

/* Bouton principal du clicker, incrémente de 1 par click */

document.getElementById("buttonFraise").addEventListener("click", () => {
    
    counter = counter + fraise;
    document.getElementById("counter").innerHTML = counter;

});



/* Bouton multiplier, multiplie par 2 les clicks quand on l'active */

document.getElementById("multiplier").addEventListener("click", () => {

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

    document.getElementById("prixMulti").innerHTML = prixMulti;

    document.getElementById("nbrMulti").innerHTML = "Nombre de fois achetés : " +  nbrMulti;

});

/* Bouton autoclicker, active l'autoclick et fais + 1 toutes les secondes */

document.getElementById("autoclicker").addEventListener("click", () => {

    if(counter < prixAuto) {

        document.getElementById("autoclicker").style.backgroundColor = "grey";

        setTimeout(function(){ document.getElementById("autoclicker").style.backgroundColor = "tomato";}, 5000);

        let autoPlus = autoPlus + 1;

    } else {

        counter = counter - prixAuto;

        prixAuto = parseInt(prixAuto * upgradeAuto);

        nbrAuto = nbrAuto + 1;

        setInterval(function(){ counter = counter + autoPlus;document.getElementById("counter").innerHTML = counter;}, 1000);

    }

    document.getElementById("counter").innerHTML = counter;

    document.getElementById("prixAuto").innerHTML = prixAuto;

    document.getElementById("nbrAuto").innerHTML = "Nombre de fois achetés : " + nbrAuto;
    
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