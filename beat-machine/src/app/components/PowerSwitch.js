import Switch from "./Switch";
import { useSelector, useDispatch } from "react-redux";
import { setPower } from "../../../features/soundBanks/soundBanksSlice";

export default function PowerSwitch() {
  const dispatch = useDispatch();
  const power = useSelector((state) => state.soundBanks.power);

  const handlePowerSwitch = () => {
    // dispatch a binary power switching mechanism
    dispatch(setPower(!power));
  };

  return (
    <div>
      <h4 className="text-center mt-2 power">Power</h4>
      <Switch
        isOn={power}
        onToggle={handlePowerSwitch}
      />
    </div>
  );
}

// done -- untested
