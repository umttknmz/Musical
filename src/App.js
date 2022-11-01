import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Account from "./components/AccountUser/Account";
import Sidebar from "./components/Menu/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import Playbar from "./components/Playbar/Playbar";
import Home from "./pages/Home/Home";
import NewAlbums from "./components/newAlbums/NewAlbums";
import BoxGenerator from "./components/boxGenerator/BoxGenerator";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewAlbumsF from "./components/newAlbums/NewAlbumsF";
import Category from "./components/Category/Category";

function App() {
  return (
    <Router className="app">
      <Row>
        <Col md={2}><Sidebar /></Col>
        <Col md={10}>
          <div className="d-grid">
            <div className="header"><Topbar /></div>
            <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/radio" element={<BoxGenerator />} />
                <Route path="/category/:id" element={<Category />} />
              </Routes>
            </div>
            <div className="footer"><Playbar /></div>
          </div>
        </Col>
      </Row>
    </Router>
  );
}
export default App;
