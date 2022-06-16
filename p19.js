let name = ["Rice", "Dal", "Salt"]
let quantity = [2, 3, 1]
let price = [60, 50, 20]

let container = [];

for (let i = 0; i < name.length; i++) {
  let obj = {};

  obj["name"] = name[i];
  obj["quantity"] = quantity[i];
  obj["price"] = price[i]

  container.push(obj);

}
function calculateTotal(container){
{
  let sum = 0;
  for (let j = 0; j < container.length; j++) {
    let total = container[j]["quantity"] * container[j]["price"];
    sum = sum + total
  }
  console.log(sum)
}
}
calculateTotal(container)

