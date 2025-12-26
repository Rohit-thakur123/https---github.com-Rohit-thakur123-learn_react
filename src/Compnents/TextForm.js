import React, { useState } from 'react'

export default function TextForm(props){  
    const handleOnChange=(event)=>{  //change karke par         
        setText(event.target.value);        
    }

    const changeUpper=()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
    }
    //delete text
    const remove=()=>{
        setText("");
    }
   
    
    const preview=(event)=>{ 
        let p=document.querySelector("#pre"); 
        p.innerText="";     
        p.innerText=text;      
        
    }
    //text and set text
    const [text, setText]=useState("enter text")
    return(  
        <>
        <div>
            <h1>{props.heading}</h1>{/* props ke through heading change kar dunga*/}
            <div className="mb-3">
                <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <div className="container my-4">
                <button className="btn btn-primary" onClick={changeUpper}>Convert to upperCase</button>
                <button className="btn btn-danger mx-4" onClick={remove}>delete text</button>
            </div>
        </div>
        <div className="container">
            <h2>your text summary</h2>
            <p>there are only <b>{text.split(" ").length}</b> words and <b>{text.length} character</b> present</p>
        </div>
        <div className="container" id="box2">
            <button className="btn btn-secondary my-4" onClick={preview}>Preview texts</button>
            <p id="pre"></p>
        </div>
        </>      
    )
}