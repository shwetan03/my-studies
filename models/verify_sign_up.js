const express = require("express")
const app = express()
const {MongoClient} = require('mongodb');
const { get } = require("mongoose");
const url = 'mongodb://localhost:27017';
const dbName = 'myStudiesDB';
const studentUser = require('../models/user_model.js'); 
const parentUser = require('../models/user_model.js');

function get_accounts() {
    function get() {
        return new Promise(async (resolve, reject) => {
            const client = new MongoClient(url);
            try {
              await client.connect();
              const db = client.db(dbName);
      
              let items = db.collection('accounts').find({});
              resolve(await items.toArray());
              client.close();
            } catch (error) {
              reject(error);
            }
        });
    }
    return {get};
}

module.exports = get_accounts();
