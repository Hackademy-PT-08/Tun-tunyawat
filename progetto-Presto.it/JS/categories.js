
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
              <a href="#" class="btn btn-primary">detail</a>
              <a href="#" class="btn btn-warning">Add to Cart</a>
              
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
              <a href="#" class="btn btn-primary">detail</a>
              <a href="#" class="btn btn-warning">Add to Cart</a>
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










