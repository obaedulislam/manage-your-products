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


// Set Data in Local Stoarge
const setProductInLocalStorage = (pName, pQuantity) => {
    const products = {
        name: pName,
        quantity: pQuantity
    }
  
    localStorage.setItem("allProduct", JSON.stringify(products) );
}