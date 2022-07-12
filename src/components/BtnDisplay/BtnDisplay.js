import React from "react";
import startIcon from '../../assets/circle-play-solid.svg'
import stopicon from '../../assets/circle-stop-solid.svg'
import resetIcon from '../../assets/arrow-rotate-left-solid.svg'
import startRed from '../../assets/start.png'
import stopRed from '../../assets/stop.png'
import resetRed from '../../assets/reset.png'
import './BtnDisplay.css'


const BtnDisplay = ({start,stop, reset, status})=>{
    return(
        <div className="contenedor-display-btn" >
        <div>
        <button onClick={start}>
                <img src={status ==='start' ? startRed :  startIcon} className='contenedor-img-btn' />
            </button>
            <button onClick={stop}>
            <img  src={status === 'stop' ? stopRed : stopicon} className='contenedor-img-btn' />

            </button>
            <button onClick={reset}>
            <img src={status ==='reset' ? resetRed :  resetIcon} className='contenedor-img-btn' />

            </button>

        </div>
            


        </div>
    )

}

export default BtnDisplay;
