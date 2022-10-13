import './App.css';
import './style.scss';
import React, { useState, createContext } from 'react';
import TextArea from './components/TextArea';
import Header from './components/Header';
import ClearButton from './components/action-buttons/ClearButton';
import ContinueButton from './components/action-buttons/ContinueButton';
import CommonActionButton from './components/input-options-div/CommonActions';
import CopyToClipboardButton from './components/action-buttons/CopyToClipboardButton';
import CustomRegexComponent from './components/input-options-div/CustomRegexComponent';

export const RegexFieldsContext = createContext();

const App = () => {
  const [textInput, setTextInput] = useState('');
  const [textOutput, setTextOutput] = useState('');
  const [regField1, setRegField1] = useState('');
  const [regField2, setRegField2] = useState('');
  const [regField3, setRegField3] = useState('');


  return (
    <div className='mt-5 p-0'>
      <div className='d-flex align-items-center justify-content-center'>
        <Header/>
      </div>
      <div className='row d-flex align-items-center justify-content-center mt-4'>
        <div className='col-12'>
          <div className='container mt-2 p-0 '>
            <div className='d-flex align-items-center justify-content-center p-0'>
              <TextArea type='input' textInput={textInput} setTextInput={setTextInput}/>
            </div>
          </div>
        </div>
        <div>
        <div className='row d-flex align-items-center justify-content-center'>
          <div className='col-12'>
            <div className='row d-flex align-items-center justify-content-center'>
              <RegexFieldsContext.Provider value={{setRegField1, setRegField2, 
                setRegField3, setTextOutput, textInput, regField1, regField2, regField3}}>
                <CustomRegexComponent/>
                <CommonActionButton/>
              </RegexFieldsContext.Provider>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className='row d-flex align-items-center justify-content-center'>
        <div className='container mt-2 p-0'>
          <div className='d-flex align-items-center justify-content-center'>
            <TextArea type='output' textInput={textOutput}/>
          </div>
          <div className='row d-flex align-items-center justify-content-center'>
            <ContinueButton setTextInput={setTextInput} setTextOutput={setTextOutput} textOutput={textOutput}
              setRegField1={setRegField1} setRegField2={setRegField2} setRegField3={setRegField3}/>
            <ClearButton setTextInput={setTextInput} setTextOutput={setTextOutput}
              setRegField1={setRegField1} setRegField2={setRegField2} setRegField3={setRegField3}/>
            <CopyToClipboardButton textOutput={textOutput}/>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
