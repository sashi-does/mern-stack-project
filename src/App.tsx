import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { Chatbot } from './pages/Chatbot';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { AuthGuard } from './components/AuthGuard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={
              <AuthGuard>
                <Cart />
              </AuthGuard>
            } />
            <Route path="/chatbot" element={
              <AuthGuard>
                <Chatbot />
              </AuthGuard>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;