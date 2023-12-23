import qkl from './qkl-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={qkl} />
        <p>
          区块链产业学院
        </p>
        <a
          className="App-link"
          href="https://qkl.cuit.edu.cn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit the website of CUIT
        </a>
      </header>
    </div>
  );
}

export default App;
