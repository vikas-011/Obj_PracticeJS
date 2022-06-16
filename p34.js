let users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
};



// Part 1
function getLoggedInUsers(users) {
  for (let i in users) {
    if (users[i]["isLoggedIn"] == true) {
      console.log(i, users[i]["email"]);
    }

  }
}

// getLoggedInUsers(users);


// Part 2

function getUsersByPoints(users, x) {

  for (let mera_naam in users) {
    if (users[mera_naam]["points"] == x) {
      console.log(mera_naam);
    }
  }

}






function checkSkill(required_skill, person_skill) {
  let diary = {};
  for (let i = 0; i < required_skill.length; i++) {
    let skill = required_skill[i];

    for (let j = 0; j < person_skill.length; j++) {
      if (skill == person_skill[j]) {
        diary[skill] = "present";
      }
    }
  }

  if (diary["React"] == "present" && diary["Redux"] == "present") {
    return true;
  }
  else {
    return false;
  }
}



let required_skill = ['React', 'Redux'];

for (let i in users) {
  // console.log(i, users[i]["skills"]);

  let person_skill = users[i]["skills"]
  let bucket = checkSkill(required_skill, person_skill)

  if (bucket == true) {
    console.log(i, users[i]["email"]);
  }
}