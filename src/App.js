import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Dashboard from './Dashboard/Dashboard';
function App() {
  return (
    <div className="App">
      
      <Router>
      <Routes>
        <Route path="/" element={<Layout/>} />
        <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
