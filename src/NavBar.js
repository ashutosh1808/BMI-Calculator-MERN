import {Link} from "react-router-dom"
function NavBar()
{
return(
<>
<center>
<div className="nav">
<Link to="/">Home</Link>
<Link to="/bmi">Calculate BMI</Link>
<Link to="/ht">Convert height in m</Link>
<Link to="/about">About</Link>
</div>
</center>
</>
)
}
export default NavBar;
