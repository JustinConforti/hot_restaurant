
var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var newReservation = [{}];

app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
  });

  app.post("/newTables", function(newReservation){
      var newReservation = req.body
      if(reservedTables)

      reserveTables.push(newReservation)
  }

//   app.get("/api/waitlist", function(req, res) {
//     var table= req.params.newReservation;
  
//     console.log(table);
  
//     for (var i = 0; i < newReservation.length; i++) {
//       if (table === newReservation[i].routeName) {
//         return res.json(newReservation[i]);
//       }
//     }
  
//     return res.json(false);
//   });

  
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  

   
//HTML Script

//   $("#submit").on("click", function(event) {
//     event.preventDefault();
//     var newReservation = {
//       name: $("#name").val().trim(),
//       phone: $("#phone").val().trim(),
//       email: $("#email").val().trim(),
//       id: $("#id").val().trim()
//     };

//     console.log(newReservation);

//     $.post("/api/tables", newReservation)
//       .then(function(data) {
//           if (data){
//               alert("Your reservation is confirmed")
//           }
//           else {
//               alert("This reservation cannot be confirmed")
//           }

//         $("#reserve-name").val("");
//         $("#reserve-phone").val("");
//         $("#reserve-email").val("");
//         $("#reserve-unique-id").val("");
//     });
//  });