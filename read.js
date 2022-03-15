var fs = require("fs");
fs.readFile("xyz.txt",function(err,data){
    if(err){
        console.log("while read  file"+err);
        return;
    }
    console.log(data.toString() + ' file read');
});