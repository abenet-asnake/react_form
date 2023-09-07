import './App.css'
import {useState} from 'react';
import FormInput from './componnet/FormInput';
function App() {
      // creating useState for each component 
    // instated of using above for all components using object 
    const [formValues,setFormValues]= useState({
      fullName:" ",
      userName:" ",
      email:" ",
      birthDate:" ",
      password:" ",
      confirmPassword:" "
    });
     // instead of writing each inputs creating arrays of inputs 
    const formInputs = [
      {
         id:1,
         name:"fullName",
         type:"text",
         placeholder:"Full Name",
         label:"Full name"

      },
      {
        id:2,
        name:"username",
        type:"text",
        placeholder:"User Name",
        label:"User Name"
      },
      {
        id:3,
        name:"email",
        type:"text",
        placeholder:"Email",
        label:"Email Address"
      },
      {
        id:4,
        name:"birthDate",
        type:"text",
        placeholder:"Birth Date",
        label:"Birth Date"
      },
      {
        id:5,
        name:"password",
        type:"text",
        placeholder:"Password",
        label:"Password"
      },
      {
        id:6,
        name:"confirmPassword",
        type:"text",
        placeholder:"Confirm Password",
        label:"Confirm Password"
      }
    ];

    const handleSubmit=(event) => {
            event.preventDefault();
    };

    const onChangesFrom = (event) =>{
      setFormValues({...formValues,[event.target.name]: event.target.formValues});
    };

  return (

    <div className="App">
      <form onSubmit={handleSubmit}>
        {formInputs.map((formInputs) =>(
          <FormInput key={formInputs.id}{...formInputs} value={formValues[formInputs.name]} onChanges={onChangesFrom}/>
        ))}
        
        <button>Submit</button>
      </form> 
    </div>
  );
}

export default App;

