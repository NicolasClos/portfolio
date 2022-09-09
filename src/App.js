// IMPORT COMPONENTS
import HeaderM from './components/HeaderMobile'
import HeaderD from './components/HeaderDesktop'
import Main from './components/Main'

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
