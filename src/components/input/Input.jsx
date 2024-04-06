import './input.css';

function Input({ type = "text", placeholder, value, handleOnChange }) {
  return (
    <div className="input-text-container">
      <input
        className="input-text form-control"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
        autoComplete={type === "password" ? "on" : "off"}
        required
      />
    </div>
  );
}

export default Input;