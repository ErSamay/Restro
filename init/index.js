const mongoose = require("mongoose");
const initdata = require("./data.js");
const Item = require("../models/listing.js");
const { init } = require("../models/listing.js");

main().then((res) => {
    console.log("db is working")
}).catch((err) => {
    console.log(err)
})

async function main(){
   await mongoose.connect('mongodb://127.0.0.1:27017/majorproject');
}

const initDB = async () => {
    await Item.deleteMany({});
    initdata.data =  initdata.data.map((obj) => ({...obj , owner :"653cdb98be9060da4d54f609"}) )
    await Item.insertMany(initdata.data);
    console.log("This is hard work")

}
initDB();