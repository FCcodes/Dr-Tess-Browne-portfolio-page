import logo from './logo.svg';
import './scss/style.css';
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import Main from './components/Main'
import ServiceContainer from './components/ServicesContainer'

function App() {
  return (
    <>
      <header>
        <NavBar/>   
        <div className="innerContent">
          <h1>Working Together</h1>
        </div>     
      </header>      
      <Main/>       
      <ServiceContainer/>
      <Footer/>            
    </>
  );
}

export default App;
