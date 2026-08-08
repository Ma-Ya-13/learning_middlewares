const express = require("express");
const zod = require("zod"); // schema validation
const  app = express(); // created the instanece of the express 
  const schema = zod.array(zod.number());
 app.use(express.json()); // using a express.json middleware to  use post
   app.post("/health-checkup" , function(req,res){
    //  input - kidney [1,2] // you have to do an input validation // like it should be a array 
    // it shoul number nto srtings etc etc // require a lot of if else mess //\
    // instead we wil use zod schema to do this input validity check
    const kidney=  req.body.kidney;
    // const kidneylength =kidney.length;
      const response = schema.safeParse(kidney); // return object 
        if(!response.success){
           res.status(411).json({
            msg : "Input is InValid"
           })
        }
        else{
 res.send({
   response     
 })
}

   });
//    {
//  "kidney" :  [ 1 , "hello"]
//     }
  
   
//  otuput- input is in valid 
//  { nsjdkjd} // ouput  json syntax error
 
    app.listen(3000);