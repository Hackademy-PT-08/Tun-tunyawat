const menu = document.getElementById('menu');
const cards = document.getElementById('cards');
const loader = document.querySelector('#loader');
const search = document.getElementById('search');
const categoriesSelect = document.getElementById('categoriesSelect');
const limitSelect = document.getElementById('limitSelect');
const sortSelect = document.getElementById('sortSelect');
const productElement = document.getElementById('productsEement');
const totalElements = document.getElementById('totalElements');
const productsRow = document.getElementById('productsRow');

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
        text: 'Dropdown',
        url: '#',
        submenu: [...dropdownArticle]
    },
]


function navbarCreate(target, menuItem){
    menuItem.forEach(element => {
        
        let li = document.createElement('li');
        let anchor = document.createElement('a');

        li.classList.add('nav-item');
        anchor.classList.add('nav-link');

        anchor.setAttribute('href', element.url);
        anchor.innerHTML = element.text;

        li.appendChild(anchor);
        target.appendChild(li);

        if(element.submenu.length > 0){

            li.classList.add('dropdown');
            anchor.classList.add('dropdown-toggle');

            anchor.setAttribute('data-bs-toggle', 'dropdown');
            anchor.setAttribute('href', element.url);


            const div = document.createElement('div');
            div.classList.add('dropdown-menu');

            element.submenu.forEach(el => {

                let anchor = document.createElement('a');
                

                anchor.classList.add('dropdown-item');
                anchor.setAttribute('href', el.url);
                anchor.innerHTML = el.text;

                let divSeparate = document.createElement('div');
                let anchor2 = document.createElement('a');

                divSeparate.classList.add('dropdown-divider');
                anchor2.classList.add('dropdown-item');
                anchor2.setAttribute('href', el.url);

                div.appendChild(anchor);
                div.appendChild(divSeparate);
                divSeparate.appendChild(anchor2);
                li.appendChild(div);
            });
        }
    });
}




// FETCH ALL CATEGORIES
function getAllCategories(){
    fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then((categories) => {
                createSelectELement(categoriesSelect, categories);
            })
                
}

function createSelectELement (target, categories){

     categories.forEach(c => {

        let option = document.createElement('option');
        option.innerHTML = c;
        option.value = c;
        target.appendChild(option);
    })

}

// FETCH ALL PRODUCTS 


function createCardProducts(products){
    products.forEach(p => {
                let containerDiv = document.createElement('div');
                containerDiv.classList.add('col12', 'col-lg-4', 'mb-3');
        
        
                const cardTemplate = `
                <div class="card" style="width: 18rem;">
                    <div class="card_img" >
                        <img src="${p.image}" class="card-img-top" alt="${p.title}">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${p.title}</h5>
                        <p class="card-text">${p.price}</p>
                        <a href="#" class="btn btn-primary">Dettagli</a>
                    </div>
                </div>
                
                `;
        
                containerDiv.innerHTML = cardTemplate
                productsRow.appendChild(containerDiv);
        
            })
}

async function getAllProducts(){

    productElement.classList.add('d-none');
    loader.classList.remove('d-none');

    let url = "https://fakestoreapi.com/products";

    if(categoriesSelect.value !== ""){
            url += "/category/" + categoriesSelect.value;
    }
        
    if(sortSelect.value !==  "" || limitSelect.value !== ""){
            url += `?limit=${limitSelect.value}&sort=${sortSelect.value}`;
    }


    try {
    const response = await fetch(url);
    const products = await response.json();

    productElement.classList.remove('d-none');
    loader.classList.add('d-none');
    productsRow.innerHTML = "";
    createCardProducts(products);
    console.log(products);
    totalElements.innerHTML = `${products.length} prodotti trovati`;
    } 
    catch (error){
        console.log(error)
    }
    
}











 









// function createCardProducts(target, products){
//     
// }








// EXECUTE
// setTimeout(() => {
//     loader.classList.add('d-none')
// }, 1000)
navbarCreate(menu, menuItem);
getAllCategories();
// createCardProducts(cards, infoCards);
getAllProducts();
categoriesSelect.addEventListener('change', getAllProducts);
limitSelect.addEventListener('change', getAllProducts);
sortSelect.addEventListener('change', getAllProducts);
