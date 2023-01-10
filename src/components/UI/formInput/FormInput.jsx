import  "./form-input.css"
const FormInput = (props) => {
  return (
    <div className="container">
      <label htmlFor={props.id}> {props.labelNmae}</label>
      <input
        placeholder={props.placeholder || "..."}
        id={props.id}
        type={props.inputType}
      />
    </div>
  );
};

export default FormInput;
