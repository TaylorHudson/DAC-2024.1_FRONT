import './input-text.css';

function InputText({type = "text", placeholder, value, handleOnChange}) {
  return (
    <div className="input-text-container">
      <input 
        className="input-text"
        type={type} 
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange} 
      />
    </div>
  );
}

export default InputText;