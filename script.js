let fraise = 1;
let multiplier = 1;
let counter = 0;
const upgrade = 1.15;
const upgradeAuto = 1.20;
let prixMulti = 40;
let prixAuto = 70;
let autoPlus = 1;
let nbrMulti = 0;
let nbrAuto = 0;
let parSec = 0;

/* Bouton principal du clicker, incrémente de 1 par click */

document.getElementById("buttonFraise").addEventListener("click", () => {

    counter = counter + fraise;
    document.getElementById("counter").innerHTML = counter;

    if (counter >= prixMulti) {

        document.getElementById("multiplier").style.backgroundColor = "green";

    } else {

        document.getElementById("multiplier").style.backgroundColor = "tomato";

    }

    if (counter >= prixAuto) {

        document.getElementById("autoclicker").style.backgroundColor = "green";

    } else {

        document.getElementById("autoclicker").style.backgroundColor = "tomato";

    }

});



/* Bouton multiplier, multiplie par 2 les clicks quand on l'active */

document.getElementById("multiplier").addEventListener("click", () => {

    document.getElementById("multiplier").style.backgroundColor = "tomato";

    if (counter < prixMulti) {

        document.getElementById("multiplier").style.backgroundColor = "grey";

        setTimeout(function () { document.getElementById("multiplier").style.backgroundColor = "tomato"; }, 5000);

    } else {

        multiplier = multiplier + 1;

        fraise =  multiplier * 2;

        counter = counter - prixMulti;

        prixMulti = parseInt(prixMulti * upgrade);

        nbrMulti = nbrMulti + 1;

        document.getElementById("multiplier").innerHTML = "x " + fraise;

    }

    document.getElementById("counter").innerHTML = counter;

    document.getElementById("prixMulti").innerHTML = "prix de l'upgrade : " + prixMulti;

    document.getElementById("nbrMulti").innerHTML = "Nombre de fois achetés : " + nbrMulti;

});

/* Bouton autoclicker, active l'autoclick et fais + 1 toutes les secondes */

document.getElementById("autoclicker").addEventListener("click", () => {

    document.getElementById("autoclicker").style.backgroundColor = "tomato";

    if (counter < prixAuto) {

        document.getElementById("autoclicker").style.backgroundColor = "grey";

        setTimeout(function () { document.getElementById("autoclicker").style.backgroundColor = "tomato"; }, 5000);

    } else {

        counter = counter - prixAuto;

        prixAuto = parseInt(prixAuto * upgradeAuto);

        nbrAuto = nbrAuto + 1;

        autoPlus = autoPlus + 1;

        parSec = parSec + autoPlus;

        setInterval(function () { counter = counter + autoPlus; document.getElementById("counter").innerHTML = counter; }, 1000);

    }

    document.getElementById("counter").innerHTML = counter;

    document.getElementById("prixAuto").innerHTML = "prix de l'upgrade : " + prixAuto;

    document.getElementById("nbrAuto").innerHTML = "Nombre de fois achetés : " + nbrAuto;

    document.getElementById("parSec").innerHTML = "Fraises par sec : " + parSec;

});


/* Bouton Bonus, active le bouton après 5min et lance un bonus click x3 pendant 30sec */

document.getElementById("bonus").disabled = true;

let timerBonus = setInterval(activateBonus,300000);

function activateBonus() {

    document.getElementById("bonus").disabled = false;
    document.getElementById("bonus").style.backgroundColor = "tomato";

}


document.getElementById("bonus").addEventListener("click", () => {

    document.getElementById("bonus").disabled = true;

    document.getElementById("bonus").style.backgroundColor = "grey";

    fraise = fraise * 3;

    let startBonus = setInterval(counterBonus, 1000);

    let timer = 30;

    function counterBonus() {
       
        timer -= 1;

        if (timer > 9) {

            document.getElementById("timerBonus").innerHTML = "00:" + timer;

        } else if (timer > 0) {

            document.getElementById("timerBonus").innerHTML = "00:0" + timer;

        }  else {

            document.getElementById("timerBonus").innerHTML = "00:00";

            fraise = fraise / 3;

            clearInterval(startBonus);
        }
          
    };

});

