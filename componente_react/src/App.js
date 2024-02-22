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
    { titulo: 'Salchipapa', descripcion: 'Salchicha con papa picada', imagen: 'https://www.institucionalcolombia.com/wp-content/uploads/2022/11/Entradas_menus_para_restaurante.jpg' },
    { titulo: 'Huevo con tortilla', descripcion: 'Huevo con tortilla o pal perro', imagen: 'https://www.institucionalcolombia.com/wp-content/uploads/2022/11/Entradas_menus_para_restaurante.jpg' },
    { titulo: 'Quesadilla', descripcion: 'Quesadilla sin queso', imagen: 'https://www.institucionalcolombia.com/wp-content/uploads/2022/11/Entradas_menus_para_restaurante.jpg' },
    { titulo: 'Taco de sal', descripcion: 'Tortilla con sal al gusto', imagen: 'https://www.institucionalcolombia.com/wp-content/uploads/2022/11/Entradas_menus_para_restaurante.jpg' },
    { titulo: 'Fetuchini alfredo con camaron', descripcion: 'Pasta fetuchini bañada en salsa alfredo', imagen: 'https://www.institucionalcolombia.com/wp-content/uploads/2022/11/Entradas_menus_para_restaurante.jpg' },
    { titulo: 'Tacos de pollo', descripcion: 'Taco de pollo con especias', imagen: 'https://www.institucionalcolombia.com/wp-content/uploads/2022/11/Entradas_menus_para_restaurante.jpg' },
    { titulo: 'Salmon al horno', descripcion: 'Salom en horno xd', imagen: 'https://www.institucionalcolombia.com/wp-content/uploads/2022/11/Entradas_menus_para_restaurante.jpg' },
    { titulo: 'Espagueti a la Carbonara', descripcion: 'Espaguetis cremosos con panceta y queso.', imagen: 'https://www.institucionalcolombia.com/wp-content/uploads/2022/11/Entradas_menus_para_restaurante.jpg' },
    { titulo: 'Ensalada Cesar', descripcion: 'Ensalada fresca con pollo, crutones y aderezo cremoso.', imagen: 'https://www.institucionalcolombia.com/wp-content/uploads/2022/11/Entradas_menus_para_restaurante.jpg' },
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
