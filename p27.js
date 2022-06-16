let data = {

  product: ["earphone", "hedphone", "phone", "tablet", "tv"],
  price: [500, 2000, 20000, 40000, 30000],

  get_name_of_product_maxprice: function() {
    let max_pad = -Infinity;
    let item;
    for (let i = 0; i < this.price.length; i++) {
      if (this.price[i] > max_pad) {
        max_pad = this.price[i];
        item = this.product[i];
      }
    }

    return item;
  }

};


console.log(data["get_name_of_product_maxprice"]());