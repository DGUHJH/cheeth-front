import Join from 'pages/Join/index';
import Login from 'pages/Login/index';
import Main from 'pages/Main/index';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Join" element={<Join />} />
    </Routes>
  </BrowserRouter>
);
export default App;
