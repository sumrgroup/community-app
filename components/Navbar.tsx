'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Calendar, Users, Briefcase, User } from 'lucide-react';

export function Navbar() {
    const pathname = usePathname();

    const navItems = [
        { label: 'Home', href: '/dashboard', icon: Home },
        { label: 'Activities', href: '/activities', icon: Calendar },
        { label: 'Social', href: '/social', icon: Users },
        { label: 'Jobs', href: '/jobs', icon: Briefcase },
        { label: 'Profile', href: '/profile', icon: User },
    ];

    return (
        <nav style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            height: '4rem',
            backgroundColor: 'hsl(var(--background))',
            borderTop: '1px solid hsl(var(--border))',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            zIndex: 50,
            paddingBottom: 'env(safe-area-inset-bottom)' // For mobile safe area
        }}>
            {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            color: isActive ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))',
                            fontSize: '0.75rem',
                            gap: '0.25rem'
                        }}
                    >
                        <Icon size={24} />
                        <span>{item.label}</span>
                    </Link>
                );
            })}
        </nav>
    );
}
