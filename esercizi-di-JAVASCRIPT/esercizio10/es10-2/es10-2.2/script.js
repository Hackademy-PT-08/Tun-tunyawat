const categoriesSelect = document.getElementById('categoriesSelect');
const loader = document.getElementById('loader');
const limitSelect = document.getElementById('limitSelect');
const sortSelect = document.getElementById('sortSelect');
const productsElements = document.getElementById('productsElement');
const totalElements = document.getElementById('totalElements');
const productsRow = document.getElementById('productsRow');


function getAllCategories(){
    fetch('https://dummyjson.com/products/categories')
    .then(response => response.json())
    .then((category) => {
        categoriesCreate(categoriesSelect, category);
    })
}

function categoriesCreate (target, categories){
    console.log(categories);
    categories.forEach(categories => {
        let option = document.createElement('option');
        option.innerHTML = categories;
        option.value = categories;
        target.appendChild(option);

    })
}

function createCardProducts(products){
    products.products.forEach(p => {
        let div = document.createElement('div');
        div.classList.add('col-12', 'col-md-4', 'mb-3');

        const cardTemplate = `
        <div class="card" style="width: 18rem;">
                    <div class="card_img" >
                        <img src="${p.thumbnail}" class="card-img-top" alt="${p.title}">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${p.title}</h5>
                        <p class="card-text">${p.price}</p>
                        <a href="#" class="btn btn-primary">Dettagli</a>
                    </div>
        </div>
        `;
        div.innerHTML = cardTemplate;
        productsRow.appendChild(div);
    })
}

async function getAllProducts(){

    productsElement.classList.add('d-none');
    loader.classList.remove('d-none');

    let url = 'https://dummyjson.com/products';

    if(categoriesSelect.value !== ""){
        url += `/category/` + categoriesSelect.value;
    }

    if(limitSelect.value !== "" || sortSelect.value !== ""){
        url += `?limit=${limitSelect.value}&sort=${sortSelect.value}`
    }

    console.log(url);


    const response = await fetch(url);
    const products = await response.json();

    productsElement.classList.remove('d-none');
    loader.classList.add('d-none');
    productsRow.innerHTML = "";
    createCardProducts(products);
    console.log(products)
    totalElements.innerHTML = `${products.length} prodotti trovati`;

}





// EXECUTE
getAllCategories();
getAllProducts();
categoriesSelect.addEventListener('change', getAllProducts);
limitSelect.addEventListener('change', getAllProducts);
sortSelect.addEventListener('change', getAllProducts);