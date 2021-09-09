import React ,{useState} from 'react'


export default function TextForm(props) {

    const [text,setText]= useState('');
    var xtemp="";
    const handleUpClick= ()=>{
        
        
        let newtext= text.toUpperCase();
        
        setText(newtext);
        props.showAlert("Converted to Upper Case","success");
    }
    
    const handleLoClick= ()=>{
        
        let newtext= text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to Lower Case","success");
    }
    const handlespaces= ()=>{
        
        let newtext =text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Extra Spaces removed","success");
    }

    
    function myfunction(item,index)
    {
        var temp,temp1,finaltext;
        temp=item.charAt(0);
        temp=temp.toUpperCase();
        temp1=item.slice(1);
        finaltext=temp+temp1+" ";
        
        xtemp +=finaltext;
        
        
    }
    const handleCapClick= ()=>{
        
        let newtext= text.toLowerCase();
        
        var arr =[];
        
        
        arr=newtext.split(" ");
        
        arr.forEach(myfunction);
        
        setText(xtemp);
        props.showAlert("Converted to Capitized Case","success");
    }

    const handleOnChange= (event)=>{
        
        setText(event.target.value);
    }
    const handleClClick= ()=>{
        
        let newtext= "";
        setText(newtext);
        props.showAlert("Text is Cleared","success");
    }
    
    // setText("Enter updated text");
    return (
        <>
        <div className="container" style={{ color:props.mode === 'dark'? 'white':'black'}} >
            <h1>{props.heading}</h1>

            <div className="mb-1">
                
                <textarea className="form-control textareaindex" id="mybox" style={{backgroundColor:props.mode === 'dark'? 'grey':'white' , color:props.mode === 'dark'? 'white':'black', caretColor:props.mode === 'dark'? 'white':'black' }} value={text} onChange={handleOnChange}  rows="7"></textarea>
            </div>
            <div ></div>
            <button className="btn btn-primary m-1" disabled={text.length === 0} onClick={handleUpClick}> Convert to Upper Case</button>
            <button className="btn btn-primary m-1" disabled={text.length === 0} onClick={handleLoClick}> Convert to Lower Case</button>
            <button className="btn btn-primary m-1" disabled={text.length === 0} onClick={handleCapClick}> Capitilized Case</button>
            <button className="btn btn-primary m-1" disabled={text.length === 0} onClick={handleClClick}> Clear Text</button>
            <button className="btn btn-primary m-1" disabled={text.length === 0} onClick={handlespaces}> Remove Extra Spaces</button>
            
        </div>
        <div className="container my-1" style={{ color:props.mode === 'dark'? 'white':'black'}}>
        <h1> Your text Summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{ return element.length !== 0}).length} words and {text.length} characters </p>
        <p> {(0.008) * text.split(" ").filter((element)=>{ return element.length !== 0}).length }  minutes to read the text</p>
        <h2> Preview</h2>
        <p>{text.length>0?text:'Nothing to Preview'}</p>
        </div>
        </>
    )
}
