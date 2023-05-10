import "./App.css";
import CreatePragraph from "./components/createPragraf";
import ParagrafShow from "./components/paragrafShow";
import { useState, useEffect } from "react";
import { paragraphcontext } from "./paragraphContext";
import axios from "axios";
function App() {
  const [paras, setParas] = useState(4);
  const [info, setInfo] = useState();
  const [choose, setChoose] = useState("text");
  useEffect(() => {
    axios
      .get(
        `https://baconipsum.com/api/?type=all-meat&paras=${paras}&format=${choose}`
      )
      .then((res) => setInfo(res.data));
  }, [paras, choose]);
  const data = {
    paras,
    setParas,
    info,
    setInfo,
    choose,
    setChoose,
  };
  return (
    <div className="App">
      <paragraphcontext.Provider value={data}>
        <h1>React Sample Text Generator App</h1>
        <div className="container">
          <CreatePragraph />
          <ParagrafShow />
        </div>
      </paragraphcontext.Provider>
    </div>
  );
}

export default App;
