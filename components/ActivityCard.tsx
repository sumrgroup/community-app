import React from 'react';
import { MapPin, Calendar, Users } from 'lucide-react';
import { Button } from './Button';

interface ActivityCardProps {
    title: string;
    category: string;
    location: string;
    time: string;
    attendees: number;
    maxCapacity: number;
    image: string;
    price?: string;
    onJoin?: () => void;
}

export function ActivityCard({
    title,
    category,
    location,
    time,
    attendees,
    maxCapacity,
    image,
    price,
    onJoin
}: ActivityCardProps) {
    return (
        <div style={{
            backgroundColor: 'hsl(var(--card))',
            borderRadius: 'var(--radius)',
            border: '1px solid hsl(var(--border))',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            width: '280px', // Fixed width for horizontal scrolling
            flexShrink: 0
        }}>
            <div style={{ height: '140px', backgroundColor: '#f0f0f0', position: 'relative' }}>
                <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{
                    position: 'absolute',
                    top: '0.5rem',
                    right: '0.5rem',
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    color: 'white',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: 600
                }}>
                    {category}
                </div>
            </div>

            <div style={{ padding: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <h3 style={{ fontWeight: 600, fontSize: '1rem', lineHeight: '1.2' }}>{title}</h3>
                    {price && <span style={{ fontWeight: 600, color: 'hsl(var(--primary))' }}>{price}</span>}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <MapPin size={14} />
                        {location}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Calendar size={14} />
                        {time}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Users size={14} />
                        {attendees}/{maxCapacity} joined
                    </div>
                </div>

                <Button size="sm" fullWidth onClick={onJoin} style={{ marginTop: 'auto' }}>
                    Join Now
                </Button>
            </div>
        </div>
    );
}
