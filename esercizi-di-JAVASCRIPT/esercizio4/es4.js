// ESERCIO 4-1

// let numero = 0;

// function calcolate(num){

//     if(num < 0){
//         alert(`Il valore e negativo`);
//     }
//     else if(num > 0){
//         alert(`Il valore e positivo`);
//     }
//     else{
//         alert(`Il valore e zero`);
//     }
// }

// calcolate(numero);


// ESERCIZIO 4-2

// let arg1 = 2;
// let arg2 = 2;

// function same(argo1, argo2){
//     if(argo1 === argo2){
//         // alert(`I due argomenti sono uguali`);
//     }
//     else {
//         // alert(`I due argomenti sono differenti`)
//     }
// };

// same(arg1, arg2);



// ESERCIZIO 4-3

// let testo = prompt(`Scrivi qualcosa`);
// let lettera_i = 0;

// function calcolate(){
//     for(let i = 0; i < testo.length; i++){
//         let char = testo.charAt(i).toLowerCase();
//         switch(char){
//             case "i":
//                 lettera_i += 1;
//                 break;
//         }
//     }

// }

// calcolate();
// console.log(`Lettera i e di ${lettera_i}`);



// ESERCIZIO 4-4

// let raggio = 5;

// function calcolateArea(radius){

//     const area = Math.pow(radius, 2) * Math.PI;
//     console.log(`La tua area calcolata e di:`+ " " + Math.floor(area));
// }

// calcolateArea(raggio);


// ESERCIZIO 4-5

// let baseVoto = 8;
// let golFatti = 2;
// let assistEffettuati = 1;
// let autogol = 0;
// let ammonizione = true;
// let espulsione = false;


// function calcolateFantaCalcio(baseVoto, golFatti, assistEffettuati, autogol, ammonizione, espulsione){

//     let puntiGol = golFatti * 3;
//     let  puntiAssist = assistEffettuati;
//     let puntiAutogol = autogol * 2;
//     let puntiAmmonizione = 0;
//     let puntiEspulsione = 0;


//     if (ammonizione) puntiAmmonizione = 0.5;
//     if (espulsione) puntiEspulsione = 1;
   
    
//     const bonus = puntiAssist + puntiGol;
//     const malus = puntiAmmonizione + puntiEspulsione + puntiAutogol;

//     const result = baseVoto + (bonus - malus);

//     return result;
// }

// const votoGiocatore = calcolateFantaCalcio(baseVoto, golFatti, assistEffettuati, autogol, ammonizione, espulsione);
// console.log(votoGiocatore);


// ESERCIZIO 4-7

// let num = prompt(`Inserisci 'Pari' o 'Dispari':`)

// function calcolatePari(){

//     let randomNum = Math.floor(Math.random() * 100);

//     if (randomNum % 2 === 0){
//         alert(`Hai indovinato, e un numero pari`);
//     }
//     else if (randomNum % 2 !== 0){
//         alert(`Hai indovinato, e un numero dispari`);
//     }
//     else {
//         alert(`La risposta da te inserito non e valido`);
//     }

//     console.log(randomNum);
// }

// calcolatePari();





