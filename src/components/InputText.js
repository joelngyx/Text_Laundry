import React from "react";
import '../style.scss';

const InputText = (props) => {
  const updateInputText = (e) => {
    props.setTextInput(e.target.value);
  }

  return(
    <div className="input-text">
      <textarea
        value={props.textInput}
        placeholder="provide your text"
        onChange={updateInputText}
        />
    </div>
  )
}

export default InputText;