const button = () => {
    const productField = document.getElementById("product");
    const productQuantity = document.getElementById("Quantity");
    const product = productField.value;
    const quantity = productQuantity.value;
    productField.value = "";
    productQuantity.value = "";
  
    productShow(product, quantity);
    saveProductLocalStorage(product, quantity);
  };
  
  const productShow = (product, quantity) => {
    const ul = document.getElementById("productShow");
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="p-3 border border-1">
        ${product} : ${quantity}
      </div>
    `;
    ul.appendChild(li);
  };
  
  const getShoppingCartFromLocalStorage = () => {
    const cart = localStorage.getItem("cart");
    try {
      return JSON.parse(cart) ?? {};
    } catch (err) {
      console.error(err);
      return {};
    }
  };
  
  const saveProductLocalStorage = (product, quantity) => {
    const cart = getShoppingCartFromLocalStorage();
    cart[product] = quantity;
    const cartString = JSON.stringify(cart);
    localStorage.setItem("cart", cartString);
  };
  
  const displayProduct = (product, quantity) => {
    const ul = document.getElementById("productShow");
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="p-3 border border-1">
        ${product} : ${quantity}
      </div>
    `;
    ul.appendChild(li);
  };
  
  const displayProductsFromLocalStorage = () => {
    const savedCart = getShoppingCartFromLocalStorage();
    const entries = Object.entries(savedCart);
    for (const [product, quantity] of entries) {
      displayProduct(product, quantity);
    }
  };
  
  displayProductsFromLocalStorage();
  