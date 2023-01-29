import React from "react";
import style from "./Coordinatespoint.module.css";

function Coordinatespoint (props){
    
    return (<div style={{position: 'absolute',left:props.x,top:props.y,zIndex:"3",fontSize:props.size,color:"rgb("+props.colour+")"}}className={style.coordinates}>
        <span>
        {"Data:"+props.data}
        </span>
    </div>)
}
export default Coordinatespoint;