let dog = {};

dog = {
  name : "chipku",
  legs : 4,
  colour : "black",
  age : 18,
  bark : function(){
            return "woof woof";
          }
};


console.log(dog["name"]);
console.log(dog["legs"]);
console.log(dog["colour"]);
console.log(dog["age"]);
console.log(dog["bark"]());
