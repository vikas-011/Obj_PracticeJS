let details = {

  name : "Kaleen Bhaiyya",
  age : 40,
  hobbies : ["killing", "Gun Making"],

  print : function()
          {
            console.log("Hello World");
          }
};

console.log(details["name"]);
console.log(details.age)
console.log(details.hobbies);
details['print']()