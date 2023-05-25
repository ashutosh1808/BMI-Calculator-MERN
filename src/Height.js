import {useState,useRef,useEffect} from "react"

function Height()
{
const[ft,setFt]=useState("")
const[inch,setInch]=useState("")

const hFt=(event)=>{setFt(event.target.value)}
const hInch=(event)=>{setInch(event.target.value)}

const convert=(event)=>{
	event.preventDefault()
	let f=parseFloat(ft)
	let i=parseFloat(inch)
	let m=f*0.3048+i*0.0254
	m=m.toFixed(2)
	alert(m)
}
return(
<>
<center>
<h1>Height Converter</h1>
<form onSubmit={convert}>
<input type="number" placeholder="enter height (in ft)" onChange={hFt} min="1" required/>
<br/><br/>
<input type="number" placeholder="enter height (in in)" onChange={hInch} min="0" max="11" required/>
<br/><br/>
<input type="submit" value="Convert into m"/>
</form>
</center>
</>
)
}
export default Height