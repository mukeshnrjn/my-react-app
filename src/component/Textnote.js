
import React from 'react';
import { useState } from 'react';

export default function Textnote(props) {

    // Function for convert upper case onclick button 
    const handleUpCase = () => {
        // console.log('click the uppercare btn' + text);
        // setText('Convert to Upper Case');
        let neText = text.toUpperCase();
        setText(neText);

    };
    //  change text on click text
    const onChangehendlar = (event) => {
        // console.log('onchange in text items');
        setText(event.target.value);
    };

    // copy text in Text Area
    const handleCopy = () => {

        var text = document.getElementById('formarea');
        text.select();
        navigator.clipboard.writeText(text.value);

    }

    const [text, setText] = useState('Enter the comment');
    return (
        <>
            <div className='container mt-5 pt-5'>
                <h4> {props.title}</h4>
                <div className="form-group">
                    <textarea className="form-control" value={text} id="formarea" onChange={onChangehendlar} rows="3"></textarea>
                </div>
                <button type="submit" onClick={handleUpCase} className="btn btn-primary mr-2"> Convert Upper Case </button>
                <button type="submit" onClick={handleCopy} className="btn btn-primary mr-2"> Copy Text </button>
            </div>

            <div className='container mt-5'>
                <h3>Text Summary</h3>
                <p>Total words:{text.split(' ').length}, Total Character: {text.length} </p>
                <p>Minuts Read :{0.008 * text.split(' ').length}</p>
                <h4>Preview</h4>
                <p>{text}</p>

            </div>

        </>
    )

}
