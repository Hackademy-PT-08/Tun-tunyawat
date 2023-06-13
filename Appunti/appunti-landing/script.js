let menu = document.getElementById("menu");
const loading = document.querySelector("#loading");
const articleRow = document.querySelector("#article-row");
const contact = document.querySelector("#contactForm");
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
                // console.log(el);

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


function createArticleCard (target, article){
    article.forEach(articles => {
        let cardCol = document.createElement("div");
        cardCol.classList.add("col12", "col-md-6", "col-lg-4");

        let carTemplate = `
        <div class="card mb-3">
            <h3 class="card-header">${articles.title}</h3>
                <div class="card-body">
                    <h5 class="card-title" style="">${articles.ShortText}</h5>
                    <h6 class="card-subtitle text-muted" style="font-size: 1rem">${articles.fullText}</b></h6>
                </div>
                <div class="card_img" style="background-image: url('${articles.img}')"></div>
            <!--<img src="${articles.img}" alt="${articles.title}">-->
            <div class="card-body">
                <span class="badge bg-primary">T-POP</span>
                <span class="badge bg-secondary">THE7</span>
                <span class="badge bg-success">SEVEN STARS</span>
                <span class="badge bg-danger">MUSIC</span>
                <span class="badge bg-warning">KOREAN</span>
                <span class="badge bg-info">THAI</span>
            </div>
        </div>
        <div class="card mb-3">
            <h3 class="card-header">${articles.title}</h3>
                <div class="card-body">
                    <h5 class="card-title" style="">${articles.ShortText}</h5>
                    <h6 class="card-subtitle text-muted" style="font-size: 1rem">${articles.fullText}</b></h6>
                </div>
                <div class="card_img" style="background-image: url('${articles.img}')"></div>
            <!--<img src="${articles.img}" alt="${articles.title}">-->
            <div class="card-body">
                <span class="badge bg-primary">T-POP</span>
                <span class="badge bg-secondary">THE7</span>
                <span class="badge bg-success">SEVEN STARS</span>
                <span class="badge bg-danger">MUSIC</span>
                <span class="badge bg-warning">KOREAN</span>
                <span class="badge bg-info">THAI</span>
            </div>
        </div>
        <div class="card mb-3">
            <h3 class="card-header">${articles.title}</h3>
                <div class="card-body">
                    <h5 class="card-title" style="">${articles.ShortText}</h5>
                    <h6 class="card-subtitle text-muted" style="font-size: 1rem">${articles.fullText}</b></h6>
                </div>
                <div class="card_img" style="background-image: url('${articles.img}')"></div>
            <!--<img src="${articles.img}" alt="${articles.title}">-->
            <div class="card-body">
                <span class="badge bg-primary">T-POP</span>
                <span class="badge bg-secondary">THE7</span>
                <span class="badge bg-success">SEVEN STARS</span>
                <span class="badge bg-danger">MUSIC</span>
                <span class="badge bg-warning">KOREAN</span>
                <span class="badge bg-info">THAI</span>
            </div>
        </div>
        `;
        cardCol.innerHTML = carTemplate;
        target.appendChild(cardCol);

    })
}

function submit (event){
    event.preventDefault();

    let data = {};

    const email = document.getElementById("exampleFormControlInput1");
    const msgInput = document.getElementById("exampleFormControlTextarea1")
    
    data.email = email.value;
    data["message"] = msgInput.value;

    email.value = "";
    msgInput.value = "";

    console.log(data);

}




// EXECUTE  ---> una parte dove andremo ad'invocare tutti i menu (NON è OBBLIGATORIO, è UN METODO PER ESSERE IN ORDINATI )

setTimeout(() =>{
    loading.classList.add("d-none");
}, 1000)
createMenuELement(menu, menuItem);
createArticleCard(articleRow, article);
contact.addEventListener("submit", submit);
