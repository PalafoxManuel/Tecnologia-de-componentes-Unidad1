import logo from './logo.svg';
import './App.css';
import CustomInput from "./CustomInput";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Nuevo Usuario</h1>
      <CustomInput label={"Usuario"} disabled={false} typeInput={"text"} />
      <CustomInput label={"Correo"} disabled={false} typeInput={"text"}/>
      <CustomInput label={"Contraseña"} disabled={false} typeInput={"password"}/>
      <label><input type="checkbox" />
        Acepto términos y condiciones
      </label>
      
      </header>
    </div>
  );
}

export default App;
