import Switch from "./Switch";

export default function SwitchBoard() {
  return (
    <div className="text-center">
      <div className="display"></div>
      <div className="slide-container">
        <input
          type="range"
          min="1"
          max="100"
          id="volume-slider"
        />
      </div>
      <div className="bank-switch">
        <h4>Bank</h4>
        <Switch />
      </div>
    </div>
  );
}
