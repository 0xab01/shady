// Login.tsx
import React from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import "@/App.css";
import "@/index.css";
import { ModeToggle } from "@/components/ui/mode-toggle"; // Adjust the import path

interface LoginProps extends React.HTMLAttributes<HTMLDivElement> {}

const Login: React.FC<LoginProps> = ({ className, ...props }) => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    // Simulating an asynchronous operation (e.g., API call)
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn("flex items-center justify-center h-screen", className)} {...props}>
      <div className={cn("grid gap-6", "sm:w-1/2", className)}>
        {/* Theme toggle button */}
        <ModeToggle />

        <form onSubmit={onSubmit} className="bg-white p-8 rounded shadow-md">
          <div className="grid gap-2">
            {/* Your form inputs and buttons go here */}
            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled={isLoading}
              />
            </div>
            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="password">
                Password
              </Label>
              <Input
                id="password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                disabled={isLoading}
              />
            </div>
            <Button disabled={isLoading}>
              Sign In with Email
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <Button variant="outline" type="button" disabled={isLoading}>
              Github
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
