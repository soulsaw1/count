import React, { useEffect, useState } from "react"
import pic from "./fav.jpg"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap"


function App() {
  const [conut, setConut] = useState(0)

  return (
    <div className="container">
      <div className="row">
        <div className="card bg-dark">
          <div class="card bg-dark text-white">
            <img src={pic} class="card-img" alt="..." />
            <div class="card-img-overlay">
              <h2 class="card-title" >دعاء العداد</h2>
              <div className="App">
                  <Button variant="success" className="btn" onClick={()=>setConut((prevConut)=>prevConut +1)}>+</Button>
                  <h1>{conut}</h1>
                  <Button variant="danger" className="btn" onClick={()=>setConut((prevConut)=>prevConut -1)}>-</Button> 
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
   
  );
}

export default App;

// {/* <div className="App">
//      <h1>Count</h1>
//      <Button variant="success" onClick={()=>setConut((prevConut)=>prevConut +1)}>+</Button>
//      <h1>{conut}</h1>
//      <Button variant="danger"  onClick={()=>setConut((prevConut)=>prevConut -1)}>-</Button> */}