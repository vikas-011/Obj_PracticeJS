let name = ["Shirt", "Jeans", "Shoes", "Slippers"];
let quantity = [2, 3, 1, 4];
let price = [600, 1500, 2000, 500];
let rating = [3.5, 4, 2, 4];


// Part 1

let shopping = {
  data: [],
  addItem: function(nam, quant, pri, rat) {
    let obj = {};
    obj["name"] = nam;
    obj["quantity"] = quant;
    obj["price"] = pri;
    obj["rating"] = rat;

    this.data.push(obj);
  },
  filterProduct: function(price, rating) {
    for (let i = 0; i < this.data.length; i++) {
      let product = this.data[i];
      if (product["rating"] >= rating && product["price"] >= price) {
        console.log(product["name"]);
      }
    }

  },

  totalPrice: function(names) {

  }
};


for (let i = 0; i < name.length; i++) {
  shopping["addItem"](name[i], quantity[i], price[i], rating[i]);
}


// console.log(shopping["data"]);

shopping["filterProduct"](1500, 4);