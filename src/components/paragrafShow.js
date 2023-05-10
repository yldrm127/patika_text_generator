import { useContext } from "react";
import { paragraphcontext } from "../paragraphContext";
import { BiCopy } from "react-icons/bi";
import { CopyToClipboard } from "react-copy-to-clipboard";
function paragrafShow() {
  const { info } = useContext(paragraphcontext);
  return (
    <div className="info">
      {info}
      <CopyToClipboard text={info}>
        <BiCopy className="icons" />
      </CopyToClipboard>
    </div>
  );
}

export default paragrafShow;
