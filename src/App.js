import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Mis Datos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Mi Lenguaje</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Mis Certificados</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Mi PROGRESO</a>
              </li>
              <li><hr className="dropdown-divider"/></li>
              <li className="nav-item">
                <a className="nav-link" href="#">Informacion EDUFAMI</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
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
