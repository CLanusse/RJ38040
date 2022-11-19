import { ArticulosContainer } from "./components/ArticulosContainer/ArticulosContainer";
import Contenedor from "./components/Contenedor/Contenedor";
import { Header } from "./components/Header/Header";

const App = () => {

  // const check = false

  return (
    <div>
      {/* { check ? <ArticulosContainer /> : null } */}
      <Header />

      <Contenedor>
        <ArticulosContainer />
      </Contenedor>
    </div>
  );

}

export default App;
