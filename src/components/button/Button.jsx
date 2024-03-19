import '../button/button.css';

function Button({type="submit", name}) {
  return (
    <input className="button" type={type} value={name} />
  );
}

export default Button;