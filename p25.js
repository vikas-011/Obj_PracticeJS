let rectangle ={
 
  length:40,
  breadth:30,

  area:function (){
    let ar=this.length*this.breadth;
    console.log(ar)
    //return ar;
    
  },
  parameter:function(){
    let pr=2*(this.length*this.breadth);
    console.log(pr)
      //return pr;
  }
  
}
rectangle["area"]();
rectangle["parameter"]();
// console.log(rectangle["area"]());//condition return ar;
// console.log(rectangle["parameter"]());//condition return pr;

// update value
rectangle["length"]=80;
rectangle["breadth"]=60;
//updated result seeHere!
rectangle["area"]();
rectangle["parameter"]();