

const { response, request } = require("express");
const listes = require("../models/lists");

exports.findAll = (request, response) => {
  listes.getAll((error, lists) => {
    if (error) {
      response.send(error.message);
    }

    //console.log("mybe it work ",lists);

    response.render("home.ejs", { lists });
  });
}

exports.findtache = (request, response) =>{
  const{ id} = request.params;

  listes.getone(id, (error, lists) => {
    if (error) {
      response.send(error.message);
    }
   console.log(lists)
  response.render("taches.ejs", { lists });
  });
}

 

exports.addOne = (request, response) => {
  listes.create(request.body, (error, result) => {
    if (error) {
      response.send(error.message);
    }

    response.redirect("/");
  })
}
exports.deleteUser = ( req, res) =>{
 const id = req.params.id;
//console.log(id);
  listes.deletOne( id, (err, response) =>{
    
    if (err) { 
      throw err;
    }

  res.redirect('/');
})
}

/////////////////////////////////

// const { response, request } = require("express");
// const listes = require("../models/lists");


// //////////////// get all task list ok
// exports.findAll = (request, response) => {
//   listes.getAll((error, lists) => {
//     if (error) {
//       response.send(error.message);
//     }

//     console.log("mybe it work ",lists);

//     response.render("home.ejs", { lists });
//   });
// }
// //////////////// finde one task and detail ok
// exports.findtacheDetail = (request, response) =>{
//   const{ id} = request.params;

//   listes.getone(id, (error, lists) => {
//     if (error) {
//       response.send(error.message);
//     }
   
//   response.render("taches.ejs", { lists });
//   });
// }
// ///////////////// add one task 
 

// exports.addOne = (request, response) => {
//   listes.create(request.body, (error, result) => {
//     if (error) {
//       response.send(error.message);
//     }

//     response.redirect("/");
//   })
// }




// //////////////////////////////////////// delet un task

// exports.deleteUser = ( id ,req, res) =>{

// console.log(response,deleteUser);
//   listes.deletOne((err, res) =>{
//     const {id} = req.params

//     if (err) throw err;

//     console.log("Success");

//     response.send(error.message);

  
     
//   });

//   res.redirect('/');
// }