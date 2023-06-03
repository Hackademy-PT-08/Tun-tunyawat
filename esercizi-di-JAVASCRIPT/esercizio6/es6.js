// ESERCIZIO 6-1

// let playlist = {
//     songs: [
//         {
//             title: "Cheistry",
//             author: "The7",
//             year: 2023
//         },
//         {
//             title: "Get Loose",
//             author: "The7",
//             year: 2023
//         },
//         {
//             title: "Life Boy",
//             author: "4EVE",
//             year: 2023
//         },
//         {
//             title: "Tears",
//             author: "4EVE",
//             year: 2023
//         },
//         {
//             title: "Booty Bomb",
//             author: "4EVE",
//             year: 2022
//         },
//         {
//             title: "Boutchya",
//             author: "4EVE",
//             year: 2022
//         },
//     ],
//     songsInfo: function mostraSongs(){
//         this.songs.forEach(musica => {
//             console.log(`${musica.title} - ${musica.author} - ${musica.year}`)
//         })
//     }
// };

// playlist.songsInfo();
// console.log(playlist);





// ESERCIZIO 6-2

// let Rubrica = {
//     utenti: [
//         {
//             nome: "Tunyawat",
//             cognome: "Winyu",
//             eta: 21,
//             numeroTelefono: 3755612313,
//         },
//         {
//             nome: "Marco",
//             cognome: "Rossi",
//             eta: 25,
//             numeroTelefono: 3244358906,
//         },
//         {
//             nome: "Michele",
//             cognome: "Verdi",
//             eta: 30,
//             numeroTelefono: 3299284096,
//         },
//     ],
//     indirizzo: [
//         {
//             via: "Via xxv aprile",
//             numeroCivico: 235,
//             comune: "Cinisello Balsamo",
//             citta: "Milano",
//         }
//     ],
    

//     userInfo: function info(){
//         this.utenti.forEach(user =>{
//             console.log(` Nome: ${user.nome} \n Cognome: ${user.cognome} \n Numero di Telefono: ${user.numeroTelefono}`)
//         }) 
//     },
// }



// Rubrica.userInfo();





// ESERIZIO 6-3

// let box = {
//     Garage: [
//         {
//         brand: "Tesla",
//         model: "Model 3 Performance 2022"
//         },

//         {
//         brand: "Tesla",
//         model: "Model X"
//         },

//         {
//         brand: "Tesla",
//         model: "Model Y"
//         },

//         {
//         brand: "Ford",
//         model: "Ranger Raptor"
//         },
//     ],
//     mostraCras: function(marca, modello){
//         this.Garage.forEach(macchine =>{
//             console.log(`${macchine.brand} - ${macchine.model}`)
//         })
//     }
// }

// box.mostraCras();

// let showModel = (garage) => {
//     console.log(`I modelli delle macchine trovati in Garage sono: \n`);
//     garage.forEach(car => {
//         console.log(`${car.model}`)
//     })
// }



// showModel(box.Garage);

// ESERCIZIO 6-4

//     const LIBRI = 
//         [ 
//         {
//             titolo: "Il Signore degli Anelli",
//             autore: "Tolkien",
//             categorie: "fantasy"
//         },
//         {
//             titolo: "Harry Potter",
//             autore: "Rowling",
//             categorie: "fantasy"
//         },
//         {
//             titolo: "Il Conte del monte cristo",
//             autore: "Dumas",
//             categorie: "narrativa classica"
//         },
//         {
//             titolo: "Dune",
//             autore: "Herbert",
//             categorie: "fantacienza"
//         },
//         {
//             titolo: "Fight Club",
//             autore: "Palahniuk",
//             categorie: "narrativa moderna"
//         },

//         ]

// function mostraUrl(){
//     LIBRI.forEach(books =>{
//         console.log(`Questo e URL del libro ricercato : www.lamiasuperlibreria.aulab/${books.autore.toLocaleLowerCase()}/${books.titolo.toLocaleLowerCase().replace(/ /g, "-")}.html`);
//         console.log(`Questo e L'anchor del libro ricercato : <a href=”www.lamiasuperlibreria.aulab/${books.autore.toLocaleLowerCase()}/${books.titolo.toLocaleLowerCase().replace(/ /g, "-")}</a>`)
//     })
// }


     














    

















