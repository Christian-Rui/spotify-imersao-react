import Header from './pages/Header/Header.js';
import Sidebar from './pages/Sidebar/Sidebar.js';

import './styles/reset.css';
import './styles/vars.css';
import './App.css';

import logo from './logo.svg';

function App() {
  return (
    <>
      <Sidebar></Sidebar>
      <Header></Header>
    </> 
  );
}

export default App;