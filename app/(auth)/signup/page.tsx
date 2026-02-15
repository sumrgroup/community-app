'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

export default function SignupPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        if (password !== confirmPassword) {
            setError("Passwords don't match");
            setLoading(false);
            return;
        }

        try {
            const { error } = await supabase.auth.signUp({
                email,
                password,
            });

            if (error) throw error;

            setSuccess(true);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Check your email</h1>
                <p style={{ color: 'hsl(var(--muted-foreground))' }}>
                    We've sent you a confirmation link to <strong>{email}</strong>.
                </p>
                <Link href="/login">
                    <Button variant="outline">Back to Login</Button>
                </Link>
            </div>
        );
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ textAlign: 'center' }}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Create Account</h1>
                <p style={{ color: 'hsl(var(--muted-foreground))' }}>Join the community today</p>
            </div>

            <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <Input
                    label="Confirm Password"
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />

                {error && (
                    <div style={{ color: 'hsl(var(--destructive))', fontSize: '0.875rem' }}>
                        {error}
                    </div>
                )}

                <Button type="submit" fullWidth disabled={loading}>
                    {loading ? 'Creating Account...' : 'Sign Up'}
                </Button>
            </form>

            <div style={{ textAlign: 'center', fontSize: '0.875rem' }}>
                <span style={{ color: 'hsl(var(--muted-foreground))' }}>Already have an account? </span>
                <Link href="/login" style={{ color: 'hsl(var(--primary))', fontWeight: 500 }}>
                    Log In
                </Link>
            </div>
        </div>
    );
}
