import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";


function App() {
  const [info, setInfo] = useState([]);

  const callFunc = async () => {
    try {
      const res = await axios.post("/test");
      setInfo(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <button onClick={callFunc}>get data</button>
    </div>
  );
}

export default App;
