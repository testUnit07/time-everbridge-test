import React from "react";
import './DisplayTimer.css';
import '../../UI/InputTimer'

const DisplayTimer = ({time,getMinutos, getSegundos})=>{


    return(
        <div >
            <div style={{display:"flex"}}>
                <div style={{display:"flex",border:'1px solid grey', height:'50px', width:'90px'}}>
                <div style={{width:'50px', height:'50px', display:'flex'}}>
            <input style={{fontSize:'40px', width:'50px', border:'none', outline:'none'}} onChange={(e)=> getMinutos(e.target.value, 'minutos')} value={time.minutos > 9 ? `${time.minutos}` : `${time.minutos}` }   />

            </div >
            <div>
                <h3>min</h3>
            </div>

                </div>
                <div style={{display:"flex", justifyContent:"center", alignItems:"center",  height:'50px', width:'20px'}}>
                    <h2>:</h2>
                </div>

                <div style={{display:"flex",border:'1px solid grey', height:'50px', width:'90px'}}>
                <div style={{width:'50px', height:'50px', display:'flex'}}>
            <input style={{fontSize:'40px', width:'50px', border:'none', outline:'none'}}  onChange={(e)=>getSegundos(e.target.value,'segundos')} value={time.segundos > 9 ? `${time.segundos}` : `${time.segundos}` }  />

            </div>
            <div>
                <h3>s</h3>
            </div>

                </div>

            
            

            </div>

        </div>

    )
}

export default DisplayTimer