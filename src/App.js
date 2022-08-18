import './App.css'
import { Header } from './components/Header/Header'
import UsersContainer from './ejemplos/UsersContainer';
import Container from './ejemplos/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const App = () => {
  
  
  
  return (

    <div>
      <Header/>

      <Container>
          <h4>Algún contenido</h4>
          <UsersContainer/>

          {/* <button className='btn btn-primary'>CLICK ME</button>
          
          */}

          <Button variant="danger" size="lg">Click me</Button>
          <Button variant="danger" size="sm">Click me</Button>
      </Container>

    </div>
  );
}

export default App;
