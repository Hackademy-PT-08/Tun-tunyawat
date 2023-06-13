

// const test = `Ciao sono la stringa di testo`;


// // Promise

// const promise = new Promise((resolve, rejected) => {

//     // simuliamo un'operazione asincrona con un ritardo di 2 secondi
//     setTimeout(() => {

//         const num = Math.random();

//         if(num < 0.5){
//             // se il numero casuale e inferiore al 0.5, quindi la promise e completata
//             resolve(num);

//         }else{
//             // Altrimenti la promise il respinta
//             rejected(new Error(`Errore durante l'operazione`));
//         }
//     }, 2000)
// });


// // Utilizziamo il metodo then per gestire il caso di adempiuta del promise ed il metodo cath per gestire l'errore
// promise
//     .then(result => {
//         console.log(`Operazione completata con sucesso: `, result);
//     })
//     .catch(error => {
//         console.log(`Si è verificato un errore `, error);
//     }) 


// function fetchUserData (){

//     return new Promise ((resolve, reject) => {

//         // simuliamo una richiesta API con un ritardo di 2 secondi 

//         setTimeout(() => {
//             let userData = {
//                 id: 1,
//                 name: "Jonh",
//                 age: 25,
//                 email: "jonh@mail.com"
//             }

//             if(userData) {

//                 // Restituiamo i dati utenti
//                 resolve(userData);
//             }
//             else {

//                 // oppure in caso di errore 
//                 reject(new Error("impossibile recuperare i dati utente"));
//             }

//         }, 2000)
//     });
// }

// fetchUserData()
// .then(result => {
//     console.log(`Operazione e andato a buon fine:` , result);
// })
// .catch(error => {
//     console.error(`Si e verificato un errore`, error);
// })


// function fetchUserData (){

//     return new Promise ((resolve, reject) => {

//         // simuliamo una richiesta API con un ritardo di 2 secondi 

//         setTimeout(() => {
//             let userData = {
//                 id: 1,
//                 name: "Jonh",
//                 age: 25,
//                 email: "jonh@mail.com"
//             }

//             if(userData) {

//                 // Restituiamo i dati utenti
//                 resolve(userData);
//             }
//             else {

//                 // oppure in caso di errore 
//                 reject(new Error("impossibile recuperare i dati utente"));
//             }

//         }, 2000)
//     });
// // }
// }

// function fetchUserSubscription(){

//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             let subscription = {
//                 plan: "Monthly",
//                 price: 11.99
//             };
    
//             if(subscription){
//                 resolve(subscription)
//             }else {
//                 reject(new Error("Impossibile recuperare l'abbonemto dell'utente"))
//             }
//         }, 2000)
//     })
// }


// fetchUserData()
//     .then(result => {
//         console.log(`Operazione è andata a buon fine: `, result)
//     })
//     .then(fetchUserSubscription)
//     .then(subscription => {
//         console.log(subscription);
//     })
//     .catch(error => {
//         console.log(error)
//     });







// Promise.all();

// const fetchUserData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let userData = {
//             id: 1,
//             name: "Jonh",
//             age: 25,
//             email: "jonh@mail.com"
//         }

//         if(userData) {

//             // Restituiamo i dati utenti
//             resolve(userData);
//         }
//         else {

//             // oppure in caso di errore 
//             reject(new Error("impossibile recuperare i dati utente"));
//         }

//     }, 2000)
// })


// const fetchUserSubscription = new Promise((resolve , reject) => {
//     setTimeout(() => {
//         let subscription = {
//             plan: "Monthly",
//             price: 11.99
//         };

//         if(subscription){
//             resolve(subscription)
//         }else {
//             reject(new Error("Impossibile recuperare l'abbonemto dell'utente"))
//         }
//     }, 2000)

// })


// Promise.all([fetchUserData, fetchUserSubscription])
//     .then(responses => {
//         console.log(responses);
//     })
//     .catch(error => {
//         console.log(error);
//     })




// fetch
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(post => {
        // showOneBYOne(post);
        // const user_id = post[0].userId
        // post.forEach(element => {
        //     fetch("https://jsonplaceholder.typicode.com/users/" + element.userId)
        //     .then(res => res.json())
        //     .then(user => console.log(user))
        // });
        // if(user_id){
        //     fetch("https://jsonplaceholder.typicode.com/users/" + user_id)
        //     .then(res => res.json())
        //     .then(user => console.log(user))
        // }
    })
    .catch(err => err)


// function showOneBYOne(posts){
//     posts.forEach(element => {
//         console.log(element);
//     });
// }

