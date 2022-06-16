let data = {

  arr: ['Dodo', 'Tiger', 'Dodo', 'Dodo'],
  lastIndexOf: function(search) {
    let index = "Bhai nhi hai";

    for (let i = 0; i < this.arr.length; i++) {
      if (search == this.arr[i]) {
        index = i;
      }
    }

    return index;

  }
};

console.log(data["lastIndexOf"]("Baghban"));