const db = require("/home/filmon/first-app-expres/db");

class listes {
  constructor(listesone) {
    const {name} = listesone;

    this.name = name;
  }
}
  exports.getAll = (callback) => {
    db.query("SELECT * FROM Tasklist", (error, result) => {
      if (error) {
        console.log("error: ", error);
        callback(error, null);
        return;
      }

      callback(null, result);
    })
  
}

  exports.getone = (id, callback) => {
    db.query(`SELECT * FROM Tasklist WHERE id =${id};`, (error, result) => {
      if (error) {
        console.log("error: ", error);
        callback(error, null);
        return;
      }

      callback(null, result);
    })
  
  }
  exports.create = (lists, callback) => {
    db.query(`INSERT INTO Tasklist (name) VALUES ("${lists.name}");`, (error, result) => {


      if (error) {
        console.log("error: ", error);
        callback(error, null);
        return;
      }
      
      callback(null, result);
    })
  }




