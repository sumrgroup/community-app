'use client';

import React, { useState } from 'react';
import { ShieldAlert, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/Button';
import { Badge } from '@/components/Badge';

const REPORTS = [
    {
        id: 1,
        type: 'Harassment',
        target: 'User: Bob Jones',
        reporter: 'Alice Smith',
        content: 'Sent inappropriate messages in the group chat.',
        date: '2 hours ago',
        severity: 'High'
    },
    {
        id: 2,
        type: 'Fake Profile',
        target: 'User: Unknown123',
        reporter: 'System AI',
        content: 'Profile photo detected as stock image. High probability of bot.',
        date: '5 hours ago',
        severity: 'Medium'
    },
    {
        id: 3,
        type: 'Spam',
        target: 'Event: "Free Money"',
        reporter: 'Sarah Jenkins',
        content: 'This event looks like a scam.',
        date: '1 day ago',
        severity: 'Critical'
    }
];

export default function AdminReportsPage() {
    const [reports, setReports] = useState(REPORTS);

    const handleDismiss = (id: number) => {
        setReports(reports.filter(r => r.id !== id));
    };

    return (
        <div>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>Incident Reports</h1>

            <div style={{ display: 'grid', gap: '1rem' }}>
                {reports.map(report => (
                    <div key={report.id} style={{
                        backgroundColor: 'hsl(var(--card))',
                        padding: '1.5rem',
                        borderRadius: 'var(--radius)',
                        border: '1px solid hsl(var(--border))',
                        borderLeft: `4px solid ${report.severity === 'Critical' ? 'hsl(var(--destructive))' : '#f59e0b'}`
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <ShieldAlert size={20} color={report.severity === 'Critical' ? 'hsl(var(--destructive))' : '#f59e0b'} />
                                <span style={{ fontWeight: 600 }}>{report.type}</span>
                            </div>
                            <span style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>{report.date}</span>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem', fontSize: '0.9rem' }}>
                            <div>
                                <div style={{ color: 'hsl(var(--muted-foreground))', marginBottom: '0.25rem' }}>Reported Target</div>
                                <div style={{ fontWeight: 500 }}>{report.target}</div>
                            </div>
                            <div>
                                <div style={{ color: 'hsl(var(--muted-foreground))', marginBottom: '0.25rem' }}>Reporter</div>
                                <div style={{ fontWeight: 500 }}>{report.reporter}</div>
                            </div>
                        </div>

                        <div style={{ backgroundColor: 'hsl(var(--muted))', padding: '1rem', borderRadius: 'var(--radius)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                            {report.content}
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                            <Button variant="outline" onClick={() => handleDismiss(report.id)}>Dismiss</Button>
                            <Button style={{ backgroundColor: 'hsl(var(--destructive))', color: 'hsl(var(--destructive-foreground))' }}>Take Action</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
