import Switch from "./Switch";
import { useSelector, useDispatch } from "react-redux";
import {
  setVolume,
  setActiveSoundBank,
  setMessage,
} from "../../../features/soundBanks/soundBanksSlice";
import { useEffect } from "react";

export default function SwitchBoard() {
  const dispatch = useDispatch();
  const volume = useSelector((state) => state.soundBanks.volume);
  const activeSoundBank = useSelector(
    (state) => state.soundBanks.activeSoundBank
  );
  const power = useSelector((state) => state.soundBanks.power);
  const message = useSelector((state) => state.soundBanks.message);

  const handleVolumeFader = (e) => {
    dispatch(setVolume(e.target.value));
  };
  const handleSoundBankSwitch = () => {
    // binary switching again
    const newBank = activeSoundBank === 1 ? 2 : 1;
    dispatch(setActiveSoundBank(newBank));
  };
  const handlePadTrigger = (soundName) => {
    if (power) {
      dispatch(setMessage(`Playing ${soundName}`));
    }
  };

  return (
    <div className="text-center smallerSwitchBoard">
      <div className="display d-inline-flex p-2 bd-highlight">
        <h3>{message}</h3>
      </div>
      <div className="slide-container">
        <input
          type="range"
          min="0"
          max="100"
          id="volume-slider"
          value={volume}
          onChange={handleVolumeFader}
        />
      </div>
      <div className="bank-switch">
        <h4>Bank</h4>
        <Switch
          isOn={activeSoundBank === 2}
          onToggle={handleSoundBankSwitch}
        />
      </div>
    </div>
  );
}
