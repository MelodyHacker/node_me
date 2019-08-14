async function getConnect() {
  var firebase = require("firebase-admin");
  var serviceAccount = require("../setting/serviceAccountKey.json");
  console.log("Come Main Connect");
  firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://cop-man.firebaseio.com"
  });
  
  var db = firebase.database();
  var ref = db.ref("cop_man");
 
  return await ref;
}


module.exports.getConnect = getConnect;