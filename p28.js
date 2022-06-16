let details = {

  data: [],

  addStudent: function(nam, math, sc, eng) {
    let obj = {};
    obj["name"] = nam;
    obj["math"] = math;
    obj["science"] = sc;
    obj["english"] = eng;

    this.data.push(obj);
  },

  highScore: function() {

    let max_pad = -Infinity;
    let item;
    for (let i = 0; i < this.data.length; i++) {
      let student = this.data[i];
      let total = student["math"] + student["science"] + student["english"];

      if (total > max_pad) {
        max_pad = total;
        item = student["name"];
      }

    }

    return item;
  },

  lowScore: function() {

  }
};

details["addStudent"]("shubham", 10, 20, 30);
details["addStudent"]("rajat", 15, 25, 35);
details["addStudent"]("rahul", 15, 20, 10);

// console.log(details.data);
console.log(details["highScore"]());