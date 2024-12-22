import './App.css';
import LeftMenu from './Components/LeftMenu';
import Header from './Components/Header';
import Main from './Components/Main/Main';

function App() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
            <LeftMenu />
            <div style={{ flex: 1 }}>
                <Header />
                <Main />
            </div>
    </div>
  );
}

export default App;
