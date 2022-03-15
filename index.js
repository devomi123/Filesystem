var fs = require("fs");
let createfile=()=>{
 fs.open("myfile.txt","w",function(err,fd){
    if(err){
    console.log("while creating file"+err);
    return;
}
console.log(fd.toString()+'file crated');
   fs.writeFile(fd,"Welcome to Node.js", function(err){
       console.log("written in data")
   });
   
 });
}
 createfile();