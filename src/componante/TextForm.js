import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To UpperCase", "success");
  };
  const handleLoClick = () => {
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To LowerCase", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };
  //   const handleCopy = () => {
  //     var text = document.getElementById("myBox");
  //     text.select();
  //     text.setSelectionRange(0, 9999);
  //     navigator.clipboard.writeText(text.value);
  //     props.showAlert("Copied to Clipboard!", "success");
  //   };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(Text)
      .then(() => {
        props.showAlert("Copied to Clipboard!", "success");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const handleExtraSpace = () => {
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space Removed!", "success");
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const [Text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
        id="myBox"
      >
        <h1>{props.hedding}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={Text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={Text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={Text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={Text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          disabled={Text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={Text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleExtraSpace}
        >
          Remove Extra Space
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {
            Text.split(/\s/).filter((element) => {
              return element.length !== 0;
            }).length
          }
          Word And {Text.length} characters
        </p>
        <p>
          {0.008 *
            Text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>
          {Text.length > 0
            ? Text
            : "Enter Something in the TextBox Above to Preview it here"}
        </p>
      </div>
    </>
  );
}
