const menu = document.querySelector("#menu");

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
        text: "About",
        url: "#",
        submenu: []
    },
    {
        text: "FAQ",
        url: "#",
        submenu: []
    },
    {
        text: "News",
        url: "#",
        submenu: [...categorie]
    }
];


function createMenuElements(target) {

    menuItem.forEach(elements => {
        let li = document.createElement("li");
        let anchor = document.createElement("a");
    
    
        li.classList.add("nav-item");
        anchor.classList.add("nav-link");
    
        anchor.setAttribute("href", elements.url);
        anchor.innerHTML = elements.text;

        li.appendChild(anchor);
        target.appendChild(li);

            if(elements.submenu.length > 0){ //significa che se nella categoria submenu ha una lunghezza di 0

                li.classList.add("dropdown")
                anchor.classList.add("dropdown-toggle");
                anchor.setAttribute("data-bs-toggle", "dropdown");

                let dropdownDiv = document.createElement("div");
                dropdownDiv.classList.add("dropdown-menu");

                elements.submenu.forEach(el => {
                    
                    let anchor = document.createElement("a");
                    anchor.classList.add("dropdown-item");
                    anchor.setAttribute("href", el.url);
                    anchor.innerHTML = el.text;

                    dropdownDiv.appendChild(anchor);
                    li.appendChild(dropdownDiv);
                })
            }
    });

}





// EXECUTE

createMenuElements(menu, menuItem);