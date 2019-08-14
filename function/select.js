var connect_db = require('../setting/connect.js');
var ref = connect_db.getConnect();
var data = "";

function allData(callback) {
    ref.once("value", function (snapshot) {
        data = snapshot.val();
        console.log("Debug On Data");
        console.log(snapshot.val());
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
        data = errorObject.code;
    });
    return callback(data);
}

// function oneData() {
//     var userId = firebase.auth().currentUser.uid;
//     return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
//       var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
//     });

//     return data;
// }

module.exports.allData = allData;