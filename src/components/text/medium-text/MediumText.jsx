import '../medium-text/medium-text.css';

function MediumText({message}) {
  return (
    <div className="medium-text">
      <p>{message}</p>
    </div>
  );
}

export default MediumText;