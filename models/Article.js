var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//Using the Schema contructor, create a new UserSchema object
//This is similar to a Sequelize model
var ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        trim: true,
    },

    //link is required and of type String 
    link: {
        type: String,
        required: true
    },
    saved: {
        type: String,
        default: false
    },

    createdDate: {
        type: Date,
        default: Date.now
    },
    

    //notre is an object that stores a Note id 
    //The ref property links the objectId with an associated Note
    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }
});

//This create our model from above schema, using mongoose's model method
var Article = mongoose.model("Article",ArticleSchema);

// Export the Article model
module.export = Article;