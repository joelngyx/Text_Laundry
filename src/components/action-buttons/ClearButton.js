import React from "react";

const ClearButton = (props) => {
  const clearFields = () => {
    props.setTextInput('');
    props.setTextOutput('');
    props.setRegField1('');
    props.setRegField2('');
    props.setRegField3('');
  }

  return (<button onClick={clearFields}>Clear all</button>);
}

export default ClearButton;