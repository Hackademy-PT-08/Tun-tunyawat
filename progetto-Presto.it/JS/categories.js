
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
              <a type="button" href="#" class="btn btn-primary">detail</a>
              <a href="#" class="btn btn-warning">Add to Cart</a>
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
              <p> Available in stock ${cardProdPhone.stock}</p>
              <a id="openModal" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${cardProdPhone.id}" style="display: flex; justify-content: center;">Buy Now</a>
              

                <div class="modal fade" id="${cardProdPhone.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">DETAIL OF DEVICE</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="detail">
                            <img class="mb-3" src="${cardProdPhone.image}" alt="${cardProdPhone.name}">
                            <p>
                                Color:
                            </p>
                            <div id="color-choose" class="col12">
                                <button type="button" class="btn"">${cardProdPhone.memory}</button>

                                <button type="button" class="btn"  style="background-color: #f9f4f0;"></button>

                                <button type="button" class="btn" style="background-color: #192028;"></button>

                                <button type="button" class="btn btn-danger" style="background-color: #f9ded7;"></button>

                                <button type="button" class="btn btn-warning" style="background-color: #980112;"></button>

                                <button type="button" class="btn btn-info" style="background-color: #374836;"></button>
                            </div>
                        </div>
                        <hr>
                        <p>${cardProdPhone.detail}</p>
                        <br>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
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









