import { useState,useEffect } from "react";
function Inputtimer({triggerchange,trigger,starttime,startchagne,endtime,endchange})
{
    
 
  
    function timesetter(event)
    {
        if(event.name==="start")
        {
        
          startchagne(event.value)
          
          
        }
  
        if(event.name==="end")
        {
        
          endchange(event.value)
          
          
        }
  
    }
     
    function startimer(starttime,endtime)
    {
      
      triggerchange( !trigger)
     
      
    }
    useEffect(()=>{
        
      startchagne(starttime)
      endchange(endtime)
  
     },[starttime,endtime])
  


    return (<div>      <input type="number"  name='start' placeholder='Enter start time' onChange={(e)=>{timesetter(e.target)}} />
    <input type="number"  name='end' placeholder='Enter end time' onChange={(e)=>{timesetter(e.target)}} />    

     <button onClick={()=>{ startimer(starttime,endtime)}}>Timer</button></div>)
}

export default Inputtimer