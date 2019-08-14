var insert = require("./function/insert");



var name = "MelodyHacker";
var data_setting = "asdanonavadnaosnonasvlk:sa,ampaspck";
var type_token = "face";
var token = Math.random().toString(36);

const addMember = async function () {
    const result = await insert.addMember(name, token, type_token, data_setting);
    console.log(result);
}

addMember();