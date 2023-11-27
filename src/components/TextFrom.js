import React, { useState } from 'react'

export default function TextFrom(props) {

  const handaleClick = () => {
    // console.log("UpperCase was clicked: " + text); // This console make for chake code run or not
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success")
  }

  // This is for make latter to Lower Case
  const handaleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!","success")
  }

  // This is for clear all data
  const handaleClearClick = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("Clear all data","success")
  }

  // This function for remove extra spaces
  const handaleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove all extra spaces!","success")
  }

  // This function to copy text 
  const handaleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to Clipboard!","success")
  }



  const handalOnChange = (event) => {
    // console.log(" On Change "); // This console make for chake code run or not
    setText(event.target.value)
    props.showAlert("Extra spaces removed!","success")
  }

  const [text, setText] = useState('');
  //  Text = "I am setText"; // Wrong way to change the state
  //  setText("I am setText") // Correct way to change the state
  return (
    <>
      <div className="container m-2" style={{color: props.mode===`dark`?`white`:`black`}}>
        <h1>{props.heading}</h1>
        <h2 className='header m-3'>This is Your Text :-</h2>
        <h5 className='header m-3'> {text}</h5>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handalOnChange} style={{backgroundColor: props.mode===`light`?`white`:`gray`, color: props.mode===`dark`?`white`:`black`}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handaleClick}>Convert to Upercase</button>
        <button className="btn btn-primary m-2" onClick={handaleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary m-2" onClick={handaleClearClick}>Clear All</button>

        <button className="btn btn-primary m-2" onClick={handaleExtraSpaces}>Remove Extra spaces</button>
        <button className="btn btn-primary m-2" onClick={handaleCopy}> Copy Text </button>
      </div>

      <div className="container m-2" style={{color: props.mode===`dark`?`white`:`black`}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length}characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  )
}

     