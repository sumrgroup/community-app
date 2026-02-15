'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { ActivityCard } from '@/components/ActivityCard';
import { Badge } from '@/components/Badge';

const CATEGORIES = ['All', 'Sports', 'Food', 'Social', 'Outdoor', 'Art', 'Music', 'Tech'];

const ACTIVITIES = [
    {
        id: 1,
        title: 'Sunset Yoga on the Beach',
        category: 'Sports',
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
        category: 'Food',
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
    {
        id: 4,
        title: 'Desert Safari & BBQ',
        category: 'Outdoor',
        location: 'Al Qudra',
        time: 'Sat, 3:00 PM',
        attendees: 15,
        maxCapacity: 30,
        image: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=400&q=80',
        price: '150 AED',
    },
    {
        id: 5,
        title: 'Pottery Making Class',
        category: 'Art',
        location: 'Alserkal Avenue',
        time: 'Sun, 11:00 AM',
        attendees: 8,
        maxCapacity: 12,
        image: 'https://images.unsplash.com/photo-1565193566173-7a646c9f913a?w=400&q=80',
        price: '200 AED',
    },
    {
        id: 6,
        title: 'Jazz Night',
        category: 'Music',
        location: 'Blue Bar, Dubai',
        time: 'Fri, 9:00 PM',
        attendees: 25,
        maxCapacity: 50,
        image: 'https://images.unsplash.com/photo-1511192336575-5a79af671694?w=400&q=80',
        price: 'Free Entry',
    },
    {
        id: 7,
        title: 'Tech Meetup: AI Futures',
        category: 'Tech',
        location: 'DIFC FinTech Hive',
        time: 'Mon, 6:30 PM',
        attendees: 42,
        maxCapacity: 60,
        image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=400&q=80',
        price: 'Free',
    },
    {
        id: 8,
        title: 'Morning Cycling Bundle',
        category: 'Sports',
        location: 'Al Qudra Cycle Track',
        time: 'Sat, 5:30 AM',
        attendees: 6,
        maxCapacity: 10,
        image: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=400&q=80',
        price: 'Free',
    },
    {
        id: 9,
        title: 'Padel Tennis Tournament',
        category: 'Sports',
        location: 'Emirates Golf Club',
        time: 'Sun, 4:00 PM',
        attendees: 16,
        maxCapacity: 32,
        image: 'https://images.unsplash.com/photo-1622163642998-1ea36b1dde3b?w=400&q=80',
        price: '100 AED',
    }
];

export default function ActivitiesPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredActivities = selectedCategory === 'All'
        ? ACTIVITIES
        : ACTIVITIES.filter(a => a.category === selectedCategory);

    return (
        <div style={{ padding: '4rem 1rem 6rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
            <header style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Find Activities</h1>
                    <Link href="/activities/create" style={{
                        width: '3rem', height: '3rem', borderRadius: '50%',
                        backgroundColor: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}>
                        <Plus size={24} />
                    </Link>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.5rem', scrollbarWidth: 'none' }}>
                    {CATEGORIES.map(cat => (
                        <Badge
                            key={cat}
                            variant="default"
                            selected={selectedCategory === cat}
                            onClick={() => setSelectedCategory(cat)}
                            style={{ whiteSpace: 'nowrap' }}
                        >
                            {cat}
                        </Badge>
                    ))}
                </div>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {filteredActivities.map(activity => (
                    <Link key={activity.id} href={`/activities/${activity.id}`}>
                        <ActivityCard {...activity} />
                    </Link>
                ))}
            </div>
        </div>
    );
}
