import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Hero from './components/Hero'
import GlobalClients from './components/GlobalClients'
import Ecosystem from './components/Ecosystem'
import Pillars from './components/Pillars'
import FXDashboard from './fx-engine/pages/Dashboard'
import RevealViewer from './fx-engine/components/RevealViewer'
import MainLayout from './components/MainLayout';
import logoFNX from './assets/logo-fnx.png';

import FnxSC from './pages/FnxSC';
import FnxRD from './pages/FnxRD';
import FnxM from './pages/FnxM';
import BanXLBM from './pages/BanXLBM';
import Frameworks from './pages/Frameworks';
import Logs from './pages/Logs';
import Engage from './pages/Engage';
import PlaceholderPage from './pages/PlaceholderPage';

import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Layout Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          
          {/* Hubs & Affiliate Routes */}
          <Route path="/hubs/sc" element={<FnxSC />} />
          <Route path="/hubs/rd" element={<FnxRD />} />
          <Route path="/hubs/m" element={<FnxM />} />
          <Route path="/affiliate/xlbm" element={<BanXLBM />} />
          
          {/* Frameworks & Logs */}
          <Route path="/frameworks" element={<Frameworks />} />
          <Route path="/logs" element={<Logs />} />

          {/* Placeholder Routes for Footer Dead Links */}
          <Route path="/about" element={<PlaceholderPage title="VỀ CHÚNG TÔI" />} />
          <Route path="/careers" element={<PlaceholderPage title="TUYỂN DỤNG" />} />
          <Route path="/news" element={<PlaceholderPage title="TIN TỨC" />} />
          <Route path="/privacy" element={<PlaceholderPage title="CHÍNH SÁCH BẢO MẬT" />} />
          <Route path="/terms" element={<PlaceholderPage title="ĐIỀU KHOẢN DỊCH VỤ" />} />
          <Route path="/security" element={<PlaceholderPage title="BẢO MẬT HỆ THỐNG" />} />
        </Route>
        
        {/* System Terminal (Engage) - No Navbar/Footer */}
        <Route path="/engage" element={<Engage />} />

        {/* Existing Routes - No Navbar/Footer */}
        <Route path="/fx-engine" element={<FXDashboard />} />
        <Route path="/fx-engine/view" element={<RevealViewer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
