import { Navbar } from '@/components/Navbar';

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div style={{ paddingBottom: '5rem', minHeight: '100vh', backgroundColor: 'hsl(var(--background))' }}>
            {children}
            <Navbar />
        </div>
    );
}
