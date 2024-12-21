var mongoose=require('mongoose');
var dbURI="mongodb+srv://mehtapxkrkmz6:1234SDUsdu@cluster0.nrgcr.mongodb.net/mekanbul?retryWrites=true&w=majority&appName=Cluster0";

//var dbURI="mongodb://localhost/mekanbul";
mongoose.connect(dbURI);

mongoose.connection.on("connected",function(){
    console.log(dbURI+" adresindeki veritabanına bağlandı.");
});

mongoose.connection.on("disconnected",function(){
    console.log("bağlantı koptu");
});

process.on("SIGINT",function(){
    mongoose.connection.close();
    console.log("Bağlantı kesildi.");
    process.exit(0);
});

require("./venue");