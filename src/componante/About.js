import React from "react";

export default function About(props) {
  //   const [myStyle, setMyStyle] = useState({
  //     color: "black",
  //     backgroundColor: "white",
  //   });
  let myStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColour: props.mode === "dark" ? "rgb(36 74 104)" : "white",
    // border: "2px solid",
    // borderColor: props.mode === "dark" ? "white" : "#042743",
  };
  return (
    <div
      classNameName="container"
      style={{ color: props.mode === "dark" ? "white" : "#042743" }}
    >
      <h1 classNameName="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong className="text-color">Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body text-color">
              TextUtils give you away to analyze your text quickly and
              efficiently. Be it word count,character count or
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong className="text-color">Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body text-color">
              TextUtil is a free character counter tool that provides instant
              character count and word count statistics for a given
              text.TextUtils reports the number od word and character.Thus it is
              sutable for writing text whit word/characte limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong className="text-color">Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body text-color">
              This word counter software works in any web Browser such as
              Chrome,FireFox,Internet EXplorer,Safari,Opera.It suits to count
              character in facebook,blog,books,excel document,pdf
              document,essays,etc.
            </div>
          </div>
        </div>
      </div>
      {/* <div classNameName="container">
        <button onClick={toggleStyle} classNameName="btn btn-primary my-3">
          {BtnText}
        </button>
      </div> */}
    </div>
  );
}
