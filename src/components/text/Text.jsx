import "./text.css";

function Text({value, fontSize, fontWeight}) { 
  return (
    <p className="text" style={{fontSize: fontSize, fontWeight: fontWeight}}>{value}</p>
  );
}

export default Text;