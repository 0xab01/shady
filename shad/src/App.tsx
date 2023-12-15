import React from 'react';
import Login from '@/pages/Login';
import { ThemeProvider } from "@/components/ui/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <Login />
      </div>
    </ThemeProvider>
  );
}

export default App;
