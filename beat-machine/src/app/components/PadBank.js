import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import banks from "../../banks";

export default function PadBank({ onPadTrigger }) {
  const padsRef = useRef([]);
  const activeSoundBank = useSelector(
    (state) => state.soundBanks.activeSoundBank
  );
  const power = useSelector((state) => state.soundBanks.power);
  const volume = useSelector((state) => state.soundBanks.volume);
  const sounds = banks[activeSoundBank] || {};

  // HANDLERS

  // handleClick
  const handleClick = (event) => {
    if (!power) return;
    const pad = event.target.innerText;
    console.log("Pad:", pad);
    const sound = sounds[pad];
    let display = pad
      ? sound.split("/")[2].split(".")[0].toUpperCase()
      : `AUDIO-NOT-FOUND`; // render with an exception for error handling
    onPadTrigger(display);

    // play the audio
    const audioElement = padsRef.current.find((audio) => audio.id === pad);
    console.log("Sound Element:", audioElement);
    if (audioElement) {
      audioElement.currentTime = 0; // Restart the sample
      audioElement.play();
    }
  };

  // handle key press
  const handleKeyPress = (event) => {
    if (!power) return;
    const key = event.key.toUpperCase();
    console.log("Key pressed:", key);
    if ("QWEASDZXC".includes(key)) {
      const element = document.getElementById(key);

      if (element) {
        console.log("Element for key:", element);
        element.parentElement.click();
      } else {
        console.log("Element not found");
      }
    }
  };

  // assign handlers
  useEffect(() => {
    const pads = document.getElementsByClassName("drum-pad");
    // listen for clicks on each pad
    Array.from(pads).forEach((pad) => {
      pad.addEventListener("click", handleClick);
    });
    // attach the listener for keydowns to the window
    window.addEventListener("keydown", handleKeyPress);

    // Cleanup
    return () => {
      Array.from(pads).forEach((pad) => {
        pad.removeEventListener("click", handleClick);
      });
      window.removeEventListener("keydown", handleKeyPress);
    };
  }),
    [power, activeSoundBank, sounds];

  useEffect(() => {
    padsRef.current.forEach((audioElement) => {
      if (audioElement) {
        const elementId = audioElement.id;
        console.log("Element ID:", elementId);
        audioElement.src = sounds[elementId];
        console.log("Source:", audioElement.src);
        audioElement.volume = volume / 100;
        /* this may not work lol . audio doesnt have a direct volume attribute 
           it may work, though*/
      }
    });
  }, [sounds, volume]);

  const setPadRef = (el) => {
    if (el && !padsRef.current.includes(el)) {
      padsRef.current.push(el);
    }
  };

  return (
    <div id="pad-bank">
      <div
        id="sample1"
        className="drum-pad">
        <audio
          ref={setPadRef}
          className="clip"
          id="Q"></audio>
        Q
      </div>
      <div
        id="sample2"
        className="drum-pad">
        <audio
          ref={setPadRef}
          className="clip"
          id="W"></audio>
        W
      </div>
      <div
        id="sample3"
        className="drum-pad">
        <audio
          ref={setPadRef}
          className="clip"
          id="E"></audio>
        E
      </div>
      <div
        id="kick"
        className="drum-pad">
        <audio
          ref={setPadRef}
          className="clip"
          id="A"></audio>
        A
      </div>
      <div
        id="snare"
        className="drum-pad">
        <audio
          ref={setPadRef}
          className="clip"
          id="S"></audio>
        S
      </div>
      <div
        id="clap"
        className="drum-pad">
        <audio
          ref={setPadRef}
          className="clip"
          id="D"></audio>
        D
      </div>
      <div
        id="openhat"
        className="drum-pad">
        <audio
          ref={setPadRef}
          className="clip"
          id="Z"></audio>
        Z
      </div>
      <div
        id="closedhat"
        className="drum-pad">
        <audio
          ref={setPadRef}
          className="clip"
          id="X"></audio>
        X
      </div>
      <div
        id="perc"
        className="drum-pad">
        <audio
          ref={setPadRef}
          className="clip"
          id="C"></audio>
        C
      </div>
    </div>
  );
}
