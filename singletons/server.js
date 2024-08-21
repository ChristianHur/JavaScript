/*
MIT License

Copyright (c) 2024 Christian Hur

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

// Non-singleton Class
const {MongoClient} = require('mongodb');

class DBConnection {
    constructor(){
        this.client = null;
    }

    async connect(){
        const uri = 'mongodb://127.0.0.1:27017';
        this.client = new MongoClient(uri);
        await this.client.connect();
        console.log('Created new MongoDB connection');
        return this.client;
    }

    getDb(dbName){
        if(!this.client){
            throw new Error('MongoDB client is not initialzed.');
        }
        return this.client.db(dbName);
    }

    close(){
        if(this.client){
            this.client.close();
            this.client = null;
            console.log('MongoDB connection closed.');
            
        }
    }
}

// Usage
(async ()=>{
    const instance1 = new DBConnection();
    const client1 = await instance1.connect();

    const db1 = instance1.getDb('test');
    const coll1 = db1.collection('users');

    // operations
    const result1 = await coll1.find({}).toArray();
    console.log('Documents from instance1:',result1);

    const instance2 = new DBConnection();
    const client2 = await instance2.connect();

    const db2 = instance2.getDb('test');
    const coll2 = db2.collection('users');

    // operations
    const result2 = await coll2.find({}).toArray();
    console.log('Documents from instance2:',result2);

    console.log('Are client1 == client2?', client1 == client2);
    
    instance1.close();
    instance2.close();
    
})();