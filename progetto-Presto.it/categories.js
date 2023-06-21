
const menuItem = [
    {
        text: 'Home',
        url: '#',
        submenu: []
    },
    {
        text: 'Features',
        url: '#',
        submenu: []
    },
    {
        text: 'Pricing',
        url: '#',
        submenu: []
    },
    {
        text: 'About',
        url: '#',
        submenu: []
    },
    {
        text: 'Brand',
        url: '#',
        submenu: [...brand_name]
    },
]

// Creazione del NAVBAR
function menuNavCreate (target, menuItem){
    menuItem.forEach(menu => {
        
        let li = document.createElement('li');
        let anchor = document.createElement('a');

        li.classList.add('nav-item');
        anchor.classList.add('nav-link', 'text-nav');

        anchor.setAttribute('href', menu.url);
        anchor.innerHTML = menu.text;

        li.appendChild(anchor);
        target.appendChild(li);

        if(menu.submenu.length > 0){
            
            li.classList.add('dropdown');
            anchor.classList.add('dropdown-toggle');

            anchor.setAttribute('data-bs-toggle', 'dropdown');

            let divDropdown = document.createElement('div');
            divDropdown.classList.add('dropdown-menu');

            menu.submenu.forEach(dropdown => {
                let anchor = document.createElement('a');

                anchor.classList.add('dropdown-item');
                anchor.setAttribute('href', dropdown.url);
                anchor.innerHTML = dropdown.text;

                divDropdown.appendChild(anchor);
                li.appendChild(divDropdown);
            })
        }
    });
}

// Creazione delle card products offers
function cardCategoryCard(cardProducts){
    cardProducts.offersProducts.forEach(cardProd => {

        let div = document.createElement('div');
        div.classList.add('col-12', 'col-lg-4', 'mb-3');

        let cardTemplateOffers = `
        <div class="card" style="width: 18.5rem;">
            <div class="cardProd">
            <img src="${cardProd.image}" class="card-img-top" alt="${cardProd.name}">
            </div>
            <div class="card-body">
              <h5 class="card-title">${cardProd.name}</h5>
              <p class="card-text">Sale ${cardProd.price}$ <del style="font-size: 0.9rem;">${cardProd.original}</del></p>
              <a type="button" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">detail</a>
              <a href="#" class="btn btn-warning">Add to Cart</a>

              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, nulla? Fugit modi qui vel officia quae culpa error nisi? Voluptates provident voluptatem velit illo cum rem maxime ab temporibus saepe necessitatibus, ducimus quae magnam at repellat distinctio libero odit pariatur unde aliquam quos? Quibusdam, accusamus! Alias quis, delectus et dolorum iste officia hic quibusdam, qui facere deleniti facilis libero molestias sunt? Est eum laudantium at incidunt soluta alias deleniti eos! Nisi, velit voluptate libero beatae consequuntur doloribus fugiat omnis facere quo dolore numquam quibusdam, sed quae voluptatem ducimus quidem sequi quis ullam, modi quod consequatur illum vero? Ea, placeat tempore.
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
                </div>
            </div>
              
        </div>
        `;

        div.innerHTML = cardTemplateOffers;
        card.appendChild(div);
    })
}
async function getAllOffers(){


    const response = await fetch("./data/offersProducts.json");
    const productsOffers = await response.json();


    card.innerHTML = "";
    cardCategoryCard(productsOffers);
}


// Creazione del card all products

function phoneProductsCreateCard(allProducts){
    allProducts.categories.forEach(cardProdPhone => {

        let div = document.createElement('div');
        div.classList.add('col-12', 'col-lg-4', 'mb-3');

        let cardTemplate = `
        <div id="cardAllProd" class="card" style="width: 18.5rem;">
            <div class="cardProd">
            <img src="${cardProdPhone.image}" class="card-img-top" alt="${cardProdPhone.name}">
            </div>
            <div class="card-body">
              <h5 class="card-title">${cardProdPhone.name}</h5>
              <p class="card-text">${cardProdPhone.price}$</p>
              <a type="button" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">detail</a>
              <a id="openModal"href="#" class="btn btn-warning">Add to Cart</a>
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>
                            ${}
                        </p>
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
        `;

        div.innerHTML = cardTemplate;
        cardAllProducts.appendChild(div);
    })
}
async function getAllProducts(){

    const response = await fetch("./data/allProducts.json");
    const allProducts = await response.json();

    cardAllProducts.innerHTML = "";
    phoneProductsCreateCard(allProducts);
    console.log(allProducts);

}


// Creazione delle barre di Select

async function getAllCategories(){

    const response = await fetch('./data/categories.json');
    const categories = await response.json();


    categorySelectCreate(categorySelect,categories);
}

async function getAllBrand(){

    const response = await fetch('./data/brand.json');
    const brand = await response.json();

    brandSelectCreate(brandSelect, brand);
}

function categorySelectCreate(target, category){
    category.categories.forEach(cate => {
        let option = document.createElement('option');
        option.innerHTML = cate;
        option.value = cate;
        target.appendChild(option);
    })
}

function brandSelectCreate(target, brand){

    brand.brand.forEach(brandy => {
        let option = document.createElement("option");
        option.innerHTML = brandy;
        option.value = brandy;
        target.appendChild(option);
    })
}

// MODAL


async function modal(){

    const response = await fetch("./data/offersProducts.json");
    const modal = await response.json();

    openModalCreate(modal);
}
function openModalCreate(){
    
}









