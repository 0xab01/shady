import React from 'react';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginAccount from '@/pages/Login';

import { ModeToggle } from './components/ui/mode-toggle';
import Signup from '@/pages/signup';

import Playground from '@/pages/dashboard';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="container">
        <ModeToggle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginAccount />} />
            <Route path="/dashboard" element={<Playground />} />
        
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<LoginAccount />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
