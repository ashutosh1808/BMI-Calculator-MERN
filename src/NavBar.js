import {Link} from "react-router-dom"
function NavBar()
{
return(
<>
<center>
<div className="nav">
<Link to="/">Home</Link>
<Link to="/bmi">Calculate BMI</Link>
</div>
</center>
</>
)
}
export default NavBar;