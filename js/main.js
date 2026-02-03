let productList = [];
let productNameInput = document.getElementById("productName");
let productPriceInput = document.getElementById("price");
let productCategoryInput = document.getElementById("productCategory");
let productDescriptionInput = document.getElementById("productDescription");
let btn = document.getElementById("btn");


// console.log(productNameInput);
// console.log(productPriceInput);
// console.log(productCategoryInput);
// console.log(productDescriptionInput);
// console.log(btn);

btn.onclick = function (e) {
    e.preventDefault();
    addProduct();
}

function addProduct() {
    let pro = {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        description: productDescriptionInput.value
    }
    productList.push(pro);
    // console.log(pro);
    console.log(productList);
}