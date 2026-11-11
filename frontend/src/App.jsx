import React from "react";
import InputForm from "./components/InputForm";
import StopWatch from "./components/StopWatch";
import ApiCall from "./components/ApiCall";

function App(){
  return (
        <div style={{padding:"30px"}}>
          <h1>React and NodeJS Practical Example</h1>
          <hr/>
          <InputForm/>
          <br/><br/><br/>
          <StopWatch/>
          <br/><br/><br/>
          <ApiCall/>
          <br/><br/><br/>
        </div>
    );
}
export default App;