let menu = document.getElementById("menu");
const loading = document.querySelector("#loading")
const menuItem = [
    {
        text: "Home",
        url: "#",
        submenu: []
    },
    {
        text: "Features",
        url: "#",
        submenu: []
    },
    {
        text: "Blog",
        url: "#",
        submenu: []
    },
    {
        text: "About",
        url: "#",
        submenu: []
    },
    {
        text: "DropDown",
        url: "#",
        submenu: [...categories]
    }
];

// console.log(menuItem)  ----> Per vedere se abbaimo aggiunto l'array giusto


function createMenuELement(target) {

    // creiamo il mneu attraverso un ciclo in questo caso utilizzando il FOREACH
    menuItem.forEach((elements) => {

        // Andiamo a controllare se tutto funziona
        // console.log(elements);

        // Andiamo a creare i vari TAG necessari
        let li = document.createElement("li");
        let anchor = document.createElement("a");

        // Andiamo a creare le classi necessarie
        li.classList.add("nav-item");
        anchor.classList.add("nav-link");

        // Andiamo a dare gli attributi necessari
        anchor.setAttribute("href", elements.url);
        anchor.innerHTML = elements.text;

        li.appendChild(anchor);
        target.appendChild(li);

        if (elements.submenu.length > 0){
            // vuol dire che questo elements ha un submenu
            // console.log(elements);
            li.classList.add("dropdown");
            anchor.classList.add("dropdown-toggle");
            anchor.setAttribute("data-bs-toggle", "dropdown");

            let dropDownDiv = document.createElement("div");
            dropDownDiv.classList.add("dropdown-menu");

            elements.submenu.forEach(el => {
                console.log(el);

                let anchor = document.createElement("a");
                anchor.classList.add("dropdown-item");
                anchor.setAttribute("href", el.url);
                anchor.innerHTML = el.text;


                dropDownDiv.appendChild(anchor);

                li.appendChild(dropDownDiv); 
            })

        } 
    });
}


function createArticleCard (){

}



// EXECUTE  ---> una parte dove andremo ad'invocare tutti i menu (NON è OBBLIGATORIO, è UN METODO PER ESSERE IN ORDINATI )

setTimeout(() =>{
    loading.classList.add("d-none");
}, 1000)
createMenuELement(menu, menuItem);
createArticleCard()
