import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Registration from './pages/Registration';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
     <div>
      <Routes>
        <Route path="/register" element={<Registration/>}/>
      </Routes>
     </div>
    </BrowserRouter>
  );
}

export default App;
