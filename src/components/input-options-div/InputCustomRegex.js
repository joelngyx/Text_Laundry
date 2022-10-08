import React from "react";
import '../../style.scss';

const InputCustomRegex = (props) => {
  const updateInputText = (e) => {
    try {
      props.setRegField(e.target.value);
    } catch (e) {
      console.log(e);
    }
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