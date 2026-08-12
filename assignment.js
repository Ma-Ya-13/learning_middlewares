//write the average time  your server is taking to  handle a request using a middleware 
//count the number of request.

const express =  require("express");

  const app = express(); // make the instance of the express
   let numberofrequest=0;
    let totaltime =0;
    function timeandcount(req, res ,next){

    const startTime = Date.now(); 
    // Store the time when the request enters our middleware
    numberofrequest++;
    next(); 
    // Pass the request to the next middleware or route
    // Without next(), the request will get stuck here
     const endTime = Date.now(); 
    // Store the time after next() finishes
    const timetaken = endTime- startTime;
     totaltime = totaltime+timetaken;
    const averagetime = totaltime/numberofrequest;
     console.log("No of request are :" ,numberofrequest);
     console.log("AVERAGE TIME TAKEN" , averagetime);

    }
     app.use(timeandcount);
  app.get("/1st" , function(req , res , next){
      res.send("helloworld");
  });
   app.get("/about" , function(req,res){
                   res.send("about the page ");
   });

   


    app.listen(3000);

