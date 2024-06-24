import Switch from "./Switch";
import { useSelector, useDispatch } from "react-redux";
import { setPower } from "../../../features/soundBanks/soundBanksSlice";

export default function PowerSwitch() {
  const dispatch = useDispatch();
  const power = useSelector((state) => state.soundBanks.power);

  const handlePowerSwitch = (status) => {
    // status of false is off, true is on
    dispatch(setPower(status));
  };

  return (
    <div>
      <h4 className="text-center mt-2">Power</h4>
      <Switch
        isOn={power}
        onToggle={handlePowerSwitch}
      />
    </div>
  );
}

// done -- untested
