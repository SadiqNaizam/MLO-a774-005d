import React from 'react';
import { cn } from '@/lib/utils';
import { Button as ShadcnButton, type ButtonProps as ShadcnButtonProps } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends ShadcnButtonProps {
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'default',
  isLoading = false,
  disabled,
  ...props
}) => {
  return (
    <ShadcnButton
      className={cn(
        // Consumers can pass w-full, rounded-full, py-2.5 etc. via className prop
        className
      )}
      variant={variant}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </ShadcnButton>
  );
};

export default Button;
