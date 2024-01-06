import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QRCodeGenerator, QRCodeScanner } from './pages';
import { Navbar, LoginComponent} from './components';

function App() {
  return (
    

    <Router>
      <Routes>
        

        <Route path="/" element={    <Navbar> <LoginComponent />    </Navbar>} />
        {/* <Route path="/" element={    <Navbar> <signupComponent />    </Navbar>} /> */}
        <Route path="/codeGenerator" element={    <Navbar><QRCodeGenerator />    </Navbar>} />
        <Route path="/scan" element={<Navbar><QRCodeScanner /> </Navbar>} />

      </Routes>
    </Router>

  );
}

export default App;
