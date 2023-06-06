

const test = `Ciao sono la stringa di testo`;


// Promise

const promise = new Promise((resolve, rejected) => {

    // simuliamo un'operazione asincrona con un ritardo di 2 secondi
    setTimeout(() => {

        const num = Math.random();

        if(num < 0.5){
            // se il numero casuale e inferiore al 0.5, quindi la promise e completata
            resolve(num);

        }else{
            // Altrimenti la promise il respinta
            rejected(new Error(`Errore durante l'operazione`));
        }
    }, 2000)
});


// Utilizziamo il metodo then per gestire il caso di adempiuta del promise ed il metodo cath per gestire l'errore
promise
    .then(result => {
        console.log(`Operazione completata con sucesso: `, result);
    })
    .catch(error => {
        console.log(`Si è verificato un errore `, error);
    })

console.log(test);