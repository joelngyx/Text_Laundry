import React, { useEffect, useState } from "react";


const ApplyRegExButton = (props) => {
  const [customRegEx, setCustomRegEx] = useState(new RegExp(""));
  useEffect(() => {
    try {
      setCustomRegEx(new RegExp(props.regField1, props.regField2));
    } catch (e) {
      console.log(e);
      setCustomRegEx(new RegExp(""));
    }
  }, [props.regField1, props.regField2]);
  
  const cleanText = () => {
    try {
      let temp = props.textInput.replace(customRegEx, '');
      props.setTextOutput(temp);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <button onClick={cleanText}>Apply regex</button>
  )
}

export default ApplyRegExButton;