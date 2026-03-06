let products = []
function loadProducts(){

fetch("products.json")

.then(res => res.json())

.then(data => {

products = data

displayProducts()

})

}

loadProducts();
function displayProducts(){

let container = document.getElementById("productList")

container.innerHTML = ""

products.forEach((product,index)=>{

container.innerHTML += `

<div class="col-md-4 mb-4">

<div class="card shadow">

<img src="${product.image}" class="card-img-top">

<div class="card-body">

<h5 class="card-title">${product.name}</h5>

<p class="card-text">Prix : ${product.price} $</p>

<button class="btn btn-warning" onclick="editProduct(${index})">
Modifier
</button>

<button class="btn btn-danger" onclick="deleteProduct(${index})">
Supprimer
</button>

</div>

</div>

</div>

`

})

}
function addProduct(){

let name = document.getElementById("name").value
let price = document.getElementById("price").value
let image = document.getElementById("image").value

let newProduct = {

id: products.length + 1,
name: name,
price: price,
image: image

}

products.push(newProduct);

displayProducts();

}
function deleteProduct(index){

products.splice(index,1);

displayProducts();

}
function editProduct(index){

let newName = prompt("Nouveau nom",products[index].name);

let newPrice = prompt("Nouveau prix",products[index].price);

products[index].name = newName;
products[index].price = newPrice;

displayProducts();

}