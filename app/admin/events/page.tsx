'use client';

import React, { useState } from 'react';
import { Check, X, Eye, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/Button';
import { Badge } from '@/components/Badge';

const PENDING_EVENTS = [
    {
        id: 101,
        title: 'Community Beach Cleanup',
        organizer: 'Green Earth Group',
        date: 'Next Saturday, 8:00 AM',
        location: 'Jumeirah Public Beach',
        description: 'Join us to clean up our beautiful beach. Bags and gloves provided.',
        status: 'Pending',
        image: 'https://images.unsplash.com/photo-1618477461853-5f8dd68aa395?w=200&q=80'
    },
    {
        id: 102,
        title: 'Late Night Coding Session',
        organizer: 'Devs Dubai',
        date: 'Friday, 10:00 PM',
        location: 'Astrolabs',
        description: 'Bring your laptop and work on your side projects with company.',
        status: 'Pending',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200&q=80'
    }
];

export default function AdminEventsPage() {
    const [events, setEvents] = useState(PENDING_EVENTS);

    const handleAction = (id: number, action: 'approve' | 'reject') => {
        if (confirm(`Are you sure you want to ${action} this event?`)) {
            setEvents(events.filter(e => e.id !== id));
        }
    };

    return (
        <div>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>Event Moderation</h1>

            <div style={{ display: 'grid', gap: '1rem' }}>
                {events.length === 0 ? (
                    <div style={{ padding: '2rem', textAlign: 'center', color: 'hsl(var(--muted-foreground))', backgroundColor: 'hsl(var(--card))', borderRadius: 'var(--radius)' }}>
                        No pending events to review.
                    </div>
                ) : events.map(event => (
                    <div key={event.id} style={{
                        backgroundColor: 'hsl(var(--card))',
                        padding: '1.5rem',
                        borderRadius: 'var(--radius)',
                        border: '1px solid hsl(var(--border))',
                        display: 'flex',
                        gap: '1.5rem',
                        alignItems: 'flex-start'
                    }}>
                        <img src={event.image} alt={event.title} style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: 'var(--radius)' }} />

                        <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>{event.title}</h3>
                                <Badge variant="secondary">Pending Review</Badge>
                            </div>

                            <div style={{ color: 'hsl(var(--muted-foreground))', marginBottom: '1rem' }}>
                                by <span style={{ fontWeight: 500, color: 'hsl(var(--foreground))' }}>{event.organizer}</span>
                            </div>

                            <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1rem', fontSize: '0.875rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Calendar size={16} /> {event.date}
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <MapPin size={16} /> {event.location}
                                </div>
                            </div>

                            <p style={{ marginBottom: '1.5rem', lineHeight: '1.5', color: 'hsl(var(--muted-foreground))' }}>
                                {event.description}
                            </p>

                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <Button onClick={() => handleAction(event.id, 'approve')} style={{ backgroundColor: '#10b981', color: 'white' }}>
                                    <Check size={18} style={{ marginRight: '0.5rem' }} /> Approve
                                </Button>
                                <Button onClick={() => handleAction(event.id, 'reject')} variant="outline" style={{ color: 'hsl(var(--destructive))', borderColor: 'hsl(var(--destructive))' }}>
                                    <X size={18} style={{ marginRight: '0.5rem' }} /> Reject
                                </Button>
                                <Button variant="secondary">
                                    <Eye size={18} style={{ marginRight: '0.5rem' }} /> View Details
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
