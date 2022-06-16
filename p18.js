let student1 = {
                  name : "Rahul",
                  roll_no : "ft_204",
                  batch : "FT_WEB 20",
                  marks : 50
              }; 

let student2 = {
            name: "Manish",
            roll_no: "fp42",
            batch: "FT_WEB 20",
            marks : 70
           };

let student3={
        name:"subrat mishra",
        roll_no:"ft_19",
        batch:"ft_19_0446",
        marks : 80
};

let student4 = {
        name : "Archit",
        roll_no : "ft_0535",
        batch : "ft_web_19",
         marks : 85
};

let student5 =
              {
                    name:"Anshika" ,
                    roll_no:"ft_0678",
                    batch:"ftweb19",
                    marks : 90
              };

let arr=[];

arr.push(student1)
arr.push(student2)
arr.push(student3)
arr.push(student4)
arr.push(student5)

function studentNameNmarks(){
for (let i=0;i<arr.length;i++){
  console.log(arr[i]["name"],arr[i]["marks"])
}
}
// studentNameNmarks()

function marks70max(){
  for (let i=0;i<arr.length;i++){
  if (arr[i]["marks"] > 70){
    console.log(arr[i]["name"])
  }
  }
}
// marks70max()

function marksEqual90(){
   for (let i=0;i<arr.length;i++){
   if(arr[i].marks == 90){
     console.log(arr[i].name)
   }
   }
}
// marksEqual90()

function marks70min(){
  for(let i=0;i<arr.length;i++){
    if(arr[i].marks < 70){
      console.log(arr[i].name)
    }
  }
}
// marks70min()

function avrageMarksOfStudent(){

  let sum=0;
  let count=0;
  for(let i=0;i<arr.length;i++){
    sum=sum+arr[i]["marks"];
    count++
  }
  console.log("Average is ",sum/count)
}
// avrageMarksOfStudent()

function findMaxOfAllStudent(){

let max_pad=-Infinity;
let name;
let student_info;

for(let i=0;i<arr.length;i++){
    if(arr[i]["marks"] > max_pad){
      max_pad=arr[i]["marks"];
     student_info = arr[i];
    }
    

}
  console.log(student_info["name"])
}
// findMaxOfAllStudent()
