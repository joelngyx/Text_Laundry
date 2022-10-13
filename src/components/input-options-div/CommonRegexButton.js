import React, { useContext, useState, useEffect } from "react";
import { RegexFieldsContext } from "../../App";


const CommonRegexButton = (props) => {
  // eslint-disable-next-line
  const {setRegField1, setRegField2, setRegField3, setTextOutput, textInput} = useContext(RegexFieldsContext);
  const [buttonText, setButtonText] = useState('');

  useEffect(() => {
    switch (props.type) {
      case 0:
        setButtonText('Remove all numerics');
        break;
      case 1:
        setButtonText('Remove all capitalized words');
        break;
      case 2:
        setButtonText('Lowercase all words');
        break;
      case 3:
        setButtonText('Remove text between round brackets');
        break;
      default:
        console.log('error');
        break;
    }
    // eslint-disable-next-line
  }, [])
  
  const applyCommonRegexActions = () => {
    props.setClicked(0);
    switch (props.type) {
      case 0:
        // remove all digits
        let regex0 = /[0-9]/g;
        let temp0 = textInput.replace(regex0, '');
        setTextOutput(temp0);
        break;
      case 1:
        // remove all capitalized words
        let regex1 = /\b[A-Z]+\b/g;
        let temp1 = textInput.replace(regex1, '');
        setTextOutput(temp1);
        break;
      case 2:
        // replace all capitalized words with lowercase characters
        let temp2 = textInput.toLowerCase();
        setTextOutput(temp2);
        break;
      case 3:
        // remove all text between brackets
        let regex3 = / *\([^)]*\) */g;
        let temp3 = textInput.replace(regex3, '');
        setTextOutput(temp3);
        break;
      default:
        console.log('error');
        break;
    }
  }

  return(
    <button onClick={applyCommonRegexActions}>{buttonText}</button>
  )
}

export default CommonRegexButton;