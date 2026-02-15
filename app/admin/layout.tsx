'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Users, Calendar, AlertTriangle, Settings, LogOut } from 'lucide-react';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const navItems = [
        { label: 'Dashboard', href: '/admin', icon: Home },
        { label: 'Users', href: '/admin/users', icon: Users },
        { label: 'Events', href: '/admin/events', icon: Calendar },
        { label: 'Reports', href: '/admin/reports', icon: AlertTriangle },
        { label: 'Settings', href: '/admin/settings', icon: Settings },
    ];

    return (
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'hsl(var(--background))' }}>
            {/* Sidebar */}
            <aside style={{
                width: '250px',
                backgroundColor: 'hsl(var(--card))',
                borderRight: '1px solid hsl(var(--border))',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <div style={{ padding: '2rem 1.5rem', fontWeight: 'bold', fontSize: '1.25rem' }}>
                    Admin Panel
                </div>

                <nav style={{ flex: 1, padding: '1rem' }}>
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    padding: '0.75rem 1rem',
                                    borderRadius: 'var(--radius)',
                                    backgroundColor: isActive ? 'hsl(var(--primary))' : 'transparent',
                                    color: isActive ? 'hsl(var(--primary-foreground))' : 'hsl(var(--foreground))',
                                    marginBottom: '0.5rem',
                                    transition: 'background-color 0.2s',
                                    fontWeight: 500
                                }}
                            >
                                <Icon size={20} />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                <div style={{ padding: '1rem', borderTop: '1px solid hsl(var(--border))' }}>
                    <button style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius)',
                        backgroundColor: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        color: 'hsl(var(--destructive))'
                    }}>
                        <LogOut size={20} />
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
                {children}
            </main>
        </div>
    );
}
