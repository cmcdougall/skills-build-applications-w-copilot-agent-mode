import logo from './octofitapp-small.png';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import { Navbar, Nav } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="OctoFit Logo" />
          <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">OctoFit Tracker</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/activities">Activities</Nav.Link>
                <Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
                <Nav.Link href="/teams">Teams</Nav.Link>
                <Nav.Link href="/users">Users</Nav.Link>
                <Nav.Link href="/workouts">Workouts</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
        <div className="container mt-4">
          <Routes>
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
