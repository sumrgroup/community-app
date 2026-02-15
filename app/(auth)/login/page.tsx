'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) throw error;

            router.push('/dashboard'); // Redirect to dashboard after login
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const loginAsDemoUser = () => {
        handleDemoLogin('user@example.com', '/dashboard');
    };

    const loginAsDemoAdmin = () => {
        handleDemoLogin('admin@example.com', '/admin');
    };

    const handleDemoLogin = async (demoEmail: string, route: string) => {
        setLoading(true);
        setError(null);
        // Simulate login
        try {
            const { error } = await supabase.auth.signInWithPassword({
                email: demoEmail,
                password: 'password',
            });
            if (error) throw error;
            router.push(route);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ textAlign: 'center' }}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Welcome Back</h1>
                <p style={{ color: 'hsl(var(--muted-foreground))' }}>Sign in to your account</p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
                <Button onClick={loginAsDemoUser} variant="secondary" fullWidth>
                    Login as Demo User
                </Button>
                <Button onClick={loginAsDemoAdmin} variant="outline" fullWidth>
                    Login as Demo Admin
                </Button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '1rem 0' }}>
                <div style={{ flex: 1, height: '1px', backgroundColor: 'hsl(var(--border))' }} />
                <span style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))' }}>OR</span>
                <div style={{ flex: 1, height: '1px', backgroundColor: 'hsl(var(--border))' }} />
            </div>

            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Input
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Input
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                {error && (
                    <div style={{ color: 'hsl(var(--destructive))', fontSize: '0.875rem' }}>
                        {error}
                    </div>
                )}

                <Button type="submit" fullWidth disabled={loading}>
                    {loading ? 'Signing In...' : 'Sign In'}
                </Button>
            </form>

            <div style={{ textAlign: 'center', fontSize: '0.875rem' }}>
                <span style={{ color: 'hsl(var(--muted-foreground))' }}>Don't have an account? </span>
                <Link href="/signup" style={{ color: 'hsl(var(--primary))', fontWeight: 500 }}>
                    Sign Up
                </Link>
            </div>
        </div>
    );
}
