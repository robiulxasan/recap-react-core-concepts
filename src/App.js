import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [users,setUser]= useState([]);
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data=> setUser(data))

   },[]);
  return (
    <div className="App">
      <header className="App-header">

        <h2>I am a React developer</h2>
        <UserCounter></UserCounter>
        {
          users.map(user=><Users name={user.name} key={user.id} email={user.email}></Users>)
        }
        
      </header>
    </div>
  );
}

function Users(props) {
  const userStyle = {
    border: "2px solid purple",
    borderRadius: "10px",
    width: '600px',
    padding: "10px",
    margin: "10px",
  };
  return (
    <div style={userStyle}>
      <h2>Name: {props.name} </h2>
      <p style={{color:'yellow'}}>email: {props.email} </p>
    </div>
  );
}

function UserCounter(){
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Total User: {count} </h3>
      <button onClick={()=>setCount(count + 1)}>Add User</button>
      <button onClick={()=>setCount(count - 1)}>Remove User</button>
    </div>
  )
}

export default App;
