import "./spinner.css";

function Spinner() {
  return (
    <div className="overlay">
      <div className="spinner-container">
        <div 
            className="spinner-border text-success"
            style={{width: "3rem", height: "3rem"}}
            role="status">
        </div>
      </div>
    </div>
  );
}

export default Spinner;