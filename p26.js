// Cart Total

let data = {

  quantity: [2, 4, 1, 8, 5],
  price: [100, 300, 200, 400, 500],
  total_price: function() {
    let sum = 0;
    for (let i = 0; i < this.quantity.length; i++) {
      sum = sum + (this.quantity[i] * this.price[i]);
    }
    return sum;
  }
};

console.log(data["total_price"]());