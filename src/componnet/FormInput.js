import './FormInput.css';
const FormInput =  (props) => {
   return(
    <div className="formInput">
          <label>Full Name</label>
          <input placeholder={props.placeholder}/>
     </div>
   )
}

export default FormInput;
