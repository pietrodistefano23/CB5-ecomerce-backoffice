import './App.css';
import { useState } from 'react';
import Main from './components/main';
import Navbar from './components/navbar/Navbar';


function App() {
  const [route,setRoute] = useState("home");
  return (
    <div className="App">
      <div className="Content">
      <Navbar setRoute = {setRoute}/>
      <Main route = {route}/>
      </div>
      
    </div>
  );
}

export default App;
