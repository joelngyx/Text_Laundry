import React, { useState } from "react";
import '../style.scss';

const InputCustomRegex = (props) => {
  const updateInputText = (e) => {
    props.setRegField(e.target.value);
  }

  return(
    <div>
      <form>
        <input 
          type="text" 
          placeholder={`regexField ${props.regexField}`}
          onChange={updateInputText}/>
      </form>
    </div>
  )
}

export default InputCustomRegex;