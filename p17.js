let person1 = {
                name: "Godzilla Prasad",
                age : 400,
                address : "Mountains",
              };

let person2 = {
                name : "Bhalu Nath",
                age : 200,
                address : "Jungle"
              };

let person3 = {
                name : "hosiyar ji",
                age : 20,
                address : "masai"
              };

let arr=[];

arr.push(person1)
arr.push(person2)
arr.push(person3)


for (let i=0;i<arr.length;i++){
  console.log(arr[i]["name"],arr[i]["age"],arr[i]["address"])
}