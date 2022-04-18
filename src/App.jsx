import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

import Timer from './components/timer';

import Inputtimer from "./components/inputtimer"

function App() {


  let [starttime, startchagne] = useState(0);
  let [endtime, endchange] = useState(0);
  

  let [trigger,triggerchange]= useState(false);
  let [show,showsetter]= useState(true);

  function showtoggle(){

    showsetter(!show); 

    

  }

 
 


  return (
    <div className="App">
           
                             
                                 <div>    
                            <Inputtimer endchange={endchange} endtime={endtime} startchagne={startchagne}  trigger={trigger}  triggerchange={triggerchange}  starttime={starttime}/>


                            
                            <div> {show?  <   div>{ trigger? <Timer start={+starttime} end={+endtime} /> :"0"}</div>:"" }  </div>
                            <div>{show? <button onClick={()=>{showtoggle()}} >Show</button>:<button onClick={()=>{showtoggle()}}>Hide</button>}</div>





</div> 
                          
         
    </div>
  );
}

export default App;


