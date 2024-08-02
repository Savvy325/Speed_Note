import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomepageLogin from './components/HomepageLogin/HomepageLogin';
import Dashboard from './components/DashboardPage/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomepageLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
