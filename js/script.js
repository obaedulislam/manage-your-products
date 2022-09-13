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
    setProductInLocalStorage(productName, productQuantity)
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
    if(!products){
        products = {};
    }
    products[pName] = pQuantity;
    console.log(products);
    localStorage.setItem("allProduct", JSON.stringify(products) );
}