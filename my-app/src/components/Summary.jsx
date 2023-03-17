<<<<<<< HEAD
import React, { useState} from 'react';
import UploadImg from "./UploadImg";
import Progressbar from './Progress_bar';

function MLModelInput(props) {
const [inputText, setInputText] = useState('');
const [resultText, setResultText] = useState('');

const [loading, setLoading] = useState(false);

const handleSubmit = async (event) => {
  event.preventDefault();

  if (inputText) {
    setLoading(true);
  const response = await fetch('http://192.168.34.133:12345/summarize', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      text: inputText
  })
});
  setLoading(false);
  const resultText = await response.json();

  setResultText(JSON.stringify(resultText));
=======
import React from 'react';
>>>>>>> be730c0e5aa34b7d18920757d336d08016971348

const sumStyle = {
    fontFamily: "'Shantell Sans', cursive",
    color: "#fff",
    marginLeft: "10vw",
    paddingTop: "10vh",
    fontSize: "6vw"
}

function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

<<<<<<< HEAD
const [progress, setProgress] = useState("0")

function handelProgress() {
  setProgress('90')
}

return (
  <div className="summary">
    <h1 style={{color: "white"}}>Summary</h1>
    <UploadImg />

    <div className="container">
    {/* {loading ? (
        <div className="loader-container">
      	  <div className="spinner"></div>
        </div>
      ) : ( */}
        <div className="row">
            <div className="col">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="text-input"></label>
                    <textarea style={{marginTop: "50px"}}
                        type="text"
                        cols="100" 
                        rows="10"
                        id="text-input"
                        value={inputText}
                        onChange={handleChange}
                    /> <br /><br />
                    <button className="submitBtn" type="submit">Summarize</button> <br />
=======
    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    // fetch('/some-api', { method: form.method, body: formData });

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
}

function Summary() {
    return(
        <div className="summary">
                <h1 style={sumStyle}>Summary...</h1>

                <form method="post" onSubmit={handleSubmit}>
                <button className="submitBtn" type="submit">Summarize</button>
                <label style={{color: "#fff", float: "right", marginRight: "10vw"}}>
                    <textarea
                    name="postContent"
                    defaultValue="Your Text Here"
                    rows={18}
                    cols={70}
                    />
                </label>
                <hr />
                
>>>>>>> be730c0e5aa34b7d18920757d336d08016971348
                </form>
        </div>
<<<<<<< HEAD
        <Progressbar bgcolor="#ff00ff" progress={progress}  height={30} />
        <div className="row">
            <div className="col">
                <output style={{color: "Black", backgroundColor: "white"}}>
                    {resultText}
                </output>
            </div>
        </div>
        // )}
    </div>
      
</div>
  
);
=======
    );
>>>>>>> be730c0e5aa34b7d18920757d336d08016971348
}

export default Summary;