let masai_students = {

  data : [],
  addStudent : function(name, batch, score, unit)
              {
                let obj = {}
                obj["name"] = name;
                obj["batch"] = batch;
                obj["score"] = score;
                obj["unit"] = unit;

                this.data.push(obj);
              },
  getStudents : function()
                {
                  for(let i=0; i<this.data.length; i++)
                  {
                      console.log(this.data[i]["name"]);
                  }
                },
  
  getTopperMasai : function()
                  {
                    let max_pad = -Infinity;
                    let item;

                    for(let i=0; i<this.data.length; i++)
                    {
                        let student = this.data[i];
                        if(student["score"]>max_pad)
                        {
                          max_pad = student["score"];
                          item = student;
                        }
                    }

                    console.log(item);
                  },

  getTopperBatch : function(batch)
                  {

                    let max_pad = -Infinity;
                    let item;

                    for(let i=0; i<this.data.length; i++)
                    {
                        let student = this.data[i];
                        if(student["batch"]==batch && student["score"]>max_pad)
                        {
                          max_pad = student["score"];
                          item = student;
                        }
                    }

                    console.log(item);
                  },

  getTopperUnit : function(unit)
                  {
                    let max_pad = -Infinity;
                    let item;

                    for(let i=0; i<this.data.length; i++)
                    {
                        let student = this.data[i];
                        if(student["unit"]==unit && student["score"]>max_pad)
                        {
                          max_pad = student["score"];
                          item = student;
                        }
                    }

                    console.log(item);
                  },

  getStudentScoreBelowY : function(y)
                          {
                            for(let i=0; i<this.data.length; i++)
                              {
                                let student = this.data[i];
                                if(student["score"]<y)
                                {
                                  console.log(student);
                                }
                              }
                          },
  getCountStudents : function()
                    {
                      console.log(this.data.length);
                    },
  getCountStudentBatch : function(batch)
                        {
                            let count=0;
                           for(let i=0; i<this.data.length; i++)
                            {
                                let student = this.data[i];
                                if(student["batch"]==batch)
                                {
                                  count++;
                                }
                            }
                          console.log("Batch Count is",count);
                        },
  getCountStudentUnit : function(unit)
                        {
                          let count=0;
                           for(let i=0; i<this.data.length; i++)
                            {
                                let student = this.data[i];
                                if(student["unit"]==unit)
                                {
                                  count++;
                                }
                            }
                          console.log("Batch Count is",count);
                        },
  updateStudentScore : function(name, score)
                        {
                          for(let i=0; i<this.data.length; i++)
                          {
                              let student = this.data[i];
                              if(student["name"]==name)
                              {
                                this.data[i]["score"] = score;
                              }
                          }
                          console.log("Success");
                        },

  getAverageScoreOfUnit : function(unit)
                          {
                            
                          }
};



masai_students.addStudent("Rahul","ftweb18",60, 1);
masai_students.addStudent("Shubham","ftweb18",70, 2);
masai_students.addStudent("Rajesh","ftweb18",80, 3);
masai_students.addStudent("Nakul","ftweb19",50, 4);
masai_students.addStudent("Dharam","ftweb18",65, 1);
masai_students.addStudent("Montu","ftweb17",80, 2);
masai_students.addStudent("Rajpal","ftweb17",90, 3);
masai_students.addStudent("Sunny","ftweb18",55, 4);
masai_students.addStudent("Monish","ftweb18",67, 1);
masai_students.addStudent("Jimmy","ftweb17",77, 2);
masai_students.addStudent("tommy","ftweb17",47, 3);
masai_students.addStudent("rajat","ftweb19",57, 4);

// masai_students.getStudents();
// masai_students.getTopperMasai();
 // masai_students.getTopperBatch("ftweb18");
// masai_students.getTopperUnit(2);
// masai_students.getStudentScoreBelowY(60);
// masai_students.getCountStudents();
// masai_students.getCountStudentBatch("ftweb17");
masai_students.updateStudentScore("rajat",70);

console.log(masai_students.data);

