import logo from './logo.svg';
import './App.css';

function ParteSuperior(){
  return (
    <div className="parte-superior">
      <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-b281aeadaa832c28badd72c1f6c5caad_screen.jpg?ts=1595421543" alt="Logo" className="logo" />
      <h1 className="titulo">Recetas de cocina</h1>
      <div className="buscador">
        <input type="text" placeholder="Nombre de la receta" />
        <button type="button">Buscar</button>
      </div>
    </div>
  );
}

function TarjetaPlatillo(props) {
  return (
    <div className="tarjeta">
      <img src={props.imagen} alt={props.titulo} />
      <h2>{props.titulo}</h2>
      <p>{props.descripcion}</p>
      <button>Ver</button>
    </div>
  );
}

function Platillos() {
  // Aquí puedes definir una lista de platillos con sus propiedades
  const platillos = [
    { titulo: 'Platillo 1', descripcion: 'Descripción del platillo 1', imagen: 'ruta/a/imagen-platillo-1.jpg' },
    { titulo: 'Platillo 2', descripcion: 'Descripción del platillo 2', imagen: 'ruta/a/imagen-platillo-2.jpg' },
    { titulo: 'Platillo 3', descripcion: 'Descripción del platillo 3', imagen: 'ruta/a/imagen-platillo-2.jpg' },
    { titulo: 'Platillo 4', descripcion: 'Descripción del platillo 4', imagen: 'ruta/a/imagen-platillo-2.jpg' },
    { titulo: 'Platillo 5', descripcion: 'Descripción del platillo 5', imagen: 'ruta/a/imagen-platillo-2.jpg' },
    { titulo: 'Platillo 6', descripcion: 'Descripción del platillo 6', imagen: 'ruta/a/imagen-platillo-2.jpg' },
    
    
    
    // Agrega más platillos según sea necesario
  ];

  return (
    <div className="platillos">
      {platillos.map((platillo, index) => (
        <TarjetaPlatillo
          key={index}
          titulo={platillo.titulo}
          descripcion={platillo.descripcion}
          imagen={platillo.imagen}
        />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <ParteSuperior/>
      <Platillos/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
