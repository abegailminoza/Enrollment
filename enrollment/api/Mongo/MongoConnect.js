const { MongoClient } = require("mongodb")

const conUrl = 'mongodb+srv://abegailminoza:Jabe1224!.@cluster0.shdte8j.mongodb.net/test'; //Insert connection url between quotes

const client = new MongoClient(conUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

client.connect((err) => {
    if(err)
    {
        console.error(err);
        process.exit(-1);
    }
    console.log("Successfully connected to MongoDB");
});

module.exports = client;