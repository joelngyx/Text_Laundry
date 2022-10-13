import React, { useContext, useState } from "react";
import InputCustomRegex from './InputCustomRegex';
import ApplyRegExButton from './ApplyRegExButton';


import { RegexFieldsContext } from "../../App";

const CustomRegexComponent = () => {
  const {setRegField1, setRegField2, setRegField3, setTextOutput, 
    textInput, regField1, regField2, regField3} = useContext(RegexFieldsContext);
  const [clicked, setClicked] = useState(0);

  const toggleClicked = () => {
    clicked === 0 ? setClicked(1) : setClicked(0);
  }

  if (clicked === 0) {
    return (<button onClick={toggleClicked}>Custom regex</button>)
  } else if (clicked === 1) {
    return(
      <div className='col-9 col-md-12'>
        <div className='row d-flex align-items-center justify-content-center'>
          <div className='custom-p-text'><p>custom regex:</p></div>
          <div className='custom-p-text mx-1' ><p>/</p></div>
          <InputCustomRegex regexField={1} setRegField={setRegField1} regexValue={regField1}/>
          <div className='custom-p-text mx-1'><p>/</p></div>
          <InputCustomRegex regexField={2} setRegField={setRegField2} regexValue={regField2}/>
          <div className='custom-p-text mx-1'><p>replace with</p></div>
          <InputCustomRegex regexField={3} setRegField={setRegField3} regexValue={regField3}/>
          <ApplyRegExButton textInput={textInput} setTextOutput={setTextOutput} 
            regField1={regField1} regField2={regField2} regField3={regField3}/>
        </div>
        <div className='row d-flex align-items-center justify-content-center'>
          <button onClick={toggleClicked}>Hide</button>
        </div>
      </div>
    );
  }
}

export default CustomRegexComponent;