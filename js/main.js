let productList = [];
let productNameInput = document.getElementById("productName");
let productPriceInput = document.getElementById("price");
let productCategoryInput = document.getElementById("productCategory");
let productDescriptionInput = document.getElementById("productDescription");
let btn = document.getElementById("btn");
let currentIndex = 0;
let productSearchInput = document.getElementById("productSearch");
// console.log(productSearchInput.value);
productSearchInput.onkeyup = function () {
    searchPro(productSearchInput.value);
}


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
    if (btn.innerHTML == "Add Product") {
        addProduct();
    } if (btn.innerHTML == "Update") {
        updateAction(currentIndex);
        clearForm();
        btn.innerHTML = "Add Product";
    }
}
function clearForm() {
    productNameInput.value = "";
    productPriceInput.value = "";
    productCategoryInput.value = "";
    productDescriptionInput.value = "";
    btn.innerHTML = "Add Product";
}

function addProduct() {
    let pro = {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        description: productDescriptionInput.value
    }
    if (validateForm()) {
        productList.push(pro);


    } else {
        window.alert("Please enter valid data");
    }
    // console.log(pro);
    disPro();
    // console.log(productList);

    //set localStorage 
    localStorage.setItem("productlist", JSON.stringify(productList));
    clearForm();
}

function deletePro(index) {
    productList.splice(index, 1);
    disPro();
    localStorage.setItem("productlist", JSON.stringify(productList));
}

function update(index) {
    productNameInput.value = productList[index].name;
    productPriceInput.value = productList[index].price;
    productCategoryInput.value = productList[index].category;
    productDescriptionInput.value = productList[index].description;
    btn.innerHTML = "Update";
    currentIndex = index;
    // localStorage.setItem("productlist", JSON.stringify(productList));
    // clearForm();
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
                     <button onclick="update(${i})" class="btn btn-outline-primary me-1">Update</button>
                     <button onclick="deletePro(${i})" class="btn btn-outline-danger ">Delete</button>
                 </td>
                </tr>

        `
    }
    // console.log(allProducts);
    document.getElementById("tbody").innerHTML = allProducts;
}

function validateForm() {
    let name = productNameInput.value.length > 5 && productNameInput.value.length < 20;
    let price = productPriceInput.value > 0;
    let category = productCategoryInput.value.length > 3 && productCategoryInput.value.length < 20;
    let description = productDescriptionInput.value.length > 5 && productDescriptionInput.value.length < 100;
    return name && price && category && description;
}

function updateAction(index) {
    productList[index].name = productNameInput.value;
    productList[index].price = productPriceInput.value;
    productList[index].category = productCategoryInput.value;
    productList[index].description = productDescriptionInput.value;
    disPro();
    localStorage.setItem("productlist", JSON.stringify(productList));
    clearForm();
}

function searchPro(term) {
    var allProducts = ``;
    for (let i = 0; i < productList.length; i++) {
        if (productList[i].name.toLowerCase().includes(term.toLowerCase())) {
            allProducts += `
                <tr>
                    <td>${i + 1}</td>
                    <td>${productList[i].name}</td>
                    <td>${productList[i].price}</td>
                    <td>${productList[i].category}</td>
                    <td>${productList[i].description}</td>
                    <td class="d-flex py-3">
                        <button onclick="update(${i})" class="btn btn-outline-primary me-1">Update</button>
                        <button onclick="deletePro(${i})" class="btn btn-outline-danger ">Delete</button>
                    </td>
                </tr>  
            `
        } else if (allProducts == ``) {
            allProducts = `
            <tr>
                <td colspan="6" class="text-center">No products found</td>
            </tr>  
        `
        }
    }
    document.getElementById("tbody").innerHTML = allProducts;
}


