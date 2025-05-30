import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  containerClassName?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  className,
  containerClassName,
  disabled,
  ...props
}) => {
  return (
    <div className={cn("w-full space-y-1", containerClassName)}>
      <Label 
        htmlFor={id} 
        className={cn(
          "text-xs font-normal text-muted-foreground", 
          disabled && "opacity-70 cursor-not-allowed"
        )}
      >
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={cn(
          "h-auto border-0 border-b border-input bg-transparent px-1 py-2 text-sm text-card-foreground placeholder:text-muted-foreground/80",
          "focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary rounded-none",
          "transition-colors duration-200 ease-in-out",
          disabled && "cursor-not-allowed opacity-70 border-input/70",
          className
        )}
        {...props}
      />
    </div>
  );
};

export default TextInput;
