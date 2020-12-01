//jsnack 3
//Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

$(document).ready(function () {
    //START JS

    // Array con costante
    const constArray = ["Pippo", "Pluto", "Paperino"];
    console.log("Array iniziale:", constArray);
    constArray.push("Zio Paperone");
    console.log("Array dopo push:", constArray);
    constArray[0] = "Paperoga";
    console.log("Array dopo cambiamento primo elemento:", constArray);
    
    // Oggetti con costante
    const constObj = {
    name : "Paperino"
    }
    console.log("Oggetto prima dell'aggiunta:", constObj);

    constObj.gen = "Duck";
    constObj.age = 30;
    
    console.log("Oggetto dopo l'aggiunta:", constObj);

    // Oggetti con variabili
    const name = "Topolino";
    const age = 35;
    const gen = "Mouse";

    const newCharacter = {
        name,
        age,
        gen
    };

    console.log("Oggetto creato con le variabili", newCharacter);

    // Ciclo con let (scope)
    for (let i = 0; i < constArray.length; i++) {
        console.log(i, constArray[i]);
    }

    // Arrow function
    const sum = () => 5 + 5;
    var result = sum();
    console.log("Risultato arrow function:", result);

    // Funzione con spread
    var somma = multiSum(10, 22, 57)
    console.log("Risultato funzione con spread", somma);

    // Unione di due array
    var array1 = [1, 3, 5 ,7, 9];
    console.log("Primo array:", array1);

    var array2 = [2, 4, 6 ,8, 10];
    console.log("Secondo array:", array2);

    var arrayMerge = [...array1, ...array2];
    console.log("Merge dei due array", arrayMerge);

    //END JS
});

// MY FUNCTIONS--------------------------

const multiSum = (...numbers) => {
    var sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}