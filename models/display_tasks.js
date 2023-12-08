const express = require("express")
const app = express()
const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'myStudiesDB';
const Queue = require('./queue');

function display_tasks() {
    function get() {
        return new Promise(async (resolve, reject) => {
          const client = new MongoClient(url);
          try {
            await client.connect();
            const db = client.db(dbName);
    
            let items = db.collection('student_tasks').find({});
            resolve(await items.toArray());
            client.close();
          } catch (error) {
            reject(error);
          }
        });
      }

    function get_tasks(task_list) {
        var task_queue = new Queue();
        for (var i = 0; i < task_list.length; i++) {
            task_queue.enqueue(task_list[i]);
        }
        return task_queue;        
    }

    function update(id, newItem) {
      return new Promise(async (resolve, reject) => {
        const client = new MongoClient(url);
        try {
          await client.connect();
          const db = client.db(dbName);
          const updatedItem = await db.collection('tasks')
            .findOneAndReplace({_id: ObjectID(id)}, newItem, {returnOriginal:false});
          resolve(updatedItem.value);
          client.close();
        } catch (error) {
          reject(error);
        }
      });
    }
    return {get, get_tasks};
}



module.exports = display_tasks();


