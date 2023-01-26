import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Books from './components/BookPage';
import Category from './components/Category';

export default function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/Category" element={<Category />} />
      </Routes>
    </Router>
  );
}
