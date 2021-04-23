const jwt = require('jsonwebtoken');

const SECRET = "pouetpouet";

const isAuth = (request, response, next) => {

    const token = request.cookies.authcookie;
   
    console.log(token); // de 5 jusqu'à 9 pour requpere le coukies
    jwt.verify(token, SECRET, (error, user) => {

        if (error) {
          response.send(error.message);
        } else {
          const { name, username, exp } = user;

      // Useless or not ?!
      if (Date.now() / 1000 >= exp) {
        //response.clearCookie("authcookie");

        response.send("Session expired. Try to reconnect you.");
      }

    
    next();

        request.user = { name, username };
      next();
  
    }
})
};





module.exports = isAuth;