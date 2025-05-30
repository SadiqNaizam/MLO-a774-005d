import React from 'react';
import LoginPageLayout from '../components/layout/LoginPageLayout';
import LoginCard from '../components/Login/LoginCard';

/**
 * Represents the main login page of the application.
 * It uses LoginPageLayout to structure the page and LoginCard for the login form.
 */
const IndexPage: React.FC = () => {
  /**
   * Handles successful login events from the LoginCard component.
   * @param data - An object containing data from the successful login, e.g., { email: string }.
   */
  const handleLoginSuccess = React.useCallback((data: { email: string }) => {
    console.log('Login successful for email:', data.email);
    // In a real application, you would typically navigate the user to their dashboard
    // or update application state (e.g., using context or a state management library).
    // For this demonstration, a simple alert is shown.
    alert(`Login successful! Welcome, ${data.email}.\nCheck console for more details.`);
    // Example: If using react-router-dom, you might do:
    // navigate('/dashboard');
  }, []);

  return (
    <LoginPageLayout title="Login Page">
      <LoginCard onLoginSuccess={handleLoginSuccess} />
    </LoginPageLayout>
  );
};

export default IndexPage;
