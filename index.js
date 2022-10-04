const express = require("express")
const pool = require("./config/database")
const app =express()

app.use(express.json())
app.use(express.urlencoded({extend : false}))

app.get("/",(req,res)=>{
    res.json("Hello world")
})

app.post("/",(req,res)=>{
    const {name,age}=req.body
    pool((conn)=>{
        conn.query("INSERT INTO tbl_user(name,age) values(?, ?)",[name,age],(err,doc)=>{
            if(err) console.log(err)
            res.json(true)
        })
        conn.release()
    })
})

const port = 3030
app.listen(port, ()=>console.log(`SERVER ON PORT :${port}`))

//npm install mysql