const mongoose = require('mongoose');
const { Schema } = mongoose;
const TaskCheckListItem = require('./TaskCheckListItem');

const taskCheckListSchema = new Schema({
    id: String,
    name: String,
    items: [TaskCheckListItem]
});

mongoose.model('taskchecklists', taskCheckListSchema);

