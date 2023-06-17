
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
        submenu: [...brand]
    },
]

// Creazione del NAVBAR
function menuNavCreate (target, menuItem){
    menuItem.forEach(menu => {
        
        let li = document.createElement('li');
        let anchor = document.createElement('a');

        li.classList.add('nav-item');
        anchor.classList.add('nav-link');

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
                anchor.innerHTML = dropdown;

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

        let cardTemplate = `
        <div class="card" style="width: 18.5rem;">
            <div class="cardProd">
            <img src="${cardProd.image}" class="card-img-top" alt="${cardProd.name}">
            </div>
            <div class="card-body">
              <h5 class="card-title">${cardProd.name}</h5>
              <p class="card-text">Sale <del>${cardProd.original}</del> ${cardProd.price} $</p>
              <a href="#" class="btn btn-primary">detail</a>
        </div>
        `;

        div.innerHTML = cardTemplate;
        card.appendChild(div);
    })
}
async function getAllOffers(){


    const response = await fetch("./data/offersProducts.json");
    const productsOffers = await response.json();


    card.innerHTML = "";
    cardCategoryCard(productsOffers);
    console.log(productsOffers);
}

// Creazione del Brand Row
// function brandRowCreate (target, brand){
//     brand.forEach(b => {

//         let div = document.createElement('div');
//         div.classList.add('col-12');

//         bradRowTemplate = `
//         <div class="brand">
//             <img src="${b.image}" alt="${b.name}">
//         </div>
//         `;
//         div.innerHTML = bradRowTemplate;
//         target.appendChild(div);
//     })
// }






