const menu = document.getElementById('menu');
const categorySelect = document.getElementById('categorySelect');
const brandSelect = document.getElementById('brandSelect');
const limitSelect = document.getElementById('limitSelect');
const card = document.getElementById('card');
const brandRow = document.getElementById('brandRow');
const cardAllProducts = document.getElementById('card-all-products');



// EXECUTE 
menuNavCreate(menu, menuItem);
getAllOffers();
getAllProducts();
getAllCategories();
