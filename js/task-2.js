class Inventory {
  #products;

  constructor(products) {
    this.#products = products;
  }

  // Method to get the current list of products
  getProducts() {
    return this.#products;
  }

  // Method to add a new product to the inventory
  addProduct(newProduct) {
    this.#products.push(newProduct);
  }

  // Method to remove a product from the inventory
  removeProduct(productToRemove) {
    this.#products = this.#products.filter(product => product !== productToRemove);
  }
}

const inventory = new Inventory(["Nanitoids", "Prolonger", "Antigravitator"]);
const outputDiv2 = document.getElementById('task-2-results');
outputDiv2.innerHTML += `<p>Initial products: ${inventory.getProducts().join(', ')}</p>`;

// Add a new product to the inventory and display the updated list
inventory.addProduct("Droid");
outputDiv2.innerHTML += `<p>After adding Droid: ${inventory.getProducts().join(', ')}</p>`;

// Remove a product from the inventory and display the updated list
inventory.removeProduct("Prolonger");
outputDiv2.innerHTML += `<p>After removing Prolonger: ${inventory.getProducts().join(', ')}</p>`;
