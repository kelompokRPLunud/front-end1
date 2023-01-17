import React from "react";
import { useState ,useRef,useEffect} from "react";
import { ChromePicker } from "react-color";
import style from "./AddInput.module.css";

function AddInput(props){
    const [colorrgb,setcolorrgb]=useState({});
    const values = props.value(props.id);
    const [PopState,SetPopState]=useState(false);
    const canvas =useRef(null);
    const ctx = useRef(null);
    useEffect(()=>{
        const colour =values.colour
        ctx.current = canvas.current.getContext('2d');
        ctx.current.fillStyle="rgb("+colour+")";
        ctx.current.fillRect(0,0,10,10);
    },[values])
    function onChangeInputfont(e){
        const newvalues = {...values,font:e.target.value};
        props.onChange(props.id,newvalues);
    }
    function onChangeInputsize(e){
        const newvalues = {...values,size:e.target.value};
        props.onChange(props.id,newvalues);
    }
    function onChangeInputcolour(color,e){
        setcolorrgb(color)
        const colour=color.rgb.r+","+color.rgb.g+","+color.rgb.b;
        ctx.current.fillStyle="rgb("+colour+")";
        ctx.current.fillRect(0,0,10,10);
        const newvalues = {...values,colour:colour};
        props.onChange(props.id,newvalues);
    }
    function onClickPopButton(e){
        SetPopState(!PopState);
    }
    function onCloseHandeler(e){
        props.onClose(props.id);
    }
    return (<form className={style.formstyle}>
        <div className={style.topdiv}>{"Data "+(props.id+1)}<span onClick={onCloseHandeler}>X</span></div>
        <div className={style.divformsytle}>
        <label htmlFor={"font"}>Font</label>
        <input id={"font"} value={values.font} onChange={onChangeInputfont} className={style.divinput}></input>
        </div>
        <div className={style.divformsytle}>
        <label htmlFor={"size"}>Size</label>
        <input id={"size"} value={values.size} onChange={onChangeInputsize} className={style.divinput} ></input>
        </div>
        <div className={style.divformsytle}>
        <label htmlFor={"colour"}>Colour</label>
        <span id={"colour"}>
        <canvas width={10} height={10} style={{border:"1px solid black"}} ref={canvas}></canvas>
        <span id={props.id+"colour"} onClick={onClickPopButton}>{values.colour}</span>
        </span>
        </div>
        {PopState && 
        <div className={style.popColour}><span onClick={onClickPopButton}>X</span>
            <ChromePicker color={colorrgb} onChange={onChangeInputcolour}></ChromePicker>
        </div>
        }
    </form>)
}
export default AddInput;