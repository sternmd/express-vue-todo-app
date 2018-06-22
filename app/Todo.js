var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for a todo item

var todo = new Schema({
    name: {
        type: String
    },
    done: {
        type: Boolean
    }
},
    {
    collection: 'todos'    
    }
)

module.exports = mongoose.model('Todo', todo)