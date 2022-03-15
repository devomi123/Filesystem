var fs = require("fs");
fs.open("xyz.txt","a",function(err,fd){
    if(err){
        console.log(err+"");
    }
    fs.writeFile(fd," pradip", function(err){
        console.log("thank you")
    });
});