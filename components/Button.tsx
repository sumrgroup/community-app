import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}

export function Button({
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    className = '',
    style,
    ...props
}: ButtonProps) {

    const baseStyles: React.CSSProperties = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 'var(--radius)',
        fontWeight: 500,
        cursor: 'pointer',
        transition: 'background-color 0.2s, color 0.2s',
        border: '1px solid transparent',
        width: fullWidth ? '100%' : 'auto',
        fontFamily: 'inherit',
        ...style,
    };

    const variants: Record<string, React.CSSProperties> = {
        primary: {
            backgroundColor: 'hsl(var(--primary))',
            color: 'hsl(var(--primary-foreground))',
        },
        secondary: {
            backgroundColor: 'hsl(var(--secondary))',
            color: 'hsl(var(--secondary-foreground))',
        },
        outline: {
            backgroundColor: 'transparent',
            borderColor: 'hsl(var(--border))',
            color: 'hsl(var(--foreground))',
        },
        ghost: {
            backgroundColor: 'transparent',
            color: 'hsl(var(--foreground))',
        },
    };

    const sizes: Record<string, React.CSSProperties> = {
        sm: { height: '2rem', padding: '0 0.75rem', fontSize: '0.875rem' },
        md: { height: '2.5rem', padding: '0 1rem', fontSize: '1rem' },
        lg: { height: '3rem', padding: '0 1.5rem', fontSize: '1.125rem' },
    };

    const combinedStyles = {
        ...baseStyles,
        ...variants[variant],
        ...sizes[size],
    };

    return (
        <button
            style={combinedStyles}
            className={className}
            {...props}
        >
            {children}
        </button>
    );
}
