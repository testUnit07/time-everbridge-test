
import React from "react";
import { useEffect, useRef, useState } from "react";
import BtnDisplay from "./components/BtnDisplay/BtnDisplay";
import DisplayTimer from "./components/DisplayTimer/DisplayTimer";
import './App.css'

const App = ()=>{
  const intervalRef = useRef(null);
  const [time,setTime] = useState({minutos:0,segundos:0});
  const [interv,setInterv] = useState('');
  const [status,setStatus] = useState('');



  const start = ()=>{
    if(time.minutos === 0 && time.segundos ===0){
      window.alert('Ingresa una valor')
    }
    if(time.minutos > 59 || time.segundos > 59){
      window.alert('Ingresa un valor menor o igual a 59')


    }

    if(time.minutos > 0 || time.segundos >0){
      setStatus('start')
    run()
    setInterv(
        setInterval(run,1000)
        )
    
   

    }
  }
  console.log('Interv', interv)

  var updatedMinutos = time.minutos;
  var updatedSegundos = time.segundos;

  const run = ()=>{
    if(updatedSegundos === 0){
      updatedMinutos--
      updatedSegundos = 60

    }

   

    if(updatedMinutos === 0 && updatedSegundos ===0){
      console.log('deberia estar en zero')
      return clearInterval(interv)

    }

    updatedSegundos--
    
    return setTime({minutos:updatedMinutos,segundos:updatedSegundos})
  }
 
 

  const getMinutos = (p, key)=>{
    if(p>59){
      window.alert('Ingresa un valor menor o igual a 59')
    }
    setTime({minutos:'',segundos:time.segundos})
    setTime({minutos:p,segundos:time.segundos})
    

  }
  const getSegundos = (p,key)=>{
    if(p>59){
      window.alert('Ingresa un valor menor o igual a 59')
    }
    setTime({minutos:time.minutos, segundos:''})
    setTime({minutos:time.minutos,segundos:p})

  
    
  }
  const stop = ()=>{
    setStatus('stop')
    clearInterval(interv)
  }
  const reset = ()=>{
    setStatus('reset')
    setTime({minutos:0,segundos:0})
  }   

  console.log(time.segundos)
  
  return (
   <div className="contendor-app" >
    <div className="suncontenedor-app" >
    <div>
      <div className="contenedor-img">
        <img src="https://www.everbridge.com/wp-content/uploads/Everbridge-Logo-2019-FullColor-RGB.svg" />
      </div>
    <div>
      <DisplayTimer time={time} getMinutos={getMinutos} getSegundos={getSegundos}   />
      <BtnDisplay status={status} start={start} stop={stop} reset={reset} /> 

      </div>
    </div>     
    </div>
   </div>

  )
}

export default App;