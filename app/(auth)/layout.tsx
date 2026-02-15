export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            backgroundColor: 'hsl(var(--background))',
            padding: '1rem'
        }}>
            <div style={{
                width: '100%',
                maxWidth: '400px',
                padding: '2rem',
                border: '1px solid hsl(var(--border))',
                borderRadius: 'var(--radius)',
                backgroundColor: 'hsl(var(--card))',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            }}>
                {children}
            </div>
        </div>
    );
}
