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

async function image(){

    const response = await fetch('./data/allProducts.json');
    const image = await response.json();


    color_c.innerHTML = "";
    imageCreate(image);
}

function imageCreate(categories){


    let div = document.createElement('div');
    div.classList.add('col-12');

    
    let pageTemplate = `
    <div id="${categories.categories.id}" class="container">
        <div class="img py-5">
            <img src="${categories.categories.image}" alt="">
        </div>
            <div class="container">
                <div class="row">
                    <div class="col12">
                        <h1>${categories.categories.name}</h1>
                    </div>
                </div>
            </div>
        <div class="detail mt-4 py-3 px-3">
            <h5 >Detail
            </h5>
        <span class="line">
            <div id="color-container" class="container">
                <div class="row">
                    <p class="mt-5"> 
                        Color:
                    </p>
                    <div id="color-choose" class="col12">
                        <button type="button" class="btn"  style="background-color: #256281;"></button>

                        <button type="button" class="btn"  style="background-color: #f9f4f0;"></button>

                        <button type="button" class="btn" style="background-color: #192028;"></button>

                        <button type="button" class="btn btn-danger" style="background-color: #f9ded7;"></button>

                        <button type="button" class="btn btn-warning" style="background-color: #980112;"></button>

                        <button type="button" class="btn btn-info" style="background-color: #374836;"></button>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col12">
                        <div class="memory-body">
                            <p class="mt-5">
                                Memory:
                            </p>
                            <div id="memory-choose" class="col12">
                                <button type="button" class="btn">128GB</button>

                                <button type="button" class="btn">256GB</button>

                                <button type="button" class="btn">512GB</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </span>

        </div>


        <div class="container py-3">
        <div class="row">
            <div id="btn" class="col12">
                <button type="button" style="background-color: rgb(57, 56, 56);">Add to Cart</button>
                <button type="button" style="background-color: rgb(255, 162, 0);">Buy Now</button>
            </div>
        </div>
        </div>
    </div>
        `;

    div.innerHTML = pageTemplate;
    color_c.appendChild(div);

    
}