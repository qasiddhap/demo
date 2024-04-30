import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Parent from './Parent';
import { DataProvider } from './DataContext'; // Import the DataProvider
import Child from './Child';
import Ch2 from './Ch2';

function App() {
  return (
    <DataProvider> {/* Wrap your app with the DataProvider */}
      <Router>
        <Navbar />
        <Parent />
        <Child />
        <Ch2 />
        < Routes></Routes>
      </Router>
    </DataProvider>
  );
}

export default App;
