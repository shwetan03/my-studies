const mongoose = require('mongoose');

const options = { discriminatorKey: 'kind' };
const taskSchema = mongoose.Schema({
     task_name: { type: String, required: true }, 
     task_length: { type: String, required: true }
});


/* Inheritance */

const Task = mongoose.model('Task', taskSchema);

/* Changed discriminator key and task_type */

const academicTask = Task.discriminator('academicTask',
  new mongoose.Schema({task_type: {type: String}}));
  
const entertainmentTask = Task.discriminator('entertainmentTask',
  new mongoose.Schema({task_type: {type: String}}));

module.exports = academicTask, entertainmentTask;