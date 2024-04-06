import '../button/button.css';

function Button({name, onClick, className}) {
  return (
    <button className={className} type="button" onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;