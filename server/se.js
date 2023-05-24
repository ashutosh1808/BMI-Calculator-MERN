const express=require("express")
const cors=require("cors")
const mysql=require("mysql2")

const app=express()
app.use(cors())
app.use(express.json())

const con=mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"abc456",
	database:"bmi_24may23"
})

app.post("/save",(req,res)=>{
let data=[req.body.id,req.body.name,req.body.age,req.body.phone,req.body.gender,req.body.weight,req.body.height,req.body.bmi]
let sql="insert patient values(?,?,?,?,?,?,?,?)"
con.query(sql,data,(err,result)=>{
	if(err)			res.send(err)
	else			res.send(result)
})
})

app.get("/read",(req,res)=>{
	let sql="select id,name,gender,age,bmi from patient"
	con.query(sql,(err,result)=>{
		if(err)		res.send(err)
		else		res.send(result)
	})
})

app.delete("/rem",(req,res)=>{
	let data=[req.body.id]
	let sql="delete from patient where id=?"
	con.query(sql,data,(err,result)=>{
		if(err)		res.send(err)
		else			res.send(result)
	})
})

app.listen(9000,()=>{console.log("ready to serve @ 9000")})
