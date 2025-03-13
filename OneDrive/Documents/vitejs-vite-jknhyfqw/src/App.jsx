// src/App.jsx

import React from 'react';
import Home from './Page/Home';
import AddBook from './Page/AddBook';
import { Route, Routes} from 'react-router-dom';
import './App.css'; // Import global styles

function App() {
  return (
    <div className="App">
  <Routes>
    <Route path={'/'} element={<Home/>}/>
    <Route path={'/addBook'} element={<AddBook/>}/>
  </Routes>

    </div>
  );
}

export default App;
