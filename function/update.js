var connect_db = require('../setting/connect.js');
var ref = connect_db.getConnect();
var usersRef = ref.child("user_profile");


usersRef.update(
    { 
    "1565685471_my0nd7/token": "updtae some one token"
  });
