console.log('Script loaded');

console.log(getAvailableProducts());

const testProductNames = ["a","b","c","d"];


function renderProducts(products) {
	for (var i = 0; i < products.length; i++) {
		let section = document.getElementById("products");
		let ul = section.querySelector("ul");
		let li = document.createElement("li");
		li.innerHTML = products[i].name + " | " + products[i].price + " | " + products[i].rating + " | " + products[i].shipsTo;
		ul.appendChild(li);
	}
}
 
const products = getAvailableProducts();
renderProducts(products);
