'use client';

import React from 'react';
import { Settings, MapPin, Calendar, Award } from 'lucide-react';
import { Button } from '@/components/Button';
import { Badge } from '@/components/Badge';

// Mock user data
const USER = {
    name: 'Alex Johnson',
    location: 'Dubai Marina, Dubai',
    bio: 'Coffee lover and weekend hiker. Always looking for new adventures!',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=80',
    stats: {
        attended: 12,
        hosted: 3,
        friends: 45,
    },
    interests: ['Hiking', 'Coffee', 'Photography', 'Technology'],
};

export default function ProfilePage() {
    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', paddingBottom: '6rem' }}>
            {/* Header / Cover */}
            <div style={{ height: '150px', backgroundColor: 'hsl(var(--primary))', position: 'relative' }}>
                <div style={{
                    position: 'absolute',
                    bottom: '-3rem',
                    left: '1rem',
                    padding: '4px',
                    backgroundColor: 'hsl(var(--background))',
                    borderRadius: '50%'
                }}>
                    <img
                        src={USER.avatar}
                        alt={USER.name}
                        style={{ width: '6rem', height: '6rem', borderRadius: '50%', objectFit: 'cover' }}
                    />
                </div>
                <button style={{
                    position: 'absolute', top: '1rem', right: '1rem',
                    backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: 'none',
                    padding: '0.5rem', borderRadius: '50%', cursor: 'pointer'
                }}>
                    <Settings size={20} />
                </button>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '0 1rem' }}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{USER.name}</h1>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'hsl(var(--muted-foreground))', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                    <MapPin size={14} />
                    {USER.location}
                </div>

                <p style={{ marginTop: '1rem', lineHeight: '1.5' }}>{USER.bio}</p>

                {/* Stats */}
                <div style={{ display: 'flex', gap: '2rem', margin: '1.5rem 0', padding: '1rem 0', borderTop: '1px solid hsl(var(--border))', borderBottom: '1px solid hsl(var(--border))' }}>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>{USER.stats.attended}</div>
                        <div style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))' }}>Events</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>{USER.stats.hosted}</div>
                        <div style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))' }}>Hosted</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>{USER.stats.friends}</div>
                        <div style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))' }}>Friends</div>
                    </div>
                </div>

                {/* Interests */}
                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontWeight: 600, marginBottom: '0.75rem' }}>Interests</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {USER.interests.map(interest => (
                            <Badge key={interest} variant="secondary">
                                {interest}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* Badges/Gamification */}
                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontWeight: 600, marginBottom: '0.75rem' }}>Badges</h3>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem', width: '60px' }}>
                            <div style={{ width: '3rem', height: '3rem', backgroundColor: '#f0f0f0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f59e0b' }}>
                                <Award size={24} />
                            </div>
                            <span style={{ fontSize: '0.7rem', textAlign: 'center' }}>Explorer</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem', width: '60px' }}>
                            <div style={{ width: '3rem', height: '3rem', backgroundColor: '#f0f0f0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981' }}>
                                <Calendar size={24} />
                            </div>
                            <span style={{ fontSize: '0.7rem', textAlign: 'center' }}>Host</span>
                        </div>
                    </div>
                </div>

                <Button variant="outline" fullWidth>Edit Profile</Button>
            </div>
        </div>
    );
}
