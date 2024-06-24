import PadBank from "./PadBank";
import ControlPanel from "./ControlPanel";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false;

export default function BeatMachine() {
  return (
    <div className="container">
      <div className="d-flex justify-content-end">
        <header>
          <span>SKNO(27)</span>
          <FontAwesomeIcon icon={faTriangleExclamation} />
        </header>
      </div>
      <div id="holster">
        <PadBank />
        {/* controls */}
        <ControlPanel />
      </div>
    </div>
  );
}
