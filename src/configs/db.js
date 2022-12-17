const mongoose=require("mongoose");

const connect=()=>{return mongoose.connect(
  "mongodb+srv://Rutu:RutujaAtlas@cluster0.4soie.mongodb.net/Recover?retryWrites=true&w=majority"
  // mongodb+srv://Rutu:RutujaAtlas@cluster0.4soie.mongodb.net/bigBasket?retryWrites=true&w=majority
  // "mongodb+srv://rutuja:Rutuja_3562@cluster0.orwkt.mongodb.net/test"
//  "mongodb://localhost:27017/register-api"
//  "mongodb://127.0.0.1:27017/data"
);
};


module.exports=connect;
