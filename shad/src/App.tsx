import { ThemeProvider } from '@/components/ui/theme-provider';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginAccount from '@/pages/Login';
// Update the import statement for ModeToggle
import { ModeToggle } from './components/ui/mode-toggle';

import Signup from '@/pages/signup';
import Playground from '@/pages/dashboard';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="container">
        <Router>
          <ModeToggle />
          <Switch>
            <Route path="/" component={LoginAccount} />
            <Route path="/dashboard" component={Playground} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={LoginAccount} />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
