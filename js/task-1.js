const clientProfile = {
  userName: "Mango",
  accountBalance: 24000,
  specialOffer: 0.1,
  purchaseList: ["Burger", "Pizza", "Salad"],

  // Method to get current balance
  getAccountBalance() {
    return this.accountBalance;
  },

  // Method to get current discount
  getSpecialOffer() {
    return this.specialOffer;
  },

  // Method to set a new discount value
  updateSpecialOffer(newDiscount) {
    this.specialOffer = newDiscount;
  },

  // Method to retrieve the list of purchases
  getPurchaseList() {
    return this.purchaseList;
  },

  // Method to add a new order and adjust the balance
  placeOrder(price, item) {
    this.accountBalance -= price - price * this.specialOffer;
    this.purchaseList.push(item);
  },
};

// Update the discount value
clientProfile.updateSpecialOffer(0.15);
const outputDiv = document.getElementById('task-1-results');
outputDiv.innerHTML += `<p>Discount: ${clientProfile.getSpecialOffer()}</p>`;

// Place a new order and display the updated balance and orders
clientProfile.placeOrder(5000, "Steak");
outputDiv.innerHTML += `<p>Balance: ${clientProfile.getAccountBalance()}</p>`;
outputDiv.innerHTML += `<p>Orders: ${clientProfile.getPurchaseList().join(', ')}</p>`;
