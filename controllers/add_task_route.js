const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const add_task = require('../models/add_task.js');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
const academicTask = require('../models/task_model.js');
const entertainmentTask = require('../models/task_model.js');


router.get('/', function(req, res) {
    res.render('../views/add_task.ejs');
});

router.post('/', function (req, res) {

    var task_name = req.body.task_name;
    var task_category = req.body.task_category;
    var task_length = req.body.task_length;

    var new_task;

    if (task_name == "" || task_length == "") {
        return res.redirect('/add_task')
    } else if (isNaN(task_length)) {
        return res.redirect('/add_task');
    }   

    /* Changed entering of schema: includes task_type */

    if (task_category == "academic") {
        new_task = new entertainmentTask({
            task_name: task_name,
            task_length: task_length,
            task_type: task_category,
            ongoing: false
        })
    } else {
        new_task = new academicTask({
            task_name: task_name,
            task_length: task_length,
            task_type: task_category,
            ongoing: false
        })
    }
    
    add_task.add(new_task);
    return res.redirect('/manage_tasks');
});

module.exports = router;