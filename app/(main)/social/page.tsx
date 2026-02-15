'use client';

import React from 'react';
import { Calendar, MapPin, Users, Info } from 'lucide-react';
import { Button } from '@/components/Button';
import { Badge } from '@/components/Badge';

const SOCIAL_EVENTS = [
    {
        id: 1,
        title: 'Community Monthly Gathering - March',
        date: 'March 15, 2024',
        time: '7:00 PM',
        location: 'Zabeel Park, Dubai',
        attendees: 45,
        maxCapacity: 100,
        price: '50 AED',
        image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
        description: 'Join us for our biggest monthly gathering! Meet new people, enjoy games, food, and music. Early bird tickets available until March 10th.',
    },
    {
        id: 2,
        title: 'Desert Stargazing & BBQ',
        date: 'March 22, 2024',
        time: '5:00 PM',
        location: 'Al Qudra Desert',
        attendees: 30,
        maxCapacity: 50,
        price: '120 AED',
        image: 'https://images.unsplash.com/photo-1533240332313-0db49b459ad6?w=800&q=80',
        description: 'An unforgettable night under the stars. Transport provided from Marina Mall.',
    },
];

export default function SocialEventsPage() {
    const [bookedEvents, setBookedEvents] = React.useState<number[]>([]);

    const handleBook = (id: number) => {
        if (bookedEvents.includes(id)) {
            if (confirm('Cancel booking?')) {
                setBookedEvents(prev => prev.filter(eid => eid !== id));
            }
        } else {
            setBookedEvents(prev => [...prev, id]);
            alert('Ticket booked successfully!');
        }
    };

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '6rem' }}>
            <header style={{ padding: '2rem 1rem', textAlign: 'center', backgroundColor: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))', borderRadius: '0 0 2rem 2rem', marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Monthly Socials</h1>
                <p style={{ marginTop: '0.5rem', opacity: 0.9 }}>Connect with the whole community at our official events.</p>
                <div style={{ marginTop: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', borderRadius: '1rem', fontSize: '0.9rem' }}>
                    <Info size={16} />
                    <span>Next booking deadline: 17th of the month</span>
                </div>
            </header>

            <div style={{ padding: '0 1rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {SOCIAL_EVENTS.map(event => {
                    const isBooked = bookedEvents.includes(event.id);
                    return (
                        <div key={event.id} style={{
                            backgroundColor: 'hsl(var(--card))',
                            borderRadius: 'var(--radius)',
                            border: '1px solid hsl(var(--border))',
                            overflow: 'hidden',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}>
                            <div style={{ height: '200px', position: 'relative' }}>
                                <img src={event.image} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
                                    <Badge variant="secondary" style={{ backgroundColor: 'white', color: 'black' }}>Official Event</Badge>
                                </div>
                                <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', backgroundColor: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))', padding: '0.5rem 1rem', borderRadius: '1rem', fontWeight: 'bold' }}>
                                    {event.price}
                                </div>
                            </div>

                            <div style={{ padding: '1.5rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                    <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{event.title}</h2>
                                </div>

                                <p style={{ color: 'hsl(var(--muted-foreground))', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                                    {event.description}
                                </p>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Calendar size={18} className="text-muted-foreground" />
                                        <div style={{ fontSize: '0.9rem' }}>
                                            <div style={{ fontWeight: 500 }}>{event.date}</div>
                                            <div style={{ fontSize: '0.8rem', color: 'hsl(var(--muted-foreground))' }}>{event.time}</div>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <MapPin size={18} className="text-muted-foreground" />
                                        <div style={{ fontSize: '0.9rem', fontWeight: 500 }}>{event.location}</div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Users size={18} className="text-muted-foreground" />
                                        <div style={{ fontSize: '0.9rem' }}>{event.attendees} / {event.maxCapacity} joined</div>
                                    </div>
                                </div>

                                <Button
                                    fullWidth
                                    size="lg"
                                    onClick={() => handleBook(event.id)}
                                    variant={isBooked ? 'secondary' : 'default'}
                                >
                                    {isBooked ? 'Ticket Booked' : 'Book Ticket'}
                                </Button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
