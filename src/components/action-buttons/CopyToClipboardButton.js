import React, { useState, useEffect } from "react";

const CopyToClipboardButton = (props) => {
  const [buttonText, setButtonText] = useState('Copy to clipboard');
  
  useEffect(() => {
    setButtonText('Copy to clipboard');
  }, [props.textOutput]);

  const copy = async () => {
    await navigator.clipboard.writeText(props.textOutput);
    setButtonText('Copied!');
  }

  return (<button onClick={copy}>{buttonText}</button>);
}

export default CopyToClipboardButton;