show dbs
db
use dept
db.createCollection("department")
show dbs
db.department.insert({name:"Finance"})
db.department.find()
use dept
db.department.insert({name:"Management"})
db.department.insert({name:"Prodection"})
db.department.insert({name:"Marketing"})
db.department.find()
db.department.insert([{name:"HR"},{name:"Maintenance",teamsize:"16"}])
show dbs
use stud
db.createCollection("student")
db.student.insert([{rollNo:1,name:"abhi",section:"A",branch:"ECE",contact:"9827112365"},
                {rollNo:2,name:"jeet",section:"B",branch:"CSE",contact:"1236547895"},
                {rollNo:3,name:"abhijeet",section:"C",branch:"CSE",contact:"1254789632"},
                {rollNo:4,name:"anurag",section:"A",branch:"CE",contact:"4589652145"},
                {rollNo:5,name:"junaid",section:"C",branch:"ECE",contact:"1459753214"},
                {rollNo:6,name:"arpit",section:"B",branch:"ECE",contact:"1452365789"},
                {rollNo:7,name:"varun",section:"A",branch:"ECE",contact:"6582714569"},
                {rollNo:8,name:"arun",section:"C",branch:"CSE",contact:"1265478532"},
                {rollNo:9,name:"zain",section:"C",branch:"CSE",contact:"1452365478"},
                {rollNo:10,name:"aarav",section:"B",branch:"CSE",contact:"1456987533"},])
db.student.find()

db.stud.drop()
db.dropDatabase()
db.createCollection("employee")
db.employee.insert([{no:2,name:"MSD",salary:1500,role:"WK",age:30,gender:"Male"},
                    {no:3,name:"YS",salary:1000,role:"ALR",age:40,gender:"Female"},
                    {no:4,name:"RD",salary:2000,role:"MOB",age:25,gender:"Male"},
                    {no:5,name:"RS",salary:500,role:"OB",age:28,gender:"Male"},
                    {no:6,name:"BK",salary:500,role:"MOB",age:18,gender:"Male"},
                    {no:7,name:"VK",salary:950,role:"BW",age:23,gender:"Male"},
                    {no:8,name:"JB",salary:950,role:"BW",age:32,gender:"Male"},
                    {no:9,name:"HP",salary:400,role:"ALR",age:29,gender:"Male"},
                    {no:6,name:"VS",salary:300,role:"OB",age:35,gender:"Female"},])
db.employee.findOne()
db.employee.find({name:"MSD"})
db.employee.find({name:"MSD",role:"MOB"})
db.employee.find({role:"MOB",gender:"Male"})
db.employee.find({age:{$lt:30}})
db.employee.find({age:{$gt:30}})
db.employee.find({age:{$gte:30}})
db.employee.find({age:{$lte:30}})
db.employee.find({age:{$ne:30}})
db.employee.find({salary:500,age:18})
db.employee.find({$or:[{salary:500},{age:18}]})
db.employee.update({salary:500},{$set:{salary:1500}},{multi:true})
db.employee.find({$or:[{salary:1500},{age:25,gender:'Male'}]})
db.employee.remove({salary:950},1)
db.employee.find()
db.employee.find({},{no:1,salary:1})
db.employee.find({},{_id:0,no:1,salary:1})
db.employee.find({},{_id:0,no:1,salary:1}).limit(5)
db.employee.find({},{_id:0,no:1,salary:1}).limit(5).skip(2)
db.employee.find({},{_id:0,no:1,salary:1,name:1}).sort({name:-1})
db.employee.aggregate([{$group:{_id:"$gender",MaxAge:{$max:"$age"}}}])
db.employee.aggregate([{$group:{_id:"$gender",MinAge:{$min:"$age"}}}])