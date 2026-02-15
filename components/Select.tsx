import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    error?: string;
    options: { label: string; value: string }[];
}

export function Select({ label, error, options, style, id, ...props }: SelectProps) {
    const selectId = id || props.name || Math.random().toString(36).substr(2, 9);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%' }}>
            {label && (
                <label
                    htmlFor={selectId}
                    style={{
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        color: 'hsl(var(--foreground))'
                    }}
                >
                    {label}
                </label>
            )}
            <select
                id={selectId}
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
            >
                <option value="" disabled>Select an option</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {error && (
                <span style={{ fontSize: '0.75rem', color: 'hsl(var(--destructive))' }}>
                    {error}
                </span>
            )}
        </div>
    );
}
