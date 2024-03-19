import '../form/form.css';

function Form({onSubmit, children}) {
  return(
    <form 
      action="submit"
      className="form"
      onSubmit={onSubmit}
    >
        {children}
    </form>
  );
}

export default Form;