import { useState,useEffect } from "react";

function Timer({start,end})
{



    let [second, secondsetter] = useState(start);
    let [finish, finishsetter] = useState(end);

                useEffect(()=>{const id=  setInterval(()=>{ console.log(second); secondsetter((prevalue)=>{
                     
                       if(prevalue>=finish)
                       {

                        clearInterval(id)
                           return finish

                           
                       }
                    
                    return prevalue+1;})},500)
                          

                      // return ()=>{
                      //   clearInterval(id)
                      // }

                    
                },[])



      


    return (<div>{second}</div>)

}

export default Timer