'use client';

import React from 'react';
import { Briefcase, MapPin, Clock, Bookmark, Share2 } from 'lucide-react';
import { Button } from '@/components/Button';
import { Badge } from '@/components/Badge';

const JOBS = [
    {
        id: 1,
        title: 'Community Manager',
        company: 'TechStart Dubai',
        location: 'DIFC, Dubai',
        type: 'Full-time',
        posted: '2 days ago',
        description: 'Looking for an energetic community manager to lead our startup hub events and engagement.',
        tags: ['Community', 'Events', 'Startup'],
    },
    {
        id: 2,
        title: 'Freelance Graphic Designer',
        company: 'Creative Studio',
        location: 'Remote / Dubai',
        type: 'Project-based',
        posted: '5 hours ago',
        description: 'Need a designer for a branding project. Experience with typography is a must.',
        tags: ['Design', 'Freelance', 'Remote'],
    },
    {
        id: 3,
        title: 'Barista',
        company: 'Specialty Coffee Co.',
        location: 'Al Quoz, Dubai',
        type: 'Part-time',
        posted: '1 day ago',
        description: 'Join our team of passionate coffee makers. Training provided.',
        tags: ['Hospitality', 'Coffee'],
    },
];

export default function JobsPage() {
    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '6rem' }}>
            <header style={{ padding: '2rem 1rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Job Hunting Hub</h1>
                <p style={{ color: 'hsl(var(--muted-foreground))' }}>Opportunities shared by the community.</p>
                <div style={{ marginTop: '1rem' }}>
                    <Button>Post a Job</Button>
                </div>
            </header>

            <div style={{ padding: '0 1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {JOBS.map(job => (
                    <div key={job.id} style={{
                        backgroundColor: 'hsl(var(--card))',
                        borderRadius: 'var(--radius)',
                        border: '1px solid hsl(var(--border))',
                        padding: '1.5rem',
                        transition: 'border-color 0.2s',
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>{job.title}</h3>
                                <div style={{ color: 'hsl(var(--primary))', fontWeight: 500 }}>{job.company}</div>
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <button style={{ padding: '0.5rem', borderRadius: '50%', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', color: 'hsl(var(--muted-foreground))' }}>
                                    <Bookmark size={20} />
                                </button>
                                <button style={{ padding: '0.5rem', borderRadius: '50%', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', color: 'hsl(var(--muted-foreground))' }}>
                                    <Share2 size={20} />
                                </button>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                <Briefcase size={16} />
                                {job.type}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                <MapPin size={16} />
                                {job.location}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                <Clock size={16} />
                                {job.posted}
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                            {job.tags.map(tag => (
                                <Badge key={tag} variant="secondary" style={{ fontSize: '0.75rem' }}>
                                    {tag}
                                </Badge>
                            ))}
                        </div>

                        <p style={{ marginBottom: '1.5rem', lineHeight: '1.5' }}>{job.description}</p>

                        <Button variant="outline" fullWidth>Apply Now</Button>
                    </div>
                ))}
            </div>
        </div>
    );
}
