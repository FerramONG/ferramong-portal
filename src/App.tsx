import React from 'react';
import './App.css';
import Routes from "./routes/routes";
import GlobalState from './context/GlobalState';

function App() {
  // const [state, setState] = useState({});
  return (
    <div className="App">
      <GlobalState> 
        <Routes />
      </GlobalState>

    </div>
  );
}

export default App;
