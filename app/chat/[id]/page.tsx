'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Send } from 'lucide-react';
import { ChatBubble } from '@/components/ChatBubble';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

const INITIAL_MESSAGES = [
    { id: 1, text: 'Hey everyone! Are we still on for yoga tomorrow?', isMe: false, time: '10:00 AM', sender: 'Sarah' },
    { id: 2, text: 'Yes! I will be there.', isMe: true, time: '10:05 AM' },
    { id: 3, text: 'Me too. Looking forward to it.', isMe: false, time: '10:10 AM', sender: 'John' },
    { id: 4, text: 'Great! Don\'t forget water.', isMe: false, time: '10:15 AM', sender: 'Sarah' },
];

export default function ChatRoomPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = React.use(params);
    const router = useRouter();
    const [messages, setMessages] = useState(INITIAL_MESSAGES);
    const [newMessage, setNewMessage] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newMessage.trim()) return;

        const msg = {
            id: messages.length + 1,
            text: newMessage,
            isMe: true,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };

        setMessages([...messages, msg]);
        setNewMessage('');

        // Simulate reply
        setTimeout(() => {
            const reply = {
                id: messages.length + 2,
                text: 'Sounds good!',
                isMe: false,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                sender: 'Sarah',
            };
            setMessages(prev => [...prev, reply]);
        }, 2000);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: 'hsl(var(--background))' }}>
            {/* Header */}
            <div style={{
                padding: '1rem',
                borderBottom: '1px solid hsl(var(--border))',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                backgroundColor: 'hsl(var(--card))',
                position: 'sticky',
                top: 0,
                zIndex: 10
            }}>
                <button onClick={() => router.back()} style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
                    <ArrowLeft size={24} />
                </button>
                <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600 }}>Sunset Yoga Group</div>
                    <div style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))' }}>3 participants</div>
                </div>
            </div>

            {/* Messages */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '1rem' }}>
                {messages.map((msg) => (
                    <ChatBubble
                        key={msg.id}
                        message={msg.text}
                        isMe={msg.isMe}
                        time={msg.time}
                        senderName={msg.sender}
                    />
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
                onSubmit={handleSend}
                style={{
                    padding: '1rem',
                    borderTop: '1px solid hsl(var(--border))',
                    backgroundColor: 'hsl(var(--card))',
                    display: 'flex',
                    gap: '0.75rem',
                    position: 'sticky',
                    bottom: 0 // Adjust for mobile keyboard or safe area if needed
                }}
            >
                <Input
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type a message..."
                    style={{ borderRadius: '1.5rem' }}
                />
                <Button type="submit" style={{ borderRadius: '50%', width: '2.5rem', height: '2.5rem', padding: 0 }}>
                    <Send size={18} />
                </Button>
            </form>
        </div>
    );
}
