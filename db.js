const mongoose = require("mongoose");

const connect = () => {
  mongoose.connect(
    "mongodb+srv://bijit63:bijitsinha630@bijit.ldc8xto.mongodb.net/ShopProject?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true}
  );
};
// const connect =()=>{mongoose.connect("mongodb://0.0.0.0:27017/demoprojectdatabase")}
module.exports = connect;
