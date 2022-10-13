import React, { useState } from "react";
import CommonRegexButton from "./CommonRegexButton";


const CommonActionButton = () => {
  const [clicked, setClicked] = useState(0);

  const toggleClicked = () => {
    clicked === 0 ? setClicked(1) : setClicked(0);
  }

  if (clicked === 0) {
    return(
      <button onClick={toggleClicked}>Common actions</button>
    );
  } else if (clicked === 1) {
    return(
      <div className="row d-flex justify-content-center"> 
        <div className="col-12">
          <div className="row d-flex justify-content-center"><CommonRegexButton type={0} setClicked={setClicked}/></div>
          <div className="row d-flex justify-content-center"><CommonRegexButton type={1} setClicked={setClicked}/></div>
          <div className="row d-flex justify-content-center"><CommonRegexButton type={2} setClicked={setClicked}/></div>
          <div className="row d-flex justify-content-center"><CommonRegexButton type={3} setClicked={setClicked}/></div>
          <div className="row d-flex justify-content-center"><button onClick={toggleClicked}>Hide</button></div>
        </div>
      </div>
    )
  }
}

export default CommonActionButton;