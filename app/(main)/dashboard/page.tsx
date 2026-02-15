'use client';

import React from 'react';
import { ActivityCard } from '@/components/ActivityCard';
import { FeedItem } from '@/components/FeedItem';
import Link from 'next/link';

export default function DashboardPage() {
    const activities = [
        {
            id: 1,
            title: 'Sunset Yoga on the Beach',
            category: 'Fitness',
            location: 'Kite Beach, Dubai',
            time: 'Today, 6:00 PM',
            attendees: 12,
            maxCapacity: 20,
            image: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?w=400&q=80',
            price: 'Free',
        },
        {
            id: 2,
            title: 'Coffee Tasting & Workshop',
            category: 'Food & Drink',
            location: 'Raw Coffee Company',
            time: 'Tomorrow, 10:00 AM',
            attendees: 5,
            maxCapacity: 10,
            image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=400&q=80',
            price: '50 AED',
        },
        {
            id: 3,
            title: 'Board Game Night',
            category: 'Social',
            location: 'Unwind Cafe',
            time: 'Fri, 8:00 PM',
            attendees: 4,
            maxCapacity: 6,
            image: 'https://images.unsplash.com/photo-1610890716171-6b1c9f2bd402?w=400&q=80',
            price: '20 AED',
        },
    ];

    const feedItems = [
        {
            id: 1,
            user: {
                name: 'Sarah Jenkins',
                avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
                location: 'Dubai Marina',
            },
            image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80',
            caption: 'Had an amazing hike today with the groups! Can’t wait for the next one. 🏔️ #HikingDubai',
            likes: 124,
        },
        {
            id: 2,
            user: {
                name: 'Ahmed Al-Farsi',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
                location: 'Downtown Dubai',
            },
            image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&q=80',
            caption: 'Great turnout at the chess tournament! ♟️ Who is up for a rematch next week?',
            likes: 89,
        },
        {
            id: 3,
            user: {
                name: 'Elena Rodriguez',
                avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80',
                location: 'Jumeirah Beach',
            },
            image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80',
            caption: 'Sunset vibes with the best community 🌅 #DubaiLife #Community',
            likes: 245,
        },
        {
            id: 4,
            user: {
                name: 'Mike Chen',
                avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
                location: 'Business Bay',
            },
            image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80',
            caption: 'Productive co-working session today. Thanks for hosting @TechHub!',
            likes: 56,
        }
    ];

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '1rem 1rem 6rem 1rem' }}>
            <header style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Hello, Alex 👋</h1>
                    <p style={{ color: 'hsl(var(--muted-foreground))' }}>Find something to do today</p>
                </div>
                <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: 'hsl(var(--muted))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    🔔
                </div>
            </header>

            <section style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Suggested for You</h2>
                    <span style={{ color: 'hsl(var(--primary))', fontSize: '0.875rem', fontWeight: '500', cursor: 'pointer' }}>See all</span>
                </div>
                <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: '0.5rem', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    {/* Hide scrollbar for cleaner look */}
                    <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
                    {activities.map((activity) => (
                        <Link key={activity.id} href={`/activities/${activity.id}`}>
                            <ActivityCard
                                {...activity}
                            />
                        </Link>
                    ))}
                </div>
            </section>

            <section>
                <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Community Feed</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {feedItems.map((item) => (
                        <FeedItem key={item.id} {...item} />
                    ))}
                </div>
            </section>
        </div>
    );
}
