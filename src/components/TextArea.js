import React from "react";
import '../style.scss';

const TextArea = (props) => {
  const updateInputText = (e) => {
    props.setTextInput(e.target.value);
  }

  if (props.type === "input") {
    return(
      <div className="text-area">
        <textarea
          value={props.textInput}
          placeholder="provide your text"
          onChange={updateInputText}
          />
      </div>
    )
  } else if (props.type === "output") {
    return(
      <div className="text-area">
        <textarea
          value={props.textInput}
          placeholder="your output will be shown here"
          onChange={updateInputText}
          />
      </div>
    )
  }
}

export default TextArea;