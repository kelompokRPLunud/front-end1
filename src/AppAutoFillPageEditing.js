import React, { useState } from "react";
import {useEffect} from 'react';
import './App.css';
import axios from 'axios';

function AppAutoFillPageEditing() {
  const [font, setFont] = useState("");
  const [size, setSize] = useState("");
  const [positionX, setPositionX] = useState("");
  const [positionY, setPositionY] = useState("");
  const [color, setColor] = useState("");

  const [imgSertifName, setImgSertifName] = useState("");
  const [imgSertifFile, setImgSertifFile] = useState("");
  
  const [csvTypeName, setCsvTypeName] = useState("");
  const [csvTypeFile, setCsvTypeFile] = useState("");

  let allFont = null, allSize = null, allPositionXY = null, allColor = null

  function AddMoreText() {
    console.warn(font, size, positionY, color)

    if (font === "" || size === "" || positionX === "" || positionY === "" || color === "") {
        alert('harus isi semua')
        return
    }

    if (allFont !== null) {
      allFont = allFont + "|" + font
      allSize = allSize + "|" + size
      allPositionXY = allPositionXY + "|" + positionX + "," + positionY
      allColor = allColor + "|" + color
    }
    else {
      allFont = font
      allSize = size
      allPositionXY = positionX + "," + positionY
      allColor = color
    }

    console.log(document.getElementsByClassName("textInput")[0])
    document.getElementsByClassName("textInput")[0].innerHTML = `
        font = ${allFont} <br>
        size = ${allSize} <br>
        colour = ${allPositionXY} <br>
        position  = ${allColor} <br>
        <br>
    `
    console.warn(allFont, allSize, allPositionXY, allColor)
  }

  async function Submit() {
    let fileImage = document.getElementById('image');
    setImgSertifName(fileImage.files[0].name)
    setImgSertifFile(fileImage.files[0])
    
    let fileCsv = document.getElementById('csv');
    setCsvTypeName(fileCsv.files[0].name)
    setCsvTypeFile(fileCsv.files[0])
    console.warn(imgSertifName, imgSertifFile, csvTypeName, csvTypeFile)

    let formData = new FormData();
    formData.append('font', allFont);
    formData.append('size', allSize);
    formData.append('position', allPositionXY);
    formData.append('color', allColor);

    formData.append('imgSertifName', imgSertifName);
    formData.append('image', imgSertifFile);
    formData.append('csvTypeName', csvTypeName);
    formData.append('datacsv', csvTypeFile);
    axios.post("api/uploadfile",formData)
    // const config = { headers: { 'content-type': 'multipart/form-data' } }

    let result = await fetch('http://127.0.0.1:8000/sertifikat/', {
      method: 'POST',
      body: formData,
      redirect : 'follow',
      referrerPolicy:'no-referrer',
    })
    .then(r => r.blob().then(
      blob => {
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        let namafiledownload=imgSertifName.replace(".jpg",".zip");
        alink.download = namafiledownload;
        alink.click();
      }
    ))

  }

  return (
    <div className="App">
        <header className="App-header" style={{
          display : 'flex',
        }}>

            <p className="textInput"> 
                
            </p>
          <form encType="multipart/form">
            <input type="file" id="image" placeholder="select image" accept="image/jpeg, image/png, image/jpg" />
            <input type="file" id="csv" placeholder="select csv" accept=".csv" />

            <div className="image-container"/>
            <input 
              type="text" id="textFont1" value={font} placeholder="text font"
              onChange={(e)=>setFont(e.target.value)}
            />        
            <input 
              type="number" id="textSize1" value={size} placeholder="text size"
              onChange={(e)=>setSize(e.target.value)}
            />
            <input 
              type="number" id="text1PositionTop" value={positionX} placeholder="text position"
              onChange={(e)=>setPositionX(e.target.value)}
            />
            <input 
              type="number" id="text1PositionTop" value={positionY} placeholder="text position"
              onChange={(e)=>setPositionY(e.target.value)}
            />
            <input 
              type="text" id="textColor1" value={color} placeholder="text color"
              onChange={(e)=>setColor(e.target.value)}
            />
          </form>

          <button onClick={AddMoreText}>More Text</button>
          <button type="submit" onClick={Submit}>submit</button>
        </header>
    </div>
  );
}

export default AppAutoFillPageEditing;
