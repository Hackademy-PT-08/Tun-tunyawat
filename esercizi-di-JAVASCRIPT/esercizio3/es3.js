// ESERCIZIO 3-1

// let voto = parseInt(prompt(`Inserisci il voto che hai preso`));


// if (voto < 18){
//     alert(`Voto insuficiente`);
// }
// else if (voto >= 18 && voto < 21){
//     alert(`Voto sufficiente`);
// }
// else if (voto >= 21 && voto < 24){
//     alert(`Voto buono`);
// }
// else if (voto >= 24 && voto < 27){
//     alert(`Voto distinto`);
// }
// else if (voto >= 27 && voto < 30){
//     alert(`Voto ottimo`);
// }
// else if (voto <= 30){
//     alert(`Voto eccellente`);
// }
// else{
//     alert(`Il voto da te inserito non e valido`);
// }


// ESERCIZIO 3-2

// let num = parseInt(prompt(`Inserisci un numero`));

// for(let i = 1; i < 13; i++){
//     let tabellina = num*i;
//     console.log(`${num} x ${i} = ${tabellina}`);
// };


// ESERCIZIO 3-3

// let password = prompt(`Inserisci la tua Password`);


// function calcola(password){
//     if (password.length < 6 || password.length > 20){

//         alert(`Errore!, La tua passaword deve essere almeno di 6 caratteri e minore di 20!!`);
//     }
//     else if(!password.includes("!") && !password.includes("?") && !password.includes("/") && !password.includes("-")){
    
//         alert(`Errore!, La tua password deve contenere almeno uno di questi caratteri speciali ? , / , ! , - .`);
//     }
//     else if(!/\d/.test(password)){
    
//         alert(`Errore!, la password deve contenere almeno un numero`);
//     }
//     else{
    
//         alert(`Password accettato, grazie per aver utilizzato il nostro servizio <3 <3 <3 <3`);
//     }
// }

// calcola(password);




// ESERCIZIO 3-4
// let testo = 'Il passaggio standard del Lorem Ipsum, utilizzato sin dal sedicesimo secolo. “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.La sezione 1.10.32 del "de Finibus Bonorum et Malorum", scritto da Cicerone nel 45 AC. “Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?."'


// let lettera_a = 0;
// let lettera_e = 0;
// let lettera_i = 0;
// let lettera_o = 0;
// let lettera_u = 0;
// let vocaliTot = 0;

// for(let i = 0; i < testo.length; i++){
//     let char = testo.charAt(i).toLowerCase();

//     switch(char){
//         case "a":
//             lettera_a += 1;
//             vocaliTot += 1;
//             break;
//         case "e":
//             lettera_e += 1;
//             vocaliTot += 1;
//             break;
//         case "i":
//             lettera_i += 1;
//             vocaliTot += 1;
//             break;
//         case "o":
//             lettera_o += 1;
//             vocaliTot += 1;
//             break;
//         case "u":
//             lettera_u += 1;
//             vocaliTot += 1;
//             break;
//     }
// }

// console.log(`Totale dei vocali a e: ${lettera_a}`);
// console.log(`Totale dei vocali e e: ${lettera_e}`);
// console.log(`Totale dei vocali i e: ${lettera_i}`);
// console.log(`Totale dei vocali o e: ${lettera_o}`);
// console.log(`Totale dei vocali u e: ${lettera_u}`);
// console.log(`Totale dei vocali sono : ${vocaliTot}`);


