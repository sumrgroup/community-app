import React from 'react';

interface ChatBubbleProps {
    message: string;
    isMe: boolean;
    time: string;
    senderName?: string;
}

export function ChatBubble({ message, isMe, time, senderName }: ChatBubbleProps) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: isMe ? 'flex-end' : 'flex-start',
            marginBottom: '1rem',
            maxWidth: '80%'
        }}>
            {!isMe && senderName && (
                <span style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))', marginBottom: '0.25rem', marginLeft: '0.5rem' }}>
                    {senderName}
                </span>
            )}
            <div style={{
                backgroundColor: isMe ? 'hsl(var(--primary))' : 'hsl(var(--secondary))',
                color: isMe ? 'hsl(var(--primary-foreground))' : 'hsl(var(--secondary-foreground))',
                padding: '0.75rem 1rem',
                borderRadius: '1rem',
                borderBottomRightRadius: isMe ? '0.25rem' : '1rem',
                borderBottomLeftRadius: isMe ? '1rem' : '0.25rem',
                fontSize: '0.9rem',
                lineHeight: '1.4'
            }}>
                {message}
            </div>
            <span style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))', marginTop: '0.25rem', margin: '0 0.5rem' }}>
                {time}
            </span>
        </div>
    );
}
