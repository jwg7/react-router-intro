import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import "./App.css";


const App = () => {
return (
<div className="App-header">
<NavBar/>
<Outlet/>
</div>
);
}

export default App;
