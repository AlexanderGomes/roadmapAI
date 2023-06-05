import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [info, setInfo] = useState([]);
  const [topic, setTopic] = useState("");

  const callFunc = async () => {
    try {
      const res = await axios.post(`/test/${topic}`);
      setInfo(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log(info)

  return (
    <div>
      <input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <button disabled={!topic} onClick={callFunc}>
        Get Data
      </button>
    </div>
  );
}

export default App;
