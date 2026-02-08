let productList = [];
let productNameInput = document.getElementById("productName");
let productPriceInput = document.getElementById("price");
let productCategoryInput = document.getElementById("productCategory");
let productDescriptionInput = document.getElementById("productDescription");
let btn = document.getElementById("btn");


// Get localStorage
if (localStorage.getItem("productlist") != null) {
    productList = JSON.parse(localStorage.getItem("productlist"));
    disPro();
}
// console.log(productList);
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
    disPro();
    console.log(productList);

    //set localStorage 
    localStorage.setItem("productlist", JSON.stringify(productList));

}

function disPro() {
    var allProducts = ``;
    for (let i = 0; i < productList.length; i++) {
        allProducts += `
               <tr>
                 <td>${i + 1}</td>
                 <td>${productList[i].name}</td>
                 <td>${productList[i].price}</td>
                 <td>${productList[i].category}</td>
                 <td>${productList[i].description}</td>
                 <td class="d-flex py-3">
                     <button class="btn btn-outline-primary me-1">Update</button>
                     <button class="btn btn-outline-danger ">Delete</button>
                 </td>
                </tr>

        `
    }
    console.log(allProducts);
    document.getElementById("tbody").innerHTML = allProducts;
}