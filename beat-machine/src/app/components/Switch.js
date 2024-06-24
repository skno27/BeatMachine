export default function Switch({ isOn, onToggle }) {
  const handleChange = (e) => {
    onToggle(e.target.checked);
  };

  return (
    <div className="switch-div text-center">
      <label className="switch">
        <input
          type="checkbox"
          checked={isOn}
          onChange={handleChange}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
}

// done -- untested
