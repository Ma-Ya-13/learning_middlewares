const express = require("express");
const zod = require("zod");
const  app = express(); 
/*  MAKe  a zod input validaion schema 
      email: string =>email
      password  : atlest8 letter 
      country : "IN" , "US".
*/

 
    const schema = zod.object({
            email=z.string(),
            password= z.string(),
            country = z.literal("IN").or(z.literal("US")),
            kidney=z.array(z.number())

    }); 
 app.use(express.json()); 
   app.post("/health-checkup" , function(req,res){
    
    const kidney=  req.body.kidney;
  
      const response = schema.safeParse(kidney); 
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

 
    app.listen(3000);