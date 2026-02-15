import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: 'default' | 'outline' | 'secondary';
    selected?: boolean;
}

export function Badge({
    children,
    variant = 'default',
    selected = false,
    style,
    ...props
}: BadgeProps) {

    const baseStyles: React.CSSProperties = {
        display: 'inline-flex',
        alignItems: 'center',
        borderRadius: '9999px',
        padding: '0.25rem 0.75rem',
        fontSize: '0.75rem',
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'all 0.2s',
        border: '1px solid transparent',
        ...style,
    };

    const variants = {
        default: {
            backgroundColor: selected ? 'hsl(var(--primary))' : 'hsl(var(--muted))',
            color: selected ? 'hsl(var(--primary-foreground))' : 'hsl(var(--muted-foreground))',
            borderColor: selected ? 'hsl(var(--primary))' : 'transparent',
        },
        outline: {
            backgroundColor: 'transparent',
            borderColor: 'hsl(var(--border))',
            color: 'hsl(var(--foreground))',
        },
        secondary: {
            backgroundColor: 'hsl(var(--secondary))',
            color: 'hsl(var(--secondary-foreground))',
        },
    };

    return (
        <span
            style={{ ...baseStyles, ...variants[variant] }}
            {...props}
        >
            {children}
        </span>
    );
}
