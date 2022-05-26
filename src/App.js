import React,{useState} from "react"
import './App.css';
import Timer from "./components/Timer";
import Todo from './components/Todo';

function App() {

const [toggle,setToggle]=useState(false)

  
  return (
    <div className="App" >
      App / Timer 
      <br/>
      <button onClick={()=>setToggle(!toggle)}>Click me to change</button>
      {toggle?<Todo/>:<Timer/>}

    </div>
  );
}

export default App;
