'use client';

import React from 'react';
import Link from 'next/link';

const CHATS = [
    {
        id: 1,
        name: 'Sunset Yoga Group',
        lastMessage: 'See you all there!',
        time: '10:30 AM',
        unread: 2,
        avatar: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?w=100&q=80',
    },
    {
        id: 2,
        name: 'Sarah Jenkins',
        lastMessage: 'Thanks for the invite!',
        time: 'Yesterday',
        unread: 0,
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    },
    {
        id: 3,
        name: 'Board Game Night',
        lastMessage: 'Who is bringing Catan?',
        time: 'Mon',
        unread: 5,
        avatar: 'https://images.unsplash.com/photo-1610890716171-6b1c9f2bd402?w=100&q=80',
    },
];

export default function ChatListPage() {
    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '1rem' }}>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Messages</h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {CHATS.map((chat) => (
                    <Link
                        key={chat.id}
                        href={`/chat/${chat.id}`}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            padding: '1rem',
                            backgroundColor: 'hsl(var(--card))',
                            borderRadius: 'var(--radius)',
                            border: '1px solid hsl(var(--border))',
                            transition: 'background-color 0.2s',
                        }}
                    >
                        <div style={{ position: 'relative' }}>
                            <img
                                src={chat.avatar}
                                alt={chat.name}
                                style={{ width: '3rem', height: '3rem', borderRadius: '50%', objectFit: 'cover' }}
                            />
                            {chat.unread > 0 && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-2px',
                                    right: '-2px',
                                    backgroundColor: 'hsl(var(--primary))',
                                    color: 'white',
                                    borderRadius: '50%',
                                    width: '1.25rem',
                                    height: '1.25rem',
                                    fontSize: '0.75rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '2px solid hsl(var(--card))'
                                }}>
                                    {chat.unread}
                                </div>
                            )}
                        </div>

                        <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                                <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{chat.name}</span>
                                <span style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))' }}>{chat.time}</span>
                            </div>
                            <div style={{
                                fontSize: '0.875rem',
                                color: chat.unread > 0 ? 'hsl(var(--foreground))' : 'hsl(var(--muted-foreground))',
                                fontWeight: chat.unread > 0 ? 500 : 400,
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis'
                            }}>
                                {chat.lastMessage}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
