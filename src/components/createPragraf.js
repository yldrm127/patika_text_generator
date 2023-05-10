import React, { useContext } from "react";
import { paragraphcontext } from "../paragraphContext";
function createPragraf() {
  const { paras, setParas, choose, setChoose } = useContext(paragraphcontext);
  return (
    <div className="create-paragraph">
      <div>
        <label for="input">pragraphs</label>
        <input
          id="input"
          type="number"
          value={paras}
          onChange={(e) => setParas(e.target.value)}
          min="0"
        />
      </div>
      <div>
        <label fro="include html">include html</label>
        <select
          id="include html"
          value={choose}
          onChange={(e) => setChoose(e.target.value)}
        >
          <option value="text">no</option>
          <option value="html">yes</option>
        </select>
      </div>
    </div>
  );
}

export default createPragraf;
