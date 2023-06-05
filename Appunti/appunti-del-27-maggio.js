// APPUNTI DEL 29 MAGGIO 2023!!!!!!!!!!!!!!!!
// console.log("DOM");


// serve per accedere a tutte le info della finestra del browser
// console.log(window);


// getElementById(): identifica un solo elemento della pagina attraverso l'attributo id: (univoco, cioe deve essere unico);

// const title = document.getElementById("title")


// getElementByTagName(): identifica un set degli elementi attraverso l'indicazione dello specifico tag;

// const paragrafi = document.getElementsByTagName("p");
// console.log(paragrafi);


// getElementsByClassName(): identifica un set fi elementi della pagina attraverso l'indicazione dello specifico tag: 


// const paragrafi = document.getElementsByTagName("p");
// console.log(paragrafi);

// getElementsByClassName(): identifica un set di elementi della pagina attraverso l'identificazione di una specisfica classe:


// const elements = document.getElementsByClassName("list-group-item");
// console.log(elements);

// querySelector(): restituisce IL PRIMO elemento all'interno del documento che corrisponde al settore specificato:


// const title =  document.querySelector("#title");
// console.log(title);



// querySelectorAll(): restituisce tutti gli elementi all'interno del documento che corrisponde al selettore specificato:


// const elements = document.querySelectorAll(".list-group-item");
// for(let i = 0; i < elements.length; i++)
// if(i === 2 ){
//     elements[i].classList.add("bg-success")
// }
// console.log(elements[i]);


// const list = document.getElementById("list");
// console.log(list);
// nextSibling previosSibling



// innerHTML
// const article = document.querySelector("#article");
// article.innerHTML = "Lorem ipsum sit dolor anet";


// Text Content : la sua funzione, fa la stessa cosa dell'nnerHTML, ma la differenza è che il testo inserito non è possibile essere formattato a diffenza dell'innerHTML;  


// modificare gli attributi dei notri elements;

// const img = document.querySelector("#image");
// const anchor = document.querySelector("#link");

// img.src = "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png";
// anchor.href = "https://google.com";



// const first = document.querySelector("#first");
// const second = document.querySelector("#second");

// first.classList.add("text-primary");
// second.classList.add("text-danger");

// toggle classlist;
// first.classList.toggle("text-primary")


// // if(first.classList.contains("text-primary")){
// //     console.log("è applicata");
// // }else 
// // console.log("Non è stata applica");



// // style inline;



// creare un nuovoelemento nel DOM
// appendChild();
// const list = document.querySelector("#list");

// const element = document.createElement("li");
// const element2 = document.createElement("li")
// element2.classList.add("list-group-item");
// element.classList.add("list-group-item");
// element.innerHTML = "Ciao sono un nuovo elemento della lista";
// element2.innerHTML = "Ciao sono un nuovo arrivato, sono il fratello minore "
// list.appendChild(element);
// list.appendChild(element2);



// // crea un nuovo elemento nel dom con insertBefore();

// const list = document.getElementById("myList");

// const element = document.createElement("li");
// element.innerHTML = "water";

// list.insertBefore(element, list.children[1]);


// // eliminare un elemento dal DOM
// list.removeChild(list.children[0])



const cardRow = document.getElementById("card_row");


person.forEach(person => {
    const card_col = document.createElement("div");
    card_col.classList.add("col12", "col-lg-4");
    
    let cardTemplate = `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${person.name.title} ${person.name.first} ${person.name.last}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
            <p class="card-text">
            ${person.location.city} ${person.location.state}
            </p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
    </div>
    </div>
`;

card_col.innerHTML = cardTemplate;
cardRow.appendChild(card_col);




    console.log(person);
})


// EVENTI
const buttonClick = () => {
    alert(`il bottone è stato cliccato!`);
}


const img = document.getElementById("immagine");
img.addEventListener("click", () =>{
    alert("Immagine cliccata!")
})

function changeInputValue(el) {
    console.log(el.value);
}