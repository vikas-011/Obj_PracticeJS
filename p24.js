let details={
  name: "Kaleen Bhaiyya",
    age : 40,
    info : function(name){
      console.log("hello world",name)
      console.log("Ram",this.age);
    }
}

let name="rahul"
details.info(name)