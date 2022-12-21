const mongoose=require("mongoose");

const connect=()=>{return mongoose.connect(
  "mongodb+srv://Rutu:RutujaAtlas@cluster0.4soie.mongodb.net/Recover?retryWrites=true&w=majority"
);
};


module.exports=connect;
