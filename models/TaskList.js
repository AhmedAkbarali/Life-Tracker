const mongoose = require('mongoose');
const { Schema } = mongoose;
const Task = require('./Task');

const taskListSchema = new Schema({
    id: String,
    name: String,
    tasks: [Task]
});

mongoose.model('tasklists', taskListSchema);