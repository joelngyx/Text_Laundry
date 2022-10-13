import React from "react";
import '../../style.scss';

const InputCustomRegex = (props) => {
  let placeHolderText;
  switch(props.regexField) {
    case 1:
      placeHolderText = 'regexp';
      break;
    case 2:
      placeHolderText = 'flags';
      break;
    case 3:
      placeHolderText = 'string';
      break;
    default:
      placeHolderText = 'default';
      break;
  }

  const updateInputText = (e) => {
    try {
      props.setRegField(e.target.value);
      console.log(`${props.regexField}, ${e.target.value}`);
    } catch (e) {
      console.log(e);
    }
  }

  return(
    <div>
      <form>
        <input 
          type="text" 
          value={props.regexValue}
          placeholder={`${placeHolderText}`}
          onChange={updateInputText}/>
      </form>
    </div>
  )
}

export default InputCustomRegex;