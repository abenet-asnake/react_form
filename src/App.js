import './App.css'
import FormInput from './componnet/FormInput';
function App() {
  return (
    <div className="App">
      <form>
        <FormInput placeholder="Enter Your Full Name"/>
        <FormInput placeholder="Enter Your User Name"/>
        <FormInput placeholder="Enter Your Password"/>
        <FormInput placeholder="Rept Your Password "/>
      </form> 
    </div>
  );
}

export default App;
