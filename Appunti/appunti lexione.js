// .map():
// const result = calcolaarray(arr1, arr2, "+");
// console.log(result);

// const numbers = [1, 2, 3, 4 ,5];
// const dubbleNumber = numbers.map(num => num *2);

// console.log(dubbleNumber);


// .Filter():
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8 ,9 ,10];

// const evenNumbers = numbers.filter(num => num % 2 === 0);

// console.log(evenNumbers);



// .reduce():
// const numbers = [1, 2, 3 , 4, 5, 6, 7, 8 ,9 ,10];
// const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);

// console.log(sum);


// .sort():
// const fruit = ["banana", "orange", "watermelon", "pear"];
// fruit.sort();
// console.log(fruit);


// .forEach(): liequivalente del for(cioe il ciclo "FOR", funziona come for)
// const basket = ["apple", "pear", "banana", "kiwi"];

// basket.forEach((fruit) => console.log(fruit));

// console.log(basket);



// i tre puntini nel arr2 serve per clonare l'arrey del arr1
// let arr1 = [1, 2, 3 ,4, 5, 6 ,7];
// let arr2 = [...arr1];

// console.log(arr2);



// Unire gli arrey
// const arr1 = ["mela", "pera", "banana"];
// const arr2 = [...arr1, 1 , 2, 3, 4];

// // console.log(arr2);


// const mergeArray = (arr1, arr2) => {

//     return {...arr1, ...arr2};
// }


// const result = mergeArray(arr1, arr2);
// console.log(result);



// let book = {
//     title : "Il Signori Degli Anelli",
//     author : "JRR Tolkien"
// };

// console.log(book);
// console.log(book.title);
// console.log(book["author"]);


// Per modificare il contenuto dell'oggetto
// book.title = "Manuale Javascript";
// book["author"] = "Michele Muzzo";

// console.log(book);
// console.log(book.title);
// console.log(book["author"]);



// book.pages = 1800;
// book["editor"] = "Mondadori";

// console.log(book.pages);


// let book = {
//         title : "Il Signori Degli Anelli",
//         author : "JRR Tolkien"
//     };
//     if ("author" in book){
//         console.log(`Ho trovato questa proprieta`);
//     }
//     else{
//         console.log(`Proprieta non trovata`);
//     };


//     if (!book.hasOwnProperty("title")) {
//         console.log("ole");
//     }


// let propertyToCheck = "title";

// if (book.hasOwnProperty(propertyToCheck)){
//     console.log(`La proprieta trovata il valore e di: ${book[propertyToCheck]}`);
// }
// else{
//     console.log(`La proprieta non trovata!`);
// }



// let book1 = {
//     title : "Libro della giugla",
//     author: "Giorgio Muzzo"
// };

// let book_info = {
//     pages : 200,
//     genere : "Fantacy",
//     editor : "Mondadori",
//     price : 30.00
// };

// let book2 = {...book1, ...book_info};

// book2.versione = 1.0;
// book2["lang"] = "IT";


// console.log(book2);


// const book = {
//     title : "Il Signore Degli Anelli",
//     author : "JRR",
//     info: function(){
//         return `${this.title} - ${this.author}`;
//     }
// }
// console.log(book.info());


// const parola = {
//     test : "ciao",
//     contaVocali : function() {
//         const vocali = ['a', 'e', 'i', 'o', 'u'];
//         let conteggio = 0;

//         for(let i = 0; i < this.test.length; i++){
//             if (vocali.includes(this.test[i])) {
//                 conteggio++;
//             }
//         }

//         return conteggio;
//     }
// };

// console.log(`Il conteggio dei vocali: ${parola.contaVocali()}`)


// const books = [
//     { 
//         title : "Il signore degli anelli",
//         author : "JRR",
//         editor : "Mondadori",
//         info : function(){
//             return `${this.title} - ${this.author}`;
    
//         },
//         languages: ["IT", "ES", "TH"],
    
//     },
//     { 
//         title : "Guida Javascript",
//         author : "Joe Fin",
//         editor : "Apeo",
//         info : function(){
//             return `${this.title} - ${this.author}`;
    
//         },
//         languages: ["IT", "ES", "TH"],
    
//     },
//     { 
//         title : "Guida PHP",
//         author : "Theodor MOr",
//         editor : "Feltrinelli",
//         info : function(){
//             return `${this.title} - ${this.author}`;
    
//         },
//         languages: ["IT", "ES", "TH"],
    
//     },
    
// ];


// const search = prompt(`Cerca un libro in archivio`);

// const findBook = (value) => {
//     const found_book = books.find(book => book.title.toLowerCase().includes(value.toLowerCase()));

//     if (!found_book) {
//         return "Non ho trovo il libro che stai cercando";
//     }

//     return `Ho trovato ${found_book.info()}`;
// }

// const result = findBook(search);
// console.log(result);



// const books = [
//     { 
//         title : "Guida ANgular",
//         author : "Marvin Hogs",
//         editor : "Mondadori",
//         info : function(){
//             return `${this.title} - ${this.author}`;
    
//         },
//         languages: ["IT", "ES", "TH"],
    
//     },
//     { 
//         title : "Guida Javascript",
//         author : "Joe Fin",
//         editor : "Apeo",
//         info : function(){
//             return `${this.title} - ${this.author}`;
    
//         },
//         languages: ["IT", "ES", "TH"],
    
//     },
//     { 
//         title : "Guida PHP",
//         author : "Theodor Mor",
//         editor : "Feltrinelli",
//         info : function(){
//             return `${this.title} - ${this.author}`;
    
//         },
//         languages: ["IT", "ES", "TH"],
    
//     },
    
// ];


// const search = prompt(`Cerca un libro in archivio`);

// const findBook = (value) => {
//     const found_book = books.filter(book => book.title.toLowerCase().includes(value.toLowerCase()));

//     if (found_book.length === 0) {
//         return `Non ho trovato il libro che stai cercando`
//     }

//     let templateString = `Ho trovato i seguenti libri:`;

//     found_book.forEach((book, index) => {
//         templateString += `${book.info()}${index !== found_book.length - 1 ? ',': ''}`;
//     })

//     return templateString;
// }

// const result = findBook(search);
// console.log(result);











// APPUNTI DEL 22 MAGGIO 2023 !!!!!!!!!!!!!!!!!!!!!!!!!


// let playlist = {
//     songs: []
// };

// function addSong(title, author, year){

//     let neweSong = {
//         title: title,
//         author: author,
//         year: year
//     };

//     playlist.songs.push(neweSong);
// }

// let pass = true;

// while(pass){

//     let userInput = prompt(`Desideri aggiungere una nuova canzone nella playlist? SI/NO`);

//     if(userInput.toLocaleLowerCase() !== "si"){
//         pass = false;
//         break;
//     }

//     let title = prompt(`INserisci il titolo della canzone`);
//     let author = prompt(`Inserisci il nome del cantante`);
//     let year = prompt(`Inserisci l'anno della canzone`);


//     addSong(title, author, year);
// }

// console.log(playlist);






// myLog("Plalist:", "titolo")

// function myLog(msg, category){
//     switch(category){
//         case "titolo":
//             console.log(`%c${msg}`, "background-color: blue; font-size: 30px; color: white`");
//             break;
//         case "autore":
//             console.log(`%c${msg}`, "background-color: blue; font-size: 30px; color: white`");
//             break;
//         case "anno":
//             console.log(`%c${msg}`, "background-color: blue; font-size: 30px; color: white`");
//             break;
            
//     }
// }



// const persona = {
//     nome : "Marco",
//     cognome : "Rossi",
//     email: "mario,rossi@mail.com",
//     indirizzo: "Indirizzo non disponibile",
//     mostraNomeCompleto: function(){
//         return `${this.nome} ${this.cognome}`;
//     },
//     mostraIndirizzoEdEmail: function(){
//         return `${this.emial}, ${this.indirizzo}`
//     }
// };


// console.log(persona.nome);
// console.log(persona["cognone"]);

// // persona.indirizzo = "Nuovo inidirizzo a roma";
// // persona["email"] = "a@a.it";

// // delete persona.email;
// // delete persona["indirizzo"];


// let marcoRossi = {...persona};

// console.log(marcoRossi);


// let giuseppeVerdi = {
//     ...persona,
//     nome: "Giuseppe",
//     cognome: "Verdi",
//     songs: [
//         {
//             name: `Composizione1`
//         },
//         {
//             name: `Composizione2`
//         }
//     ]
// };


// console.log(giuseppeVerdi);




// COSTRUTTORI

// function Book(title = "Manuale, JS", author = "Jonh Joe", categorie = "Programming", pages = 300){

//     this.title = title;
//     this.author = author;
//     this.categorie = categorie;
//     this.pages = pages;

//     this.shortInfo = function(){
//         return `${this.title} ${this.author}`;
//     }

//     this.completeInfo = function(){
//         return `${this.title} ${this.author} \n ${this.categorie} ${this.pages}`;
//     }
// }

// let book = new Book();
// console.log(book);


// let secondBook = new Book(`Manule PHP`, `Dope Jonh`, undefined, 400);
// console.log(secondBook);


// function Song(title = "Get Loose", author = "The7", year = 2023){

//     this.title = title;
//     this.author = author;
//     this.year = year;

//     this.shortInfo = function(){
//         return `${this.title} ${this.author}`;
//     }
    
//     this.completeInfo = function(){
//         return `${this.title} ${this.author} ${this.year}`;
//     }

// }

// let songs = [];

// songs.push(new Song());
// songs.push(new Song(`Chemistry`, `The7`, 2023));


// songs.forEach(song => {
//     console.log(song.completeInfo());
// })

// console.log(songs);



// this.name = "Tun";
// // Nome considerato dal Arrow Function

// const person = {
//     name: "Jonh",
//     saluta: function(){
//         console.log(`Ciao`+ " " + this.name);
//     },
//     salutaArrow: () => {
//         console.log(`Ciao` + " " + this.name)
//     } 
// };

// person.saluta();
// person.salutaArrow();




// Metodi sugli oggetti

// Object.entrins():

// const person = {
//     name: "Mario",
//     cognome: "Rossi",
//     age: 20
// };

// const keyValue = Object.entries(person);
// console.log(keyValue);




// Object.keys():
// const book = {
//     name: "Il signore degli anelli",
//     author: "JRR",
//     pages: 2888
// };

// let keys = Object.keys(book);
// console.log(keys);





// Object.value():
// function Auto(brand, model){

//     this.brand = brand;
//     this.model = model;
// }

// const value = Object.values(new Auto("Fiat", "500xl"));
// console.log(value);






// CICLO FOR......IN, E COME IL CICLO FOR PER GLI ARRAY, QUESTO CICLIO SI USA SOLAMENTE PER GLI OGGETTI
// class Song {
//     constructor(name, author, year) {
//         this.name = name;
//         this.author = author;
//         this.year = year;
//     }
// }

// const mySong = new Song (`Chemistry`,`The7`, 2023 );

// for(let key in mySong){
//     console.log(mySong[key]);
// }