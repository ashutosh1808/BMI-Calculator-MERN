import axios from "axios"
import {useEffect,useState} from "react"
function Home()
{
const[info,setInfo]=useState([])

useEffect(()=>{
	let urladd="http://localhost:9000/read"
	axios.get(urladd)
	.then(res=>{
		setInfo(res.data)
		console.log(info)
	})
	.catch(err=>console.log(err))
},[])

const delPatient=(id)=>{
	let urladd="http://localhost:9000/rem"
	let data={data:{id}}
	axios.delete(urladd,data)
	.then(res=>{
		if(res.data.affectedRows)
		{
			alert("Patient "+id+" deleted")
			window.location.reload()
		}
	})
	.catch(err=>console.log(err))
}

return(
<>
<center>
<h1>Home</h1>
<table border="5" style={{width:'70%'}}>
<tr>
	<th>ID</th>
	<th>Name</th>
	<th>Gender</th>
	<th>Age</th>
	<th>BMI</th>
	<th>Delete</th>
</tr>
	{
		info.map((e)=>(
			<tr>	
				<td>{e.id}</td>
				<td>{e.name}</td>
				<td>{e.gender}</td>
				<td>{e.age}</td>
				<td>{e.bmi}</td>
				<td><button onClick={()=>{if(window.confirm("are you sure???"))delPatient(e.id)}}>Delete</button></td>
			</tr>
		))
	}
</table>
</center>
</>
)
}
export default Home;