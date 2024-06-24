import { useEffect } from "react";

export default function PadBank() {
  // handleClick
  const handleClick = (event) => {
    alert(`Button clicked: ${event.target.innerText}`);
    // we will check what button it is
    let pad = event.target.innerText;
  };

  useEffect(() => {
    // target the pads
    const pads = document.querySelectorAll(".pad");

    // listen for clicks on each pad
    pads.forEach((pad) => {
      pad.addEventListener("click", handleClick);
    });

    // handle key press
    const handleKeyPress = (event) => {
      let key = event.key.toLowerCase();

      if (!"qweasdzxc".includes(key)) {
        console.log(`This key (${event.key}) wont be used.`);
      } else {
        const element = document.getElementById(key);
        element.click();
        handleClick(element);

        // const syntheticEvent = { target: element };
        // handleClick(element);
      }
    };
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
    [];

  return (
    <div className="pads">
      {/* 3 x 3 pad bank */}
      <div className="d-flex flex-row justify-content-around">
        <div
          id="q"
          className="pad">
          Q
        </div>
        <div
          id="w"
          className="pad">
          W
        </div>
        <div
          id="e"
          className="pad">
          E
        </div>
      </div>
      <div className="d-flex flex-row justify-content-around">
        <div
          id="a"
          className="pad">
          A
        </div>
        <div
          id="s"
          className="pad">
          S
        </div>
        <div
          id="d"
          className="pad">
          D
        </div>
      </div>
      <div className="d-flex flex-row justify-content-around">
        <div
          id="z"
          className="pad">
          Z
        </div>
        <div
          id="x"
          className="pad">
          X
        </div>
        <div
          id="c"
          className="pad">
          C
        </div>
      </div>
      {/* pad bank end */}
    </div>
  );
}
