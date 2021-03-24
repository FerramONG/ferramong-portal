import React from 'react';
import './App.css';
import Menu from './components/Menu';
import ToolBox from './components/ToolBox';
import data from './data/ToolsInfo'

function App() {
  return (
    <div className="App">
      <Menu/>
      <ToolBox img={data.cortador.img} name={data.cortador.name} category={data.cortador.category}
      price={data.cortador.price} utility={data.cortador.utility} use={data.cortador.use}/>
    </div>
  );
}

export default App;
