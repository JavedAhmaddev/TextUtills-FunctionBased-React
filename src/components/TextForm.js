import React, { useState } from 'react'


export default function TextForm(props) {

    const [text, setText] = useState('');
    var xtemp = "";
    const handleUpClick = () => {

        if (text.length > 0) {
            let newtext = text.toUpperCase();
            setText(newtext);
            props.showAlert("Converted to Upper Case", "success");
        }
        else
            props.showAlert("Enter Some Text First", "danger");
    }

    const handleLoClick = () => {

        if (text.length > 0) {
            let newtext = text.toLowerCase();
            setText(newtext);
            props.showAlert("Converted to Lower Case", "success");
        }
        else
            props.showAlert("Enter Some Text First", "danger");

    }
    const handlespaces = () => {

        if (text.length > 0) {
            let newtext = text.split(/[ ]+/);
            setText(newtext.join(" "));
            props.showAlert("Extra Spaces removed", "success");
        }
        else
            props.showAlert("Enter Some Text First", "danger");

    }


    function myfunction(item, index) {
        var temp, temp1, finaltext;
        temp = item.charAt(0);
        temp = temp.toUpperCase();
        temp1 = item.slice(1);
        finaltext = temp + temp1 + " ";
        console.log(finaltext);
        xtemp += finaltext;


    }
    const handleCapClick = () => {

        if (text.length > 0) {
            let newtext = text.toLowerCase();
            console.log(newtext);
            var arr = [];


            arr = newtext.split(" ");
            console.log(arr);
            arr.forEach(myfunction);

            setText(xtemp);
            props.showAlert("Converted to Capitized Case", "success");
        }
        else
            props.showAlert("Enter Some Text First", "danger");

    }

    const handleOnChange = (event) => {

        setText(event.target.value);
    }
    const handleClClick = () => {

        if (text.length > 0) {
            let newtext = "";
            setText(newtext);
            props.showAlert("Text is Cleared", "success");
        }
        else
            props.showAlert("Enter Some Text First", "danger");

    }
    function sp() {
        var a = text.split(" ").length;
        if (a === 1) {
            return 0;
        }
        else {
            return (text.split(" ").length) - 1;
        }
    }
    // setText("Enter updated text");
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
                <h1>{props.heading}</h1>

                <div className="mb-1">

                    <textarea className="form-control textareaindex" id="mybox" style={{ backgroundColor: props.mode === 'dark' ? '#006666' : 'white', color: props.mode === 'dark' ? 'white' : 'black', caretColor: props.mode === 'dark' ? 'white' : 'black' }} value={text} onChange={handleOnChange} rows="7"></textarea>
                </div>
                <div ></div>
                <button className="btn btn-primary m-1" onClick={handleUpClick}> Convert to Upper Case</button>
                <button className="btn btn-primary m-1" onClick={handleLoClick}> Convert to Lower Case</button>
                <button className="btn btn-primary m-1" onClick={handleCapClick}> Capitilized Case</button>
                <button className="btn btn-primary m-1" onClick={handleClClick}> Clear Text</button>
                <button className="btn btn-primary m-1" onClick={handlespaces}> Remove Extra Spaces</button>

            </div>
            <div className="container my-1" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1> Your text Summary</h1>
                <p>{sp()} words and {text.length} characters </p>
                <p> {(0.008) * text.split(" ").length}  minutes to read the text</p>
                <h2> Preview</h2>
                <p>{text.length > 0 ? text : 'Enter something in the textbox to preview it here'}</p>
            </div>
        </>
    )
}
