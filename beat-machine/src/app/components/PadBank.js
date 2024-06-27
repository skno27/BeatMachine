import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import banks from "../../banks";

export default function PadBank({ onPadTrigger }) {
  const padsRef = useRef([]);
  const activeSoundBank = useSelector(
    (state) => state.soundBanks.activeSoundBank
  );
  const power = useSelector((state) => state.soundBanks.power);
  const sounds = banks[activeSoundBank] || {};

  // HANDLERS

  // handleClick
  const handleClick = (event) => {
    if (!power) return;
    const pad = event.target.innerText.toLowerCase();
    const soundUrl = sounds[pad];
    if (soundUrl) {
      const sound = new Audio(soundUrl);
      sound.play();
      onPadTrigger(pad);
    } else {
      console.log(`No sound was found for pad: ${pad}`);
    }
  };

  // handle key press
  const handleKeyPress = (event) => {
    if (!power) return;
    let key = event.key.toLowerCase();
    if (!"qweasdzxc".includes(key)) {
      console.log(`This key (${event.key}) wont be used.`);
    } else {
      const element = document.getElementById(key);
      if (element) {
        element.click();
      }
    }
  };

  // assign handlers
  useEffect(() => {
    const pads = padsRef.current;
    // listen for clicks on each pad
    pads.forEach((pad) => {
      pad.addEventListener("click", handleClick);
    });
    // attach the listener for keydowns to the window
    window.addEventListener("keydown", handleKeyPress);

    // Cleanup
    return () => {
      pads.forEach((pad) => {
        pad.removeEventListener("click", handleClick);
      });
      window.removeEventListener("keydown", handleKeyPress);
    };
  }),
    [power, activeSoundBank, sounds];

  return (
    <div className="pads">
      {/* 3 x 3 pad bank */}
      {["qwe", "asd", "zxc"].map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="d-flex flex-row justify-content-around">
          {row.split("").map((key, index) => (
            <div
              key={index}
              id={key}
              className="pad"
              ref={(el) => (padsRef.current[rowIndex * 3 + index] = el)}>
              {key.toUpperCase()}
            </div>
          ))}
        </div>
      ))}
      {/* pad bank end */}
    </div>
  );
}
