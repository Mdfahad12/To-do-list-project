import React, { useState } from "react";
import './App.css'

const App = () => {
  const [details, setDetails] = useState();
  const [saveDetails, setSaveDetails] = useState([]);
  const handleSubmit = () => {
    setSaveDetails((oldItems) => {
      return [...oldItems, details];
    });
    setDetails("")
  };
  return (
    <div  className="wrap">
        <div className="search">
      <input
        className="abc"                                                  
        type="text"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        placeholder="search"
      />
      <button className="Btn" onClick={handleSubmit}>
         +
      </button></div>
      {saveDetails.map((item) => {
        return <li className="qrs" key={item.id}> {item}</li>;
      })}
    </div>
  );
};

export default App;
