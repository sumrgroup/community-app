import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export function Input({ label, error, style, id, ...props }: InputProps) {
    const generatedId = React.useId();
    const inputId = id || props.name || generatedId;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%' }}>
            {label && (
                <label
                    htmlFor={inputId}
                    style={{
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        color: 'hsl(var(--foreground))'
                    }}
                >
                    {label}
                </label>
            )}
            <input
                id={inputId}
                style={{
                    height: '2.5rem',
                    width: '100%',
                    borderRadius: 'var(--radius)',
                    border: `1px solid ${error ? 'hsl(var(--destructive))' : 'hsl(var(--border))'}`,
                    backgroundColor: 'hsl(var(--background))',
                    padding: '0 0.75rem',
                    fontSize: '0.875rem',
                    color: 'hsl(var(--foreground))',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    ...style,
                }}
                {...props}
            />
            {error && (
                <span style={{ fontSize: '0.75rem', color: 'hsl(var(--destructive))' }}>
                    {error}
                </span>
            )}
        </div>
    );
}
