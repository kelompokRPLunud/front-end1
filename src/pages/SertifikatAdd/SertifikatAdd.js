import {useRef, useState,useEffect } from "react";
import AddInput from "../../components/addinputcomp/AddInput";
import Coordinatespoint from "../../components/coordinates/Coordinatespoint";
import style from "./SertifikatAdd.module.css";
import {AiOutlinePlusSquare} from "react-icons/ai";

function SertifikatAdd(props){
    const canvasRef = useRef(null);
    const context = useRef(null);
    const fileinput = useRef(null);
    const idCounter = useRef(0);
    const [inputArr,setInputArr]=useState([]);
    const [addFlag,setAddFlag]=useState(false);
    useEffect(()=>{
        const canvas = canvasRef.current;
        context.current = canvas.getContext('2d');
        // context.current.fillRect(0, 0, context.current.canvas.width, context.current.canvas.height);
    },[])
    useEffect(()=>{},[])
    const onChangefile= e=>{
        const reader = new FileReader();
        reader.onload = event =>{

            let imagenya = new Image();
            imagenya.onload=()=>{
                context.current.drawImage(imagenya,0,0,700,500);
            }
            imagenya.src= event.target.result;
        }
        reader.readAsDataURL(e.target.files[0])
        
    }
    function tambahtombolinput(e){
        setAddFlag(true);
    }
    function tambhakordinatcanvas(e){
        if (addFlag){
            const canvas= canvasRef.current;
            const rect = canvas.getBoundingClientRect();
            const sizeX=rect.right-rect.left;
            const sizeY=rect.bottom-rect.top;
            const kordinatsertif={
                X:Math.round(100*(e.clientX-rect.left)/sizeX),
                Y:Math.round(100*(e.clientY-rect.top)/sizeY),
            };
            setInputArr([...inputArr, { ...kordinatsertif, id: idCounter.current,font:"arial",size:"14",colour:"255,255,255" }]);
            idCounter.current+=1;
            setAddFlag(false);
        }
    }
    function onChangeInputHandeler(index,values){
        const temparray=inputArr.map((val,indexarr)=>{
            if(index===indexarr){
                return values;
            }else{
                return val;
            }
        });
        setInputArr(temparray);
    }
    function onCloseInputHandeler(id){
        const targetrm=id
        const temparray=[...inputArr.slice(0,targetrm),...inputArr.slice(targetrm+1,inputArr.length+1)]
        setInputArr(temparray);
    }
    function getStateInputHandeler(index){
        return inputArr[index];
    }
    async function onSumbit(e){
        let fontdata = inputArr.map((val,idx)=>{
            return val.font;
        })
        let sizedata = inputArr.map((val,idx)=>{
            return val.size;
        })
        let colourdata = inputArr.map((val,idx)=>{
            return val.colour;
        })
        let positiondata=inputArr.map((val)=>{
            return val.X + ","+val.Y;
        })
        let fileCsv = document.getElementById('csv');
        let fileImage = document.getElementById('image');

        let formData = new FormData();
        formData.append("font",fontdata.join("|"));
        formData.append("size",sizedata.join("|"));
        formData.append("position",positiondata.join("|"));
        formData.append("color",colourdata.join("|"));

        formData.append('image', fileImage.files[0]);
        formData.append('datacsv', fileCsv.files[0]);

        await fetch('http://146.190.148.131:8000/sertifikat/', {
        method: 'POST',
        body: formData,
        redirect : 'follow',
        referrerPolicy:'no-referrer',
        })
        .then(r => {
            r.blob().then(
            blob => {
              const fileURL = window.URL.createObjectURL(blob);
              // Setting various property values
              let alink = document.createElement('a');
              alink.href = fileURL;
              let namafiledownload=fileImage.files[0].name.replace(".jpg",".zip");
              alink.download = namafiledownload;
              alink.click();
            }
          )
        })
    }
    return(
        <div className={style.maindiv}>
            <div className={style.container}>
                <div className={style.absolutecenter}>
                <canvas ref={canvasRef} width={700} height={500} onClick={tambhakordinatcanvas}/>
                {inputArr.map((val,indexnya)=>{
                    const canvas= canvasRef.current;
                    const rect = canvas.getBoundingClientRect();
                    const sizeX=rect.right-rect.left;
                    const sizeY=rect.bottom-rect.top;
                    indexnya=indexnya+""
                    return <Coordinatespoint key={indexnya+val.X+val.Y} x={(sizeX*val.X/100)} y={(sizeY*val.Y/100)} size={val.size} colour={val.colour} data={indexnya}></Coordinatespoint>
                })}
                </div>
                <div className={style.form}>
                    {!addFlag ? 
                    <div>
                        <div className={style.formtop}>
                            <label className={style.kordinatlabel}>Tambah kordinat</label>
                            <AiOutlinePlusSquare onClick={tambahtombolinput} className={style.addbutton}></AiOutlinePlusSquare>
                        </div>
                        <div className={style.forminput}>
                            {inputArr.map((val,indx)=>{
                                return <AddInput id={indx} key={indx} onChange={onChangeInputHandeler} value={getStateInputHandeler} onClose={onCloseInputHandeler}></AddInput>
                            })}
                        </div>
                    </div>
                    :<div className={style.pilihlabel}><span>pilih kordinat pada gambar sertifikat</span></div>}
                    <div className={style.formbottom}>
                        <form encType="multipart/form" className={style.formfile}>
                            <div className={style.divfile}>
                            <label htmlFor="image">Gambar</label>
                            <input type="file" placeholder="pilih gambar" accept="image/jpeg, image/png, image/jpg" id='image' onChange={onChangefile} rel={fileinput} className={style.divbtnupld}>
                            </input>
                            </div>
                            <div className={style.divfile}>
                            <label htmlFor="csv">File csv</label>
                            <input type="file" placeholder="pilih csv" accept=".csv" id='csv' onChange={onChangefile} rel={fileinput} className={style.divbtnupld}>
                            </input>
                            </div>
                        </form>
                        <button type="submit" onClick={onSumbit} className={style.sumbitbutton}>Generate</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
// function SertifikatAdd() {
//     const fileInput = useRef(null);
//     const canvas = useRef(null);
//     const ctx = useRef(null);
  
//     useEffect(() => {
//       ctx.current = canvas.current.getContext('2d');
//     }, []);
  
//     const handleImageChange = e => {
//       const file = e.target.files[0];
//       const reader = new FileReader();
//       reader.onload = event => {
//         const img = new Image();
//         img.onload = () => {
//           ctx.current.drawImage(img, 0, 0);
//         };
//         img.src = event.target.result;
//       };
//       reader.readAsDataURL(file);
//     };
  
//     return (
//       <form>
//         <input type="file" ref={fileInput} onChange={handleImageChange} />
//         <canvas ref={canvas} />
//       </form>
//     );
//   }
export default SertifikatAdd;