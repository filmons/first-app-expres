const db = require("/home/filmon/first-app-expres/db");

// class listes {
//   constructor(listesone) {
//     const {name} = listesone;

//     this.name = name;
//   }
// }
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
    db.query(`SELECT * FROM Task WHERE id =${id};`, (error, result) => {
      if (error) {
        console.log("error: ", error);
        callback(error, null);
        return;
      }
//console.log(result)

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
  exports.deletOne = (id, callback) => {
        db.query(`DELETE FROM Tasklist  WHERE id = ${id};`, (error, result) => {
           // console.log(id);
          if (error) {
            console.log("error: ", error);
            callback(error, null);
            return;
          }
          
          callback(null, result);
        })
      }


///////////////////////////////////

// const db = require("/home/filmon/first-app-expres/db");

// class listes {
//   constructor(listesone) {
//     const {name} = listesone;

//     this.name = name;
//   }
// }
// ////// ok
//   exports.getAll = (callback) => {
//     db.query("SELECT * FROM task_list", (error, result) => {
//       if (error) {
//         console.log("error: ", error);
//         callback(error, null);
//         return;
//       }

//       callback(null, result);
//     })
  
// }
// ///////// ok

//   exports.getone = (id, callback) => {
//     db.query(`SELECT * FROM task_list WHERE id =${id};`, (error, result) => {
//       if (error) {
//         console.log("error: ", error);
//         callback(error, null);
//         return;
//       }

//       callback(null, result);
//     })
  
//   }
//   exports.create = (lists, callback) => {
   
//     db.query(`INSERT INTO task_list (name, date) VALUES ("${lists.name}");`, (error, result) => {


//       if (error) {
//         console.log("error: ", error);
//         callback(error, null);
//         return;
//       }
      
//       callback(null, result);
//     })
//   }

//   ////////// pas fini 

 
  
// /////////////// pas fini
//   exports.deletOne = (id, callback) => {

//     db.query(`DELETE FROM task_list  WEHER task_id = ("${id}");`, (error, result) => {
//         console.log(id);

//       if (error) {
//         console.log("error: ", error);
//         callback(error, null);
//         return;
//       }
      
//       callback(null, result);
//     })
//   }
  
//   ///////////////////////
//   const db = require("/home/filmon/first-app-expres/db");

// class listes {
//   constructor(listesone) {
//     const {name} = listesone;

//     this.name = name;
//   }
// }
//   exports.getAll = (callback) => {
//     db.query("SELECT * FROM Tasklist", (error, result) => {
//       if (error) {
//         console.log("error: ", error);
//         callback(error, null);
//         return;
//       }

//       callback(null, result);
//     })
  
// }

//   exports.getone = (id, callback) => {
//     db.query(`SELECT * FROM Tasklist WHERE id =${id};`, (error, result) => {
//       if (error) {
//         console.log("error: ", error);
//         callback(error, null);
//         return;
//       }

//       callback(null, result);
//     })
  
//   }
//   exports.create = (lists, callback) => {
//     db.query(`INSERT INTO Tasklist (name) VALUES ("${lists.name}");`, (error, result) => {


//       if (error) {
//         console.log("error: ", error);
//         callback(error, null);
//         return;
//       }
      
//       callback(null, result);
//     })
//   }
