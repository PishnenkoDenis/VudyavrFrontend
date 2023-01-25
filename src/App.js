import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <div className="App">
    </div>
  </BrowserRouter>
  )
}

export default App;
