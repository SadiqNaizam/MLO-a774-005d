import React from 'react';
import { cn } from '@/lib/utils';

interface LinkItemProps {
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  text: string;
  className?: string;
  disabled?: boolean;
}

const LinkItem: React.FC<LinkItemProps> = ({ href = "#", onClick, text, className, disabled = false }) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      event.preventDefault();
      return;
    }
    event.preventDefault(); // Always prevent default for SPA-like behavior
    if (onClick) {
      onClick(event);
    }
  };
  return (
    <a 
      href={href} 
      onClick={handleClick} 
      className={cn(className, disabled && "opacity-50 cursor-not-allowed pointer-events-none")}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : undefined}
    >
      {text}
    </a>
  );
};

interface LinksProps {
  onForgotPassword?: () => void;
  onSignUp?: () => void;
  className?: string; 
  showForgotPassword?: boolean;
  showSignUp?: boolean;
  disabled?: boolean;
}

const Links: React.FC<LinksProps> = ({
  onForgotPassword,
  onSignUp,
  className,
  showForgotPassword = true,
  showSignUp = true,
  disabled = false,
}) => {
  if (!showForgotPassword && !showSignUp) {
    return null;
  }

  return (
    <div className={cn(className)}>
      {showForgotPassword && (
        <div className="w-full text-left"> 
          <LinkItem
            onClick={onForgotPassword}
            text="Forgot Password"
            className="block text-xs text-muted-foreground hover:text-primary hover:underline transition-colors"
            disabled={disabled}
          />
        </div>
      )}
      {showForgotPassword && showSignUp && <div className="h-2" />}
      {showSignUp && (
        <div className={cn("w-full text-center", showForgotPassword && showSignUp && "mt-2")}>
          <p className={cn("text-sm text-card-foreground", disabled && "opacity-70")}>
            Don't have an account?{' '}
            <LinkItem
              onClick={onSignUp}
              text="SignUp"
              className="font-medium text-primary underline hover:opacity-80 transition-opacity"
              disabled={disabled}
            />
          </p>
        </div>
      )}
    </div>
  );
};

export default Links;
