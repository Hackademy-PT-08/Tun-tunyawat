// ESERCIZIO 8-1

// class garage {
//     constructor(gargageName, maxPlaces, vehicle){
//         this.nomeGarage = gargageName,
//         this.maxPosti = maxPlaces,
//         this.veicoli = vehicle = []
//     }
// }

// let newgarage = new garage("BelloMio", 10)

// class car{
//     constructor(brand, model, year){
//         this.Marca = brand,
//         this.Modello = model,
//         this.Anno = year
//     }
// }


// function addCar(){
//     let pass =  true;
//     while(pass){
//         let userInput = prompt(`Desideri aggiungere una una macchina dentro al garage?`);
//         if(userInput.toLocaleLowerCase() !== "si"){
//             pass = false; 
//             break;
//         }

//         let newcar = new car(
//             prompt(`Qual'e la marca della macchina?`),
//             prompt(`Qual'e il modello della macchina?`),
//             prompt(`Quando e stato prodotto il veicolo?`)
//         )

//         newgarage.veicoli.push(newcar);

//         if(newgarage.veicoli.length > 10){
//             console.log(`Errore hai superato i posti disponibile in Garage`);
//         }
//     }
// }

// addCar();
// console.log(newgarage);



// ESECIZIO 8-2


// const products = [
// 	{
// 		"id": 1,
// 		"title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
// 		"price": 109.95,
// 		"description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
// 		"category": "clothing",
// 		"image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
// 		"rating": {
// 			"rate": 3.9,
// 			"count": 120
// 		}
// 	},
// 	{
// 		"id": 2,
// 		"title": "Mens Casual Premium Slim Fit T-Shirts ",
// 		"price": 22.3,
// 		"description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
// 		"category": "clothing",
// 		"image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
// 		"rating": {
// 			"rate": 4.1,
// 			"count": 259
// 		}
// 	},
// 	{
// 		"id": 3,
// 		"title": "Mens Cotton Jacket",
// 		"price": 55.99,
// 		"description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
// 		"category": "clothing",
// 		"image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
// 		"rating": {
// 			"rate": 4.7,
// 			"count": 500
// 		}
// 	},
// 	{
// 		"id": 8,
// 		"title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
// 		"price": 10.99,
// 		"description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
// 		"category": "jewelery",
// 		"image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
// 		"rating": {
// 			"rate": 1.9,
// 			"count": 100
// 		}
// 	},
// 	{
// 		"id": 9,
// 		"title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
// 		"price": 64,
// 		"description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
// 		"category": "electronics",
// 		"image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
// 		"rating": {
// 			"rate": 3.3,
// 			"count": 203
// 		}
// 	}, 
// 	{
// 		"id": 10,
// 		"title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
// 		"price": 109,
// 		"description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
// 		"category": "electronics",
// 		"image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
// 		"rating": {
// 			"rate": 2.9,
// 			"count": 470
// 		}
// 	},
// 	{
// 		"id": 6,
// 		"title": "Solid Gold Petite Micropave ",
// 		"price": 168,
// 		"description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
// 		"category": "jewelery",
// 		"image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
// 		"rating": {
// 			"rate": 3.9,
// 			"count": 70
// 		}
// 	}
// ]


// class Product {
//     constructor(id, nome, prezzo, descrizione, categoria, img, voto){
//         this.id = id,
// 		this.nome = nome,
// 		this.prezzo = prezzo,
// 		this.description = descrizione,
// 		this.categoria = categoria,
// 		this.img = img,
// 		this.vot = voto        

//     }
// }

// const newProducts = products.map(({id, title, price, description, category, image, rating}) => ({
// 	identity: id,
// 	name: title,
// 	price: price,
// 	decription: description,
// 	catagory: category,
// 	image: image,
// 	vote: rating
// }))

// let nameCategory = "electronics";

// function Categories(search){
// 	const findCategory = newProducts.filter(products => products.catagory == search);
// 	return findCategory;
// } 

// let maxrating = 3.9;

// function findmax(vote){
// 	const findMaxRating = newProducts.filter(voto => voto.vote.rate >= vote);
// 	return findMaxRating;
// }

// let price = 64;

// function findMaxPrice(price){
// 	const findMaxPrezzo = newProducts.filter(prezzo => prezzo.price >= price);
// 	return findMaxPrezzo;
// }


// function image(img){
// 	let arrTagImage = [];
// 	img.forEach(picture => {
// 		arrTagImage.push(`<img src="${picture.image}" alt="${picture.title}"\n`)
// 	});

// 	return arrTagImage;

// }





// let resulImg = image(newProducts);
// let maxPrezzo = findMaxPrice(price);
// let maxVoteResult = findmax(maxrating);
// let trovaCategoria = Categories(nameCategory);
// console.log(trovaCategoria);
// console.log(maxVoteResult);
// console.log(maxPrezzo);
// console.log(resulImg);




// ESERCIZIO 8-3

// const person = {
// 	"gender": "female",
// 	"name": {
// 	  "title": "Miss",
// 	  "first": "Jennie",
// 	  "last": "Nichols"
// 	},
// 	"location": {
// 	  "street": {
// 		"number": 8929,
// 		"name": "Valwood Pkwy",
// 	  },
// 	  "city": "Billings",
// 	  "state": "Michigan",
// 	  "country": "United States",
// 	  "postcode": "63104",
// 	  "coordinates": {
// 		"latitude": "-69.8246",
// 		"longitude": "134.8719"
// 	  },
// 	  "timezone": {
// 		"offset": "+9:30",
// 		"description": "Adelaide, Darwin"
// 	  }
// 	},
// 	"email": "jennie.nichols@example.com",
// 	"login": {
// 	  "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
// 	  "username": "yellowpeacock117",
// 	  "password": "addison",
// 	  "salt": "sld1yGtd",
// 	  "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
// 	  "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
// 	  "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
// 	},
// 	"dob": {
// 	  "date": "1992-03-08T15:13:16.688Z",
// 	  "age": 30
// 	},
// 	"registered": {
// 	  "date": "2007-07-09T05:51:59.390Z",
// 	  "age": 14
// 	},
// 	"phone": "(272) 790-0888",
// 	"cell": "(489) 330-2385",
// 	"id": {
// 	  "name": "SSN",
// 	  "value": "405-88-3636"
// 	},
// 	"picture": {
// 	  "large": "https://randomuser.me/api/portraits/men/75.jpg",
// 	  "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
// 	  "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
// 	},
// 	"nat": "US",
// 	showNameSurname: function(){
// 		console.log(`nome: ${person.name.first} - cognome: ${person.name.last}`)
// 	},
// 	showAdrees: function(){
// 		console.log(`Via = ${person.location.street.name}, numero = ${person.location.street.number}, Città = ${person.location.city}, Stato = ${person.location.state}, Codice Postale = ${person.location.postcode}, Paese = ${person.location.country}, `)
// 	}
// }


// let emailObj = {
// 	email: [],
// 	username : [],
// 	password : []
// }

// function showEmail(){

// 	let mail = person.email;
// 	let userName = person.login.username;
// 	let pass = person.login.password;

// 	emailObj.email.push(mail);
// 	emailObj.username.push(userName);
// 	emailObj.password.push(pass);

// 	console.log(emailObj);
// }


// function showEmailObj(){

// 	console.log(`<h1>username dell'utente: ${emailObj.username}</h1>`);
// 	console.log(`<p>email dell'utente: ${emailObj.email}</p>`);
// 	console.log(`<small>password dell'utente: ${emailObj.password}</small>`)

	
// }


// let cardBoostrap = `
// <div class="card" style="width: 18rem;">
// 	<!-- nel src metterci l'url ad una delle pictures, nell'alt: title, first e last name-->
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
// 		<!-- nel card title mettere title, first e last name -->
//     <h5 class="card-title">Card title</h5>
// 		<!-- nel tag p mettere indirizzo formattato bene coi vari dati -->
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <!-- nel tag a come href mettere il link ad una delle pictures -->
// 		<a href="#" class="btn btn-primary">Visita</a>
//   </div>
// </div>
// `

// let users = [];

// function addUsers(){
// 	users.push(emailObj);
// 	console.log(users);
// }




// person.showAdrees();
// person.showNameSurname();
// showEmail();
// showEmailObj();
// addUsers();