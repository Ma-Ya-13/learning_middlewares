    const express = require("express");
    const app = express();

    app.get("/health-checkup" , function(req, res){
        //Query parameters are information added to the URL.
        //http://localhost:3000/health-checkup?kidneyid=1    
        const kidneyid= req.query.kidneyid;
        const username= req.headers.username;
        const password =req.headers.password;
        // authentication check
        if(username!="manu" || password!="manu13"){
            res.status(403).json({
                msg :"Invalid User",

            });
            return;
        } 
// input validation 
        if(kidneyid!=1 && kidneyid!=2){
            res.status(411).json({
                msg: "Wrong Input",
            });
            return;   
        }
        res.send("Your kidney is healthy");
        

    });
    app.listen(3000);
