var fs = require("fs");
 fs.rename("xyz.txt","abc.txt",function(err){
     if(err){
         console.log("err");
     }
 });