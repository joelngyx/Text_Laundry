import './App.css';
import './style.scss';
import React, { useState } from 'react';
import TextArea from './components/TextArea';
import ApplyRegExButton from './components/input-options-div/ApplyRegExButton';
import Header from './components/Header';
import InputCustomRegex from './components/input-options-div/InputCustomRegex';


const App = () => {
  const [textInput, setTextInput] = useState('');
  const [textOutput, setTextOutput] = useState('');
  const [regField1, setRegField1] = useState('');
  const [regField2, setRegField2] = useState('');

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
        <div className='row d-flex align-items-center justify-content-center'>
          <div className='custom-p-text'><p>custom regex</p></div>
          <div className='custom-p-text' ><p>/</p></div>
          <InputCustomRegex regexField={1} setRegField={setRegField1}/>
          <div className='custom-p-text'><p>/</p></div>
          <InputCustomRegex regexField={2} setRegField={setRegField2}/>
          <ApplyRegExButton textInput={textInput} setTextOutput={setTextOutput} regField1={regField1} regField2={regField2}/>
        </div>
      </div>
      <div className='row d-flex align-items-center justify-content-center'>
        <div className='container mt-2 p-0'>
          <div className='d-flex align-items-center justify-content-center'>
            <TextArea type='output' textInput={textOutput}/>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
