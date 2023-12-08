const express = require("express")
const app = express()
const {MongoClient, ObjectId} = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'myStudiesDB';

function find_account() {
    function find_by_email(email) {
        return new Promise(async (resolve, reject) => {
          const client = new MongoClient(url);
          try {
            await client.connect();
            const db = client.db(dbName);
    
            let item = db.collection('accounts').findOne({email: email});
            resolve(await item);
            client.close();
          } catch (error) {
            reject(error);
          }
        });
      }

      function find_by_id(id) {
        return new Promise(async (resolve, reject) => {
          const client = new MongoClient(url);
          try {
            await client.connect();
            const db = client.db(dbName);
    
            let item = db.collection('accounts').findOne({_id: ObjectId(id)});
            resolve(await item);
            client.close();
          } catch (error) {
            reject(error);
          }
        });
      }

    return {find_by_email, find_by_id};
}



module.exports = find_account();