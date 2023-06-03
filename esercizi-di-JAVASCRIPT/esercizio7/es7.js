// ESERCIZIO 7-1

// const library = [
//     {
//         title: "Bill Gates",
//         author: "The Road Ahead",
//         readingStatus: true
//     },
//     {
//         title: "Il signore degli anelli",
//         author: "JRR Tolkien",
//         readingStatus: true
//     },
//     {
//         title: "Harry Potter",
//         author: "JK Rolling",
//         readingStatus: false
//     },
//     {
//         title: "Dune",
//         author: "Helbert",
//         readingStatus: true
//     },
//     {
//         title: "Mockingjay: THe final Book of The Hunger Games",
//         author: "Suzanne Collins",
//         readingStatus: false
//     },
//     {
//         title: "Misery",
//         author: "Stephen King",
//         readingStatus: false
//     }
// ];

// function statoLettura(){

//     library.forEach(book => {
//         if(book.readingStatus){ // CORREZIONE: non hai bisogno di fare === true ma basta if(book.readingStatus)
//             console.log(`${book.title} di ${book.author} è stato letto`);
//         }
//         else{
//             console.log(`${book.title} di ${book.author} non è stato letto`)
//         }
//     })
// }

// statoLettura();


// ESERCIZIO 7-2

// const bowling = {
//     players: [
//         {
//             name: "player1", scores: [10, 7, 9, 7, 6, 10, 10, 9, 10, 8, 7, 10, 10, 10, 9, 8, 10], total: []
//         },
//         {
//             name: "player2", scores: [9, 8, 10, 10, 7, 10, 10, 10, 9, 10, 8, 7, 10, 10, 10, 9, 10], total: [],
//         },
//         {
//             name: "player3", scores: [10, 10, 7, 8, 10, 7, 9, 8, 10, 10, 10, 9, 8, 10, 10, 10, 7], total: [],
//         }
//     ],
// }

// function calcolaPunti(){
//     bowling.players.forEach(P =>  {
//         const reducer = (accumulator, curr) => accumulator + curr;
//         let resutVote = P.scores.reduce(reducer);
//         P.total.push(resutVote);
//         console.log(`I punti ottenuti di ${P.name} e di ${P.total}`)
//     })
// }

// function checkWinner(){
//         let point  = bowling.players.map(player => player.total);
//         let votMax = Math.max(...point);

//         bowling.players.forEach(w => {
//             if(w.total == votMax){
//                 console.log(`Il vincitore e: ${w.name}, con il punteggio totale di: ${w.total}`);
//             }
//         })

// }

// calcolaPunti();
// checkWinner();



// ESERCIZIO 7-3

// const settimana = {
//        lunedi: {
//         nomeEvento: [],
//         orarioEvento: []
//        },
//        martedi: {
//         nomeEvento: [],
//         orarioEvento: []
//        },
//        mercoledi: {
//         nomeEvento: [],
//         orarioEvento: []
//        },
//        giovedi: {
//         nomeEvento: [],
//         orarioEvento: []
//        },
//        venerdi: {
//         nomeEvento: [],
//         orarioEvento: []
//        },
//        sabato: {
//         nomeEvento: [],
//         orarioEvento: []
//        },
//        domenica: {
//         nomeEvento: [],
//         orarioEvento: []
//        },
    
    
// }


// function addEvent(){

//     let pass = true;
//         while(pass){
//         let userInput = prompt(`Desideri aggiungere un evento durrante la settimana? SI/NO`);
//         if(userInput.toLocaleLowerCase() !== "si"){
//             pass = false;
//             break;
//         }

//         let daySelect = prompt(`A che giorno della settina vorresti aggiungere l'evento?`);
//         let event = prompt(`Qual e l'evento che vorresti aggiungere?`);
//         let timeEvent = prompt(`A che ora e questo evento?`)

//         if(daySelect.toLocaleLowerCase() == "lunedi"){
//             settimana.lunedi.nomeEvento.push(event);
//             settimana.lunedi.orarioEvento.push(timeEvent);
//         }
//     }
// }
// addEvent();

// console.log(settimana);