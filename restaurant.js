var express = require("express");
var path = require("path");
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var app = express();
var PORT = process.env.PORT || 8080;

var reservedTables = [
    {
        id: "YodaMaster",
        name: "Yoda",
        email: "JediMaster@gmail.com",
        phone: "900600900",
      },
      {
        id: "Tony The Tiger",
        name: "Tony",
        email: "bigTony@yahoo.com",
        phone: "900000000"
      }
    ]

    var waitTables = [
        {
            id: "Here I am waiting",
            name: "waiting",
            email: "I am waiting@gmail.com",
            phone: "69696969696"
        }
    ]


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

 app.get("/", function(req, res) {
     
 res.sendFile(path.join(__dirname, "index.html"));
   });

  

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });



  // within table.html //

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  })

  app.get("/tables/currentTable", function(req, res) {
return res.json(reservedTables)
})

  app.get("/tables/res", function(req, res) {
      return res.json(waitTables)
  })

  //
  app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
  });

  
  app.post("/newTables", function(req, res){
    var newReservation = req.body

    if(reservedTables.length < 5){
        reservedTables.push(newReservation)
    }
    else {
        waitTables.push(newReservation)
    };
    
  })

  app.post("/clear", function(req,res) {
    reservedTables.splice(0)
    waitTables.splice(0)
    return reservedTables, waitTables
    })


    app.get("/api/tablelink", function(req,res) {
        return res.json(reservedTables)
     })
     
     app.get("/api/waitlist", function(req,res){
        return res.json(waitTables)
     })