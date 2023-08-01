import React from 'react';
import {BrowserRouter as Router ,  Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';

export function App() {
  return (
   <>
   <Router>
    <Sidebar>
      <Routes>
        <Route path='/' element={<Dashboard />} />
      </Routes>
    </Sidebar>  
   </Router>
   </>
  )
}

