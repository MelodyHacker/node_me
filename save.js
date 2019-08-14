var firebase = require("firebase-admin");
var serviceAccount = require("./setting/serviceAccountKey.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://cop-man.firebaseio.com"
});

var db = firebase.database();
var ref = db.ref("cop_man");
ref.once("value", function(snapshot) {
  console.log("Debug On Data");
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// unix time and genarat id
Date.prototype.toUnixTime = function() { return this.getTime()/1000|0 };
Date.time = function() { return new Date().toUnixTime(); }

// random char 
let rand = Math.random().toString(36).substring(7);
let token = Math.random().toString(36);

//log id and unix time 
console.log("Char Id " + rand)
console.log("Current Time: " + Date.time())

//set value
var usersRef = ref.child("user_profile");
var name = "MelodyHacker";
var data_setting = "asdanonavadnaosnonasvlk:sa,ampaspck";
var type_token = "face";

//push data to firebase
usersRef.child(
  Date.time()  + '_' + rand ).set({
    name: name,
    date_register: Date(),
    token: token,
    type_token: type_token,
    data_setting: data_setting
  });

  usersRef.update(
    { 
    "1565685471_my0nd7/token": "updtae some one token"
  });

  // Import Admin SDK
var admin = require("firebase-admin");

// Get a database reference to our posts
var db = admin.database();
var ref = db.ref("server/saving-data/fireblog/posts");

