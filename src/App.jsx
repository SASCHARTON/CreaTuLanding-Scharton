import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  
  const mensajeDeBienvenida = "¡Bienvenido a mi tienda online!";
  
  return (
    <div>
      {}
      <NavBar />
      
      {}
      <ItemListContainer greeting={mensajeDeBienvenida} />
      
      {}
    </div>
  );
}

export default App;