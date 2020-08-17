const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskCheckListItemSchema = new Schema({
    id: String,
    name: String
});

mongoose.model('taskchecklistitems', taskCheckListItemSchema);