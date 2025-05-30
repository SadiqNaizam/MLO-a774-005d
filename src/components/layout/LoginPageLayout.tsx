import React from 'react';
import { cn } from '@/lib/utils'; // MANDATORY: Import cn utility

// MANDATORY: Define explicit interface with proper types
interface LoginPageLayoutProps {
  children: React.ReactNode; // MANDATORY: Always accept children
  title?: string; // As per general layout props definition, though may not be visually used in this specific layout
  className?: string;
}

// CRITICAL: Use React.FC with the proper interface
const LoginPageLayout: React.FC<LoginPageLayoutProps> = ({
  children,
  // title, // The title prop is part of the interface as requested for layout components.
           // For this specific LoginPageLayout, a visual title is typically part of the LoginCard (e.g., "Welcome").
           // This prop could be used to set document.title, for example:
           // React.useEffect(() => { if (title) document.title = title; }, [title]);
  className,
}) => {
  return (
    <main
      className={cn(
        'flex justify-center items-center h-screen bg-background',
        // This matches the "Layout Requirements" -> "overall.definition":
        // "flex justify-center items-center h-screen bg-background"
        className
      )}
    >
      {/* The 'children' will typically be the LoginCard or a template containing it. */}
      {/* Styling for the main content (e.g., the card itself) is expected to be within the child component, */}
      {/* as per "Layout Requirements" -> "mainContent". */}
      {children}
    </main>
  );
};

export default LoginPageLayout;
