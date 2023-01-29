import React,{ useState } from 'react';

//const [count, setCount] = useState(0);



export default function TextForm(props){
    const handleUpClick = ()=>{
        console.log("uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted To Uppercase!","success")
    }
    const handleLoClick = ()=>{
        console.log("Lowercase was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted To Lowercase!","success")
    }
    const handleClearClick = ()=>{
        console.log("Clear Text " + text);
        let newText = "";
        setText(newText)
        props.showAlert("Cleared Text!","success")
    }
    const handleCopy = () => {
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","success")
    }
    
    
    const handleOnChange = (event)=>{
        console.log("Onchanged");
        setText(event.target.value);
    }

    //delete extra spacies
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces removed","success")
    }
 
    const [text, setText] = useState('');

    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'#465f8d'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className='form-control' value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'gray':'white',color: props.mode==='dark'?'white':'#465f8d'}}  placeholder="Start Typing and copy and paste your document here"  id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className='container' my-3 style={{color: props.mode==='dark'?'white':'#465f8d'}}>
            <h1>your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length}Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something in the textbox above to preview it"}</p>
        </div>

        </>
        
    )
        
}
// const handleUpClick = ()=>{
    //     console.log("Uppercase was clicked");
    //     setText("you have click on handleupclick");
    // }
    
    // const handleOnChange = ()=>{
    //     console.log("onchange");
    // }



    // const [text, setText] = useState('Enter the text here');
    // setText("kdkdkdd");
    // 