import React from "react";
import './InputTimer.css'

const InputTimer = ({time,getMinutos,secondsOminutes,getSegundos})=>{
    return (
        <div className="contenedor-input">
            <div className="subcontenedor-input">
{
    getMinutos ? 
    <input className="input-costum" 
            
             onChange={(e)=> getMinutos(e.target.value, 'minutos' ) } value={time.minutos > 9 ? `${time.minutos}` : `${time.minutos}` }  />
             :
             <input className="input-costum" 
            
             onChange={(e)=> getSegundos(e.target.value, 'segundos' ) } value={time.minutos > 9 ? `${time.minutos}` : `${time.minutos}` }  />
    
}
            

            </div >
            <div>
                <h3>{secondsOminutes}</h3>
            </div>

                </div>

    )
}

export default InputTimer