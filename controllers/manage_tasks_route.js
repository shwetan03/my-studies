const express = require('express');
const router = express.Router();
var fs = require('fs');
const { body,validationResult } = require('express-validator');
const display_tasks = require('../models/display_tasks.js');

const delete_task = require('../models/delete_task');


/* Added task_queue */
router.get('/', function(req, res) {
  display_tasks.get()
  .then(task_list => {
    var task_queue = display_tasks.get_tasks(task_list);
    res.render('../views/manage_tasks.ejs', {
      task_list: task_queue.elements,
      task_queue: task_queue
    });
  });
});

router.post('/', function (req, res) {
  display_tasks.get()
  .then(task_list => {
  var task_queue = display_tasks.get_tasks(task_list);
  completedID = task_queue.front()._id;
  delete_task.remove(completedID);
  return res.redirect('/manage_tasks');
});
  
});

module.exports = router;