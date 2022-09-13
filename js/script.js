// Get All Input Field Value by ID
const getInputValueById = (id) => {
    const input = document.getElementById(id);
    const value = input.value;
    input.value = "";
    return value;
}

//Add Product On Item
const addProduct = () => {
    const productName = getInputValueById("product-name");
    const productQuantity = getInputValueById("product-quantity");
    const number = Number(productQuantity);

    if(!isNaN(productName) || !Number.isInteger(number)){
        alert("Your Input is not Valid");
        return;
    }
    setProductInLocalStorage(productName, productQuantity);
    displayProducts();
    
    console.table(getLocalStorageData());
}

//Get Data From Local Storage
const getLocalStorageData = () => {
    const products = localStorage.getItem("allProduct");
    const productObject = JSON.parse(products);
    return productObject;
}

// Set Data in Local Stoarge
const setProductInLocalStorage = (pName, pQuantity) => {
    let products = getLocalStorageData();
    // const products = {
    //     name: pName,
    //     quantity: pQuantity
    // }
    if(!products){
        products = {};
    }
    products[pName] = pQuantity;

    localStorage.setItem("allProduct", JSON.stringify(products) );
}

//Display Product
const displayProducts = () =>{
    const products = getLocalStorageData();
    const productContainer = document.getElementById("all-products");
    productContainer.textContent = "";
    for(let product in products){
        // console.log(product, products[product]);
        const name = product;
        const quantity = products[product];
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="shadow-sm p-3 mb-2 bg-body rounded">
            <span class="fs-4">${name}</span>
            <span>
                Quantity:<small class="fw-bold">${quantity}</small>
            <span>
            </div>
        `;
        productContainer.appendChild(div);
}
};
displayProducts();