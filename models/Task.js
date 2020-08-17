const mongoose = require('mongoose');
const { Schema } = mongoose;
const TaskCheckList = require('./TaskCheckList');

const taskSchema = new Schema({
    id: String,
    checklists: [TaskCheckList],
    dueDate: Date,
    complete: Boolean
});

mongoose.model('tasks', taskSchema);

