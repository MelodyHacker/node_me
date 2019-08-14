var connect_db = require("../setting/connect");


const addMember = async function(name, token, type_token, data_setting) {
  try {
    var status = "empty case";
    console.log("Come Add Member");
    var ref = await connect_db.getConnect();
    var usersRef = ref.child("user_profile");
    
    // unix time and genarat id
    Date.prototype.toUnixTime = function () { return this.getTime() / 1000 | 0 };
    Date.time = function () { return new Date().toUnixTime(); }

    let ran_id = Math.random().toString(36).substring(7);

    //log id and unix time 
    console.log("Char Id " + ran_id)
    console.log("Current Time: " + Date.time())
 
   

    //push data to firebase
    usersRef.child(
      Date.time() + '_' + ran_id).set({
        name: name,
        date_register: Date(),
        token: token,
        type_token: type_token,
        data_setting: data_setting
      });
    status = "success";
  } catch (error) {
    status = "fail";
    console.log('case error', error.code);
  }
  return status;
}
module.exports.addMember = addMember;

