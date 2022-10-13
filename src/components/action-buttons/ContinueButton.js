import React from "react";

const ContinueButton = (props) => {
  const continueEditing = () => {
    props.setTextInput(props.textOutput);
    props.setTextOutput('');
    props.setRegField1('');
    props.setRegField2('');
    props.setRegField3('');
  }

  return (<button onClick={continueEditing}>Continue editing</button>)
}

export default ContinueButton;