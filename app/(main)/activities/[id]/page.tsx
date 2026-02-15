'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MapPin, Calendar, Users, DollarSign, Share2, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/Button';
import { Badge } from '@/components/Badge';

// Mock data fetcher
const getActivity = (id: string) => {
    return {
        id,
        title: 'Sunset Yoga on the Beach',
        description: 'Join us for a relaxing sunset yoga session at Kite Beach. Suitable for all levels. Please bring your own mat and water bottle. We will meet near the main parking area.',
        category: 'Fitness',
        location: 'Kite Beach, Dubai',
        time: 'Today, 6:00 PM - 7:00 PM',
        attendees: 12,
        maxCapacity: 20,
        price: 'Free',
        host: {
            name: 'Yoga with Sarah',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
        },
        image: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?w=800&q=80',
    };
};

export default function ActivityDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const router = useRouter();
    const { id } = React.use(params);
    const activity = getActivity(id);
    const [joined, setJoined] = useState(false);

    // Unwrap params (Next.js 15+ async params handling workaround or standard depending on version)
    // For standard Next.js 14 params are sync in client components but this is safe.

    const handleJoin = () => {
        if (confirm(`Do you want to join ${activity.title}?`)) {
            setJoined(true);
            alert('You have successfully joined the activity!');
        }
    };

    return (
        <div style={{ paddingBottom: '6rem' }}>
            {/* Hero Image */}
            <div style={{ height: '300px', backgroundColor: '#f0f0f0', position: 'relative' }}>
                <img src={activity.image} alt={activity.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <button
                    onClick={() => router.back()}
                    style={{
                        position: 'absolute', top: '1rem', left: '1rem',
                        backgroundColor: 'white', border: 'none', borderRadius: '50%',
                        width: '2.5rem', height: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        cursor: 'pointer', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}
                >
                    <ArrowLeft size={20} />
                </button>
            </div>

            <div style={{ maxWidth: '800px', margin: '-2rem auto 0', position: 'relative', zIndex: 10, padding: '0 1rem' }}>
                <div style={{
                    backgroundColor: 'hsl(var(--card))',
                    borderRadius: 'var(--radius)',
                    border: '1px solid hsl(var(--border))',
                    padding: '1.5rem',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                        <div>
                            <Badge>{activity.category}</Badge>
                            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '0.5rem' }}>{activity.title}</h1>
                        </div>
                        <button style={{ padding: '0.5rem', borderRadius: '50%', border: '1px solid hsl(var(--border))', backgroundColor: 'transparent', cursor: 'pointer' }}>
                            <Share2 size={20} />
                        </button>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Calendar className="text-muted-foreground" size={20} />
                            <span>{activity.time}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <MapPin className="text-muted-foreground" size={20} />
                            <span>{activity.location}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Users className="text-muted-foreground" size={20} />
                            <span>{activity.attendees} / {activity.maxCapacity} attending</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <DollarSign className="text-muted-foreground" size={20} />
                            <span style={{ fontWeight: 600, color: 'hsl(var(--primary))' }}>{activity.price}</span>
                        </div>
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <h3 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>About this activity</h3>
                        <p style={{ lineHeight: '1.6', color: 'hsl(var(--muted-foreground))' }}>{activity.description}</p>
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <h3 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Host</h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <img src={activity.host.avatar} alt={activity.host.name} style={{ width: '3rem', height: '3rem', borderRadius: '50%', objectFit: 'cover' }} />
                            <div>
                                <div style={{ fontWeight: 500 }}>{activity.host.name}</div>
                                <div style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>Verified Host</div>
                            </div>
                        </div>
                    </div>

                    <Button fullWidth size="lg" onClick={handleJoin} disabled={joined} variant={joined ? 'secondary' : 'primary'}>
                        {joined ? 'You are going!' : 'Join Activity'}
                    </Button>
                </div>
            </div>
        </div>
    );
}
