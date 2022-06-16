let obj = {
  name: ["shakti", "shiva", "krishna", "radha"],
  gender: ["F", "M", "M", "F"],

  count: function(x) {
    let count = 0;

    for (let i = 0; i < this.gender.length; i++) {
      if (this.gender[i] == x) {
        count++;
      }
    }

    console.log(count);

  },

  user: function(name) {

    for (let i = 0; i < this.name.length; i++) {
      if (this.name[i] == name) {
        console.log(this.gender[i]);
      }
    }

  }
}

obj.count("F")

obj.user("shiva");