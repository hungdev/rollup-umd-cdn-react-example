import logo from './logo.svg';
import './App.css';
// import Cee from 'Cee';
import { useEffect } from 'react';


function App() {

  const CeeComponent = Cee.ReactCom;

  useEffect(() => {
    Cee.hello('cee');
    Cee.apiHandler.get('https://reactnative.dev/movies.json').then(res => console.log('res', res));
  }, []);

  return (
    <div className="App">
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
      <CeeComponent />
    </div>
  );
}

export default App;
