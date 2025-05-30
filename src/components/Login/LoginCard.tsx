import React from 'react';
import { cn } from '@/lib/utils';
import TextInput from './TextInput';
import Button from './Button';
import Links from './Links';

interface LoginCardProps {
  className?: string;
  onLoginSuccess?: (data: { email: string }) => void;
}

const LoginCard: React.FC<LoginCardProps> = ({ className, onLoginSuccess }) => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    if (!email || !password) {
      setError("Email and password are required.");
      setIsLoading(false);
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
        setError("Please enter a valid email address.");
        setIsLoading(false);
        return;
    }

    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
      console.log('Attempting login with:', { email, password });
      // In a real app, replace this with actual API call
      // For demonstration, let's assume login is successful
      // if (email === "user@example.com" && password === "password123") { 
      //    if (onLoginSuccess) onLoginSuccess({ email });
      // } else { setError("Invalid credentials."); } 
      if (onLoginSuccess) {
        onLoginSuccess({ email });
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      console.error("Login error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = React.useCallback(() => {
    console.log("Forgot password action triggered");
    // Navigate to forgot password page or show modal
  }, []);

  const handleSignUp = React.useCallback(() => {
    console.log("Sign up action triggered");
    // Navigate to sign up page
  }, []);

  return (
    <div
      className={cn(
        "flex flex-col bg-card text-card-foreground rounded-md shadow-md p-6 w-[300px]",
        className
      )}
    >
      <h1 className="text-2xl font-semibold text-center text-card-foreground mb-6">
        Welcome
      </h1>

      {error && (
        <div className="bg-destructive/10 p-3 rounded-md text-center mb-4">
          <p className="text-sm font-medium text-destructive">{error}</p>
        </div>
      )}

      <form onSubmit={handleLogin} className="space-y-4">
        <TextInput
          id="email"
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          autoComplete="email"
          required
          disabled={isLoading}
        />
        <TextInput
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          autoComplete="current-password"
          required
          disabled={isLoading}
        />
        
        <Links
          onForgotPassword={handleForgotPassword}
          showSignUp={false} // Only show Forgot Password part
          className="pt-1 pb-2" // Adjust spacing for Forgot Password link
          disabled={isLoading}
        />

        <Button 
          type="submit" 
          isLoading={isLoading} 
          disabled={isLoading}
          className="w-full rounded-full py-2.5 text-sm"
        >
          Login
        </Button>
      </form>

      <Links
        onSignUp={handleSignUp}
        showForgotPassword={false} // Only show Sign Up part
        className="mt-6"
        disabled={isLoading}
      />
    </div>
  );
};

export default LoginCard;
