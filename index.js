const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient

const DB = 'itemDB'
const DBCollection ='itemCollection'

app.listen(3000)

app.get('/',(req,res) =>{
    res.send('hello express!')
})

// データ全体を取得する
app.get('/api/items',(req,res)=>{
    MongoClient.connect('mongodb://192.168.10.6:27017',(err,db)=>{
        const dbName = db.db(DB)
        dbName.collection(DBCollection).find().toArray(function(error,response){
            res.json(response)
            db.close()
        })
    })
})

// 指定されたidのデータを取得する
app.get('/api/items/:id',(req,res)=>{
    const obj = {"id": Number(request.params.id)}
    MongoClient.connect('mongodb://192.168.10.6:27017',(err,db)=>{
        const dbName = db.db(DB)
        dbName.collection(DBCollection).find(obj).toArray(function(error,response){
            res.send(response)
            db.close()
        })
    })
})