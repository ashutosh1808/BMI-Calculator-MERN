import axios from "axios"
import {useState,useRef,useEffect} from "react"

function Bmi()
{
const[id,setId]=useState("")
const[name,setName]=useState("")
const[age,setAge]=useState("")
const[phone,setPhone]=useState("")
const[gender,setGender]=useState("male")
const[weight,setWeight]=useState("")
const[height,setHeight]=useState("")
//const[ans,setAns]=useState("")

const rId=useRef()

const hId=(event)=>{setId(event.target.value)}
const hName=(event)=>{setName(event.target.value)}
const hAge=(event)=>{setAge(event.target.value)}
const hPhone=(event)=>{setPhone(event.target.value)}
const hGender=(event)=>{setGender(event.target.value)}
const hWeight=(event)=>{setWeight(event.target.value)}
const hHeight=(event)=>{setHeight(event.target.value)}

const save=(event)=>{
	event.preventDefault();
	if(!name.match(/^[a-zA-Z ]+$/))
	{
		alert("invalid name")
		setName("")
		return
	}
	let w=parseFloat(weight)
	let h=parseFloat(height)
	let bmi=w/(h**2)
	bmi=bmi.toFixed(2)
	let urladd="http://localhost:9000/save"
	axios.post(urladd,{id,name,age,phone,gender,weight,height,bmi})
	.then((res)=>{
		if(res.data.affectedRows==1)
		{
			let r1=""
			if(bmi<18.5)			r1="You are Underweight!"
			else if(bmi<24.9)		r1="You are Normal!"
			else if(bmi<24.9)		r1="You are Overweight!"
			else if(bmi<24.9)		r1="You are Obese!"
			else					r1="You are Extremely Obese!"
			alert(r1)
		}
		else if(res.data.code=="ER_DUP_ENTRY")
		{
			alert("id "+id+" already present")
		}
		//console.log(res)
	})
	.catch(err=>console.log(err))
}

useEffect(()=>{rId.current.focus()},[])

return(
<>
<center>
<h1>Bmi</h1>
</center>
<form onSubmit={save}>
<input type="number" placeholder="what's your token id?" ref={rId} min="1" onChange={hId} required/>
<br/><br/>
<input type="text" placeholder="what's your name?" onChange={hName} required/>
<br/><br/>
<input type="number" placeholder="how old are you?" onChange={hAge} required/>
<br/><br/>
<input type="number" placeholder="enter contact number" max_length="10" onChange={hPhone} required/>
<br/><br/>
<fieldset>
<legend>Select your gender</legend>
<input type="radio" name="s" onChange={hGender} value="male" defaultChecked={true}/>Male
<input type="radio" name="s" onChange={hGender} value="female"/>Female
</fieldset>
<br/>
<input type="number" step="any" onChange={hWeight} min="0" placeholder="enter weight in kg"/>
<br/><br/>
<input type="number" step="any" onChange={hHeight} min="0.01" placeholder="enter height in m"/>
<br/><br/>
<center>
<input type="submit" value="Save"/>
</center>
</form>
</>
)
}
export default Bmi;
