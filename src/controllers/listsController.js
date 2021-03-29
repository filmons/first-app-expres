const { response, request } = require("express");
const listes = require("../models/lists");

exports.findAll = (request, response) => {
  listes.getAll((error, lists) => {
    if (error) {
      response.send(error.message);
    }

    console.log("mybe it work ",lists);

    response.render("home.ejs", { lists });
  });
}

exports.findtache = (request, response) =>{
  const{ id} = request.params;

  listes.getone(id, (error, lists) => {
    if (error) {
      response.send(error.message);
    }
   
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
