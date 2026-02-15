'use client';

import React from 'react';
import { Users, CreditCard, Calendar, AlertTriangle } from 'lucide-react';

export default function AdminDashboardPage() {
    const stats = [
        { label: 'Total Active Users', value: '1,245', icon: Users, change: '+12% this month' },
        { label: 'Subscription Revenue', value: 'AED 45,200', icon: CreditCard, change: '+8% this month' },
        { label: 'Events Created Today', value: '34', icon: Calendar, change: '+5 vs yesterday' },
        { label: 'Pending Reports', value: '12', icon: AlertTriangle, change: '-3 vs yesterday', urgent: true },
    ];

    return (
        <div>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>Dashboard Overview</h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                {stats.map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                        <div key={i} style={{
                            backgroundColor: 'hsl(var(--card))',
                            padding: '1.5rem',
                            borderRadius: 'var(--radius)',
                            border: '1px solid hsl(var(--border))',
                            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                <div style={{ padding: '0.5rem', backgroundColor: 'hsl(var(--muted))', borderRadius: '50%' }}>
                                    <Icon size={24} color="hsl(var(--primary))" />
                                </div>
                                {stat.urgent && <span style={{ fontSize: '0.75rem', color: 'hsl(var(--destructive))', fontWeight: 'bold' }}>Action Needed</span>}
                            </div>
                            <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>{stat.value}</div>
                            <div style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>{stat.label}</div>
                            <div style={{ fontSize: '0.75rem', color: 'hsl(var(--primary))', marginTop: '0.5rem' }}>{stat.change}</div>
                        </div>
                    );
                })}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem' }}>
                <div style={{
                    backgroundColor: 'hsl(var(--card))',
                    padding: '1.5rem',
                    borderRadius: 'var(--radius)',
                    border: '1px solid hsl(var(--border))'
                }}>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>Recent Activity</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {[1, 2, 3].map(i => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingBottom: '1rem', borderBottom: '1px solid hsl(var(--border))' }}>
                                <div style={{ width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: '#eee' }} />
                                <div>
                                    <div style={{ fontSize: '0.875rem', fontWeight: 500 }}>New user registered</div>
                                    <div style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))' }}>2 minutes ago</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{
                    backgroundColor: 'hsl(var(--card))',
                    padding: '1.5rem',
                    borderRadius: 'var(--radius)',
                    border: '1px solid hsl(var(--border))'
                }}>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>Content Moderation</h2>
                    <p style={{ color: 'hsl(var(--muted-foreground))' }}>No new flagged items.</p>
                </div>
            </div>
        </div>
    );
}
