// IMPORT COMPONENTS
import HeaderM from './components/header/HeaderMobile'
import HeaderD from './components/header/HeaderDesktop'
import Main from './components/main/Main'

// IMPORT STYLES AND ASSETS
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <HeaderM />
      <HeaderD />
      <Main />
    </div>
  );
}

export default App;
