function baseObj() {
  let mummy = {};
  //key =value.
  mummy["breakfast"] = "aloo Paratha";
  mummy["lunch"] = "kichidi";
  mummy["dinner"] = "bhindi";

  console.log(mummy["lunch"]);
  console.log(mummy["dinner"]);
  console.log(mummy['breakfast']);
}
// baseObj() //call here!
function updateValue(){
  let mummy={}
  
  mummy["breakfast"] = "aloo Paratha";
  mummy["lunch"] = "kichidi";
  mummy["dinner"] = "bhindi";

  //updated here!
  mummy["lunch"] = "Daal Chaval";

  console.log(mummy["lunch"])
}
// updateValue() //call Here! 

function deleteFromList(){
  let mummy={}
  
  mummy["breakfast"] = "aloo Paratha";
  mummy["lunch"] = "kichidi";
  mummy["dinner"] = "bhindi";

  //delete prpperty;
  delete mummy["breakfast"]
  console.log(mummy)
}
// deleteFromList()// call Here!

function menuList(){
  let menu={};

  menu["Dosa"]=150;
  menu["Idili"]=100;
  menu["Noodels"]=80;
  menu["Sandwich"]=90;
  menu["VegRoll"]=40;
  menu["EggRoll"]=60;
  menu["PaneerRoll"]=50;

  // console.log(menu)
  for(let key in menu){
    console.log(key,":",menu[key])
  }
}
// menuList()//call Here!

// Check whether a key exist or not
// If key present, then print value of that key
// if key not present , then print "key not exist"
function existOrNot(key){
  let obj={
    a:1,
    b:2,
    c:3
  }


 
    if(obj[key]==undefined){
      console.log(key,"NOt Exist")
    }
    else{
      console.log(key,"Exist")
                  }
    
}
existOrNot("g")
