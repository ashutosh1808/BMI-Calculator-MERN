import logo from './logo.svg';
import './App.css';
import Home from "./Home"
import Bmi from "./Bmi"
import NavBar from "./NavBar"
import Error404 from "./Error404"
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
    <BrowserRouter>
		<NavBar/>
		<Routes>
			<Route path="/" element={<Home/>}/>
			<Route path="/bmi" element={<Bmi/>}/>
			<Route path="*" element={<Error404/>}/>
		</Routes>
	</BrowserRouter>
    </div>
  );
}

export default App;
