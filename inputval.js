const express = require("express");
const  app = express(); // created the instanece of the express 
  
 app.use(express.json()); // using a express.json middleware to  use post
   app.post("/health-checkup" , function(req,res){
    //  input - kidney [1,2]
    const kidney=  req.body.kidney;
    const kidneylength =kidney.length;
    res.send("you have " + kidneylength + " kidneys " );   

   });
   // if user gave any  invald  input 
   // global catches  // error based middlewares defined at the end of program  with 4 arguemnts in function 
   app.use(function(err, req , res , next){
    res.status(500).json({
      msg: "Invalid Credentials" //  if user doesnt gave kidney as  array we will se this message 
      // without expsoing the backened  logic in error  to cient in frontend

    });

   });
    app.listen(3000);
