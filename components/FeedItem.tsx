import React, { useState } from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

interface FeedItemProps {
    user: {
        name: string;
        avatar: string;
        location: string;
    };
    image: string;
    caption: string;
    likes: number;
}

export function FeedItem({ user, image, caption, likes: initialLikes }: FeedItemProps) {
    const [likes, setLikes] = useState(initialLikes);
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        if (isLiked) {
            setLikes(prev => prev - 1);
        } else {
            setLikes(prev => prev + 1);
        }
        setIsLiked(!isLiked);
    };

    return (
        <div style={{
            backgroundColor: 'hsl(var(--card))',
            borderRadius: 'var(--radius)',
            border: '1px solid hsl(var(--border))',
            overflow: 'hidden',
            marginBottom: '1rem'
        }}>
            <div style={{ padding: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: '#ddd', overflow: 'hidden' }}>
                    <img src={user.avatar} alt={user.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                    <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{user.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))' }}>{user.location}</div>
                </div>
            </div>

            <div style={{ width: '100%', aspectRatio: '4/5', backgroundColor: '#f0f0f0' }}>
                <img src={image} alt="Feed" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div style={{ padding: '0.75rem' }}>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.5rem' }}>
                    <button onClick={handleLike} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                        <Heart size={24} fill={isLiked ? 'red' : 'none'} color={isLiked ? 'red' : 'currentColor'} />
                    </button>
                    <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                        <MessageCircle size={24} />
                    </button>
                    <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                        <Share2 size={24} />
                    </button>
                </div>
                <div style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.25rem' }}>
                    {likes} likes
                </div>
                <div style={{ fontSize: '0.875rem' }}>
                    <span style={{ fontWeight: 600, marginRight: '0.5rem' }}>{user.name}</span>
                    {caption}
                </div>
            </div>
        </div>
    );
}
