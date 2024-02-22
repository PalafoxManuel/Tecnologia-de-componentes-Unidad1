import './App.css';
import './tarjetas.css';

function ParteSuperior(){
  return (
    <div className="parte-superior">
      <div className="logo-titulo">
        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-b281aeadaa832c28badd72c1f6c5caad_screen.jpg?ts=1595421543" alt="Logo" className="logo" />
        <h1 className="titulo">Recetas de cocina</h1>
      </div>
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
  const platillos = [
    { titulo: 'Platillo 1', descripcion: 'Descripción del platillo 1', imagen: 'ruta/a/imagen-platillo-1.jpg' },
    { titulo: 'Platillo 2', descripcion: 'Descripción del platillo 2', imagen: 'ruta/a/imagen-platillo-2.jpg' },
    { titulo: 'Platillo 3', descripcion: 'Descripción del platillo 3', imagen: 'ruta/a/imagen-platillo-2.jpg' },
    { titulo: 'Platillo 4', descripcion: 'Descripción del platillo 4', imagen: 'ruta/a/imagen-platillo-2.jpg' },
    { titulo: 'Platillo 5', descripcion: 'Descripción del platillo 5', imagen: 'ruta/a/imagen-platillo-2.jpg' },
    { titulo: 'Platillo 6', descripcion: 'Descripción del platillo 6', imagen: 'ruta/a/imagen-platillo-2.jpg' },
    { titulo: 'Platillo 7', descripcion: 'Descripción del platillo 7', imagen: 'ruta/a/imagen-platillo-2.jpg' },
    { titulo: 'Platillo 8', descripcion: 'Descripción del platillo 8', imagen: 'ruta/a/imagen-platillo-2.jpg' },
    { titulo: 'Platillo 9', descripcion: 'Descripción del platillo 9', imagen: 'ruta/a/imagen-platillo-2.jpg' },
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
    </div>
  );
}

export default App;
