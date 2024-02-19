import './App.css';
import CustomInput from "./CustomInput";
import button from './button';

function Login(){
  return(
    <div className="login">
      <h1>Nuevo Usuario</h1>
      <CustomInput label={"Usuario"} disabled={false} typeInput={"text"} />
      <CustomInput label={"Correo"} disabled={false} typeInput={"text"}/>
      <CustomInput label={"Contraseña"} disabled={false} typeInput={"password"}/>
      <div id="check">
        <input type="checkbox"/>
        <label>Acepto términos y condiciones</label>
      </div>

      <div id="botones">
        {button("Cancelar", false)}
        {button("Aceptar", true)}
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login/>
      </header>
    </div>
  );
}

export default App;
