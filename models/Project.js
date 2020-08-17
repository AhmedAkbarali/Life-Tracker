const TaskList = require('./TaskList')
const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
    name: String,
    taskLists: [TaskList],
    _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('projects', projectSchema);









