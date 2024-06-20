function PadBank() {
  return (
    <div className="pads">
      {/* 3 x 3 pad bank */}
      <div className="d-flex flex-row justify-content-around">
        <div className="pad">Q</div>
        <div className="pad">W</div>
        <div className="pad">E</div>
      </div>
      <div className="d-flex flex-row justify-content-around">
        <div className="pad">A</div>
        <div className="pad">S</div>
        <div className="pad">D</div>
      </div>
      <div className="d-flex flex-row justify-content-around">
        <div className="pad">Z</div>
        <div className="pad">X</div>
        <div className="pad">C</div>
      </div>
      {/* pad bank end */}
    </div>
  );
}

function ControlPanel() {
  return (
    <div>
      <Power />
      <SwitchBoard />
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <PadBank />
      {/* controls */}
      <ControlPanel />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
