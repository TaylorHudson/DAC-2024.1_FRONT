import '../small-text/small-text.css';

function SmallText({message}) {
  return (
    <div className="small-text">
      <p>{message}</p>
    </div>
  );
}

export default SmallText;