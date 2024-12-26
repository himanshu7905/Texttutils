import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        console.log("Lowercase was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleclearClick = () => {
        console.log("Clear text was clicked: " + text);
        let newText = '';
        setText(newText);
    }

    const handleCapitalizeClick = () => {
        console.log("Capitalize was clicked: " + text);
        let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        setText(newText);
    };

    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }

    const handleCopyClick = () => {
        // Select the text area content
       var text = document.getElementById("myBox");
       text.select();
       navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className='container' style={{color: props.mode==='dark'?`white`:`black`}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?`grey`:`white`,color: props.mode==='dark'?`white`:`black` }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleclearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleCapitalizeClick}>Capitalize First Letter</button>
                <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?`white`:`black`}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the text box above to preview here"}</p>
            </div>
        </>
    );
}
