let dish = ["Paratha", "Masala Dosa", "Noodles", "Spring Rolls", "Samosa"]
let category = ["North Indian", "South Indian", "Chinese", "Chinese", "North Indian"]
let price  = [40, 80, 50, 60, 25]

let arr=[];

for(let i=0;i<dish.length;i++){
  let obj={};
  obj["name"]=dish[i];
  obj["category"]=category[i];
  obj["price"]=price[i];

  arr.push(obj)
}
// console.log(arr)
function getDishesNames(){
  for(let i=0;i<arr.length;i++){
    console.log(arr[i]["name"])
  }
}
// getDishesNames()

function getDishInRange(arr, price1, price2){
  for(let i=0;i<arr.length;i++){
    let price=arr[i]["price"]
    if(price>=price1 && price<=price2){
      console.log(arr[i]["name"],arr[i]["price"])
    }
  }
  
}
// getDishInRange(arr,40 , 70)



function getMaxPriceDish(arr){
  let max_pad=-Infinity;
  let max_obj;

  for (let i=0;i<arr.length;i++){
    if(arr[i]["price"]>max_pad){
      max_pad=arr[i]["price"];
      max_obj=arr[i]
    }
  }
  console.log(max_obj)
  
}
getMaxPriceDish(arr)
