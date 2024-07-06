import PadBank from "./PadBank";
import ControlPanel from "./ControlPanel";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { setMessage } from "../../../features/soundBanks/soundBanksSlice";
config.autoAddCss = false;

export default function BeatMachine() {
  const dispatch = useDispatch();

  const handlePadTrigger = (soundName) => {
    dispatch(setMessage(`${soundName}`));
  };

  return (
    <div
      id="drum-machine"
      className="container">
      <div className="header-div  d-flex justify-content-end">
        <header>
          <span>SKNO(27)</span>
          <FontAwesomeIcon icon={faTriangleExclamation} />
        </header>
      </div>
      <div id="holster">
        <PadBank onPadTrigger={handlePadTrigger} />
        {/* controls */}
        <ControlPanel />
      </div>
    </div>
  );
}
