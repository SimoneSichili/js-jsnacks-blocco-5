//jsnack 3
//Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

$(document).ready(function () {
    //START JS

    var cityList = [
        "Atene",
        "Berlino",
        "Cracovia",
        "Dubai",
        "Firenze",
        "Istanbul",
        "Londra",
        "Parigi",
        "Roma",
        "Tokyo",
    ];

    console.log("Array iniziale:", cityList);


    var newCityList = longSelectionES5(2, 8, cityList);
    console.log("Selezione dall'array ES5 Metodo 1:", newCityList);

    var newCityList = shortSelectionES5(1, 4, cityList);
    console.log("Selezione dall'array ES5 Metodo 2:", newCityList);

    var newCityListES6 = longSelectionES6(1, 5, cityList);
    console.log("Selezione dall'array ES6 Metodo 1:", newCityListES6);

    var newCityListES6 = shortSelectionES6(2, 6, cityList);
    console.log("Selezione dall'array ES6 Metodo 2:", newCityListES6);

    //END JS
});

// MY FUNCTIONS--------------------------

// VERSIONE ES5
// Metodo 1
function longSelectionES5(a, b, array) {
    
    var newArray= [];

    for (var i = 0; i < array.length; i++) {
        if (i >= a && i <= b) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

// Metodo 2
function shortSelectionES5(min, max, array) {
 
    var newArray= [];

    for (var i = min; i <= max; i++) {
        newArray.push(array[i]);
    }
    return newArray;
}

// VERSIONE ES6
// Metodo 1 
const longSelectionES6 = (x, y, arrayB) => {
    
    let newArray= [];

    for (let i = 0; i < arrayB.length; i++) {

        if (i >= x && i <= y) {
            newArray.push(arrayB[i]);
        }
    }
    return newArray;
}

// Metodo 2
const shortSelectionES6 = (min, max, arrayB) => {
    
    let newArray= [];

    for (let i = min; i <= max; i++) {
        newArray.push(arrayB[i]);
    }
    return newArray;
}