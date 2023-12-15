import DarkModeChatArea from '@/pages/table';
import { ThemeProvider } from "@/components/ui/theme-provider";
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Route from react-router-dom
import LoginAccount from '@/pages/Login';
import Mainpage from '@/pages/home';
import { ModeToggle } from "./components/ui/mode-toggle";
import Signup  from '@/pages/signup';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="container">
        <ModeToggle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginAccount />} />
            <Route path="/noob" element={<Mainpage onTabSelect={undefined} />} />
            <Route path="/chat" element={<DarkModeChatArea />} />
            <Route path="/signup" element={<Signup />} />
            
           
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;



