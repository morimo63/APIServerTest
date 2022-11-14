const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient

const DB = 'itemDB'
const DBCollection ='newItem'

app.get('/',(req,res) =>{
    res.send('hello express!')
})


app.get('/api/items',(req,res)=>{
    MongoClient.connect('mongodb://192.168.10.6:27017',(err,db)=>{
        if(err) throw err
        const dbName = db.db(DB)
        dbName.collection(DBCollection).find().toArray(function(err,re){
            console.log(res)
            res.json(re)
            db.close()
        })
    })
})


app.get('/api/items/:id',(req,res)=>{
    const obj = {"id": Number(req.params.id)}

    MongoClient.connect('mongodb://192.168.10.6:27017',(err,db)=>{
        if(err) throw err
        const dbName = db.db(DB)
        dbName.collection(DBCollection).find(obj).toArray(function(err,re){
            res.send(re)
            db.close()
        })
    })
})

app.listen(3000)