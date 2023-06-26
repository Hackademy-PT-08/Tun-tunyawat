const menu = document.getElementById('menu');
const categorySelect = document.getElementById('categorySelect');
const brandSelect = document.getElementById('brandSelect');
const limitSelect = document.getElementById('limitSelect');
const card = document.getElementById('card');
const brandRow = document.getElementById('brandRow');
const cardAllProducts = document.getElementById('card-all-products');
const openModal = document.getElementById('openModal');
const color_c = document.getElementById('color-c');


// EXECUTE 
menuNavCreate(menu, menuItem);
getAllOffers();
getAllProducts();
getAllCategories();
getAllBrand();
