import Sidebar from './pages/Sidebar/Sidebar.js';
import MainContent from './pages/MainContent/MainContent.js'
import Footer from './pages/Footer/Footer.js';


import './styles/reset.css';
import './styles/vars.css';
import "./styles/tooltip.css";
import './App.css';

function App() {
  return (
    <>
      <Sidebar></Sidebar>
      <MainContent></MainContent>
      <Footer></Footer>
    </> 
  );
}

export default App;