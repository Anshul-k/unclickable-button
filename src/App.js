import './App.css';
import Confirmation from './Pages/Confirmation';
import Home from './Pages/Home';
import Form from './Pages/Form';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Thanks from './Pages/Thanks';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/confirmation" element={<Confirmation/>}/>
          <Route exact path="/form" element={<Form/>}/>
          <Route exact path="/thanks" element={<Thanks/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
