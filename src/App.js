import './App.css';
import './style.scss';
import React, { useState, useEffect } from 'react';
import InputText from './components/InputText';
import GetCleanedTextButton from './components/GetCleanedTextButton';
import Header from './components/Header';
import InputCustomRegex from './components/InputCustomRegex';
import CommonRegexButton from './components/CommonRegexButton';


const App = () => {
  const [textInput, setTextInput] = useState('');
  const [cleanedText, setCleanText] = useState('');
  const [regField1, setRegField1] = useState('');
  const [regField2, setRegField2] = useState('');

  useEffect(() => {
    console.log(textInput);
  }, [textInput])

  return (
    <div className='mt-4 p-3'>
      <div className='container p-0'>
        <div class='d-flex align-items-center justify-content-center'>
          <Header/>
        </div>
      </div>
      <div className='row'>
        <div className='col-12 col-md-9'>
          <div className='container mt-4 p-0 '>
            <div class="d-flex align-items-center justify-content-center">
              <InputText textInput={textInput} setTextInput={setTextInput}/>
            </div>
          </div>
        </div>
      </div>
      <InputCustomRegex regexField={1} setRegField={setRegField1}/>
      <InputCustomRegex regexField={2} setRegField={setRegField2}/>
      <GetCleanedTextButton textInput={textInput} setCleanText={setCleanText} regField1={regField1} regField2={regField2}/>
    </div>
  );
}

export default App;
