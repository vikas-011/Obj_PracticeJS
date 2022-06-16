data = {

  name: "Suraj Lal Singh",
  toUpperCase: function() {
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let chor = "";

    for (let i = 0; i < this.name.length; i++) {
      let hero = this.name[i];
      let match = "nhi mila";

      for (let j = 0; j < lower.length; j++) {
        if (hero == lower[j]) {
          chor = chor + upper[j];
          match = "mil gya";
        }
      }

      if (match == "nhi mila") {
        chor = chor + hero;
      }

    }

    console.log(result);
  },
  toLowerCase: function() {

  }
}

data["toUpperCase"]();