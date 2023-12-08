const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'myStudiesDB';
const studentUser = require('./user_model.js')
const parentUser = require('./user_model.js');

function add_account() {
    function add(item) {
        return new Promise(async (resolve, reject) => {
            const client = new MongoClient(url);
            try {
                await client.connect();
                const db = client.db(dbName);
                const addedItem = await db.collection('accounts').insertOne(item);
                resolve(addedItem.ops);
                client.close();
            } catch (error) {
                reject(error);
            }
        });
    }
    return {add}
}

module.exports = add_account();