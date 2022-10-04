import React from "react";


const GetCleanedTextButton = (props) => {
  const reg1Test = new RegExp(props.regField1, props.regField2);
  const cleanText = () => {
    let temp = props.textInput.replace(reg1Test, '');
    console.log(temp);
  }

  return (
    <button onClick={cleanText}>Apply regex</button>
  )
}

export default GetCleanedTextButton;