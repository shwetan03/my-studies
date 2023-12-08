const {MongoClient, ObjectId} = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'myStudiesDB';

function delete_task() {
    function remove(id){
    return new Promise(async (resolve, reject) => {
      const client = new MongoClient(url);
      try {
        await client.connect();
        const db = client.db(dbName);
        const removed = await db.collection('student_tasks').deleteOne({_id: id});
        resolve(removed.deletedCount === 1);
        client.close();
      } catch (error) {
        reject(error);
      }
    });
  }
  return {remove};
}

module.exports = delete_task();
