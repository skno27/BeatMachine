import PowerSwitch from "./PowerSwitch";
import SwitchBoard from "./SwitchBoard";

export default function ControlPanel() {
  return (
    <div id="panel">
      {/* <h1>Control Panel</h1> */}
      <PowerSwitch />
      <SwitchBoard />
    </div>
  );
}
