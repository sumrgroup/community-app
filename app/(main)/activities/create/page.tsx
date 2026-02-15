'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { ArrowLeft, Image as ImageIcon } from 'lucide-react';

const CATEGORIES = ['Sports', 'Food', 'Social', 'Outdoor', 'Art', 'Music', 'Tech'];

export default function CreateActivityPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        category: CATEGORIES[0],
        date: '',
        time: '',
        location: '',
        price: '',
        capacity: '',
        description: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            alert('Activity created successfully! It is pending admin approval.');
            router.push('/dashboard');
        }, 1500);
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', paddingBottom: '6rem' }}>
            <div style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', borderBottom: '1px solid hsl(var(--border))' }}>
                <button onClick={() => router.back()} style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
                    <ArrowLeft size={24} />
                </button>
                <h1 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Create Function</h1>
            </div>

            <form onSubmit={handleSubmit} style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                {/* Image Upload Placeholder */}
                <div style={{
                    height: '200px',
                    backgroundColor: 'hsl(var(--muted))',
                    borderRadius: 'var(--radius)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px dashed hsl(var(--border))',
                    cursor: 'pointer',
                    color: 'hsl(var(--muted-foreground))'
                }}>
                    <ImageIcon size={48} />
                    <span style={{ marginTop: '0.5rem', fontWeight: 500 }}>Add Cover Photo</span>
                </div>

                <Input
                    label="Activity Title"
                    name="title"
                    placeholder="e.g. Sunset Yoga"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>Category</label>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                type="button"
                                onClick={() => setFormData(prev => ({ ...prev, category: cat }))}
                                style={{
                                    padding: '0.5rem 1rem',
                                    borderRadius: '2rem',
                                    border: `1px solid ${formData.category === cat ? 'hsl(var(--primary))' : 'hsl(var(--border))'}`,
                                    backgroundColor: formData.category === cat ? 'hsl(var(--primary))' : 'transparent',
                                    color: formData.category === cat ? 'hsl(var(--primary-foreground))' : 'hsl(var(--foreground))',
                                    cursor: 'pointer',
                                    fontSize: '0.875rem',
                                    transition: 'all 0.2s'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <Input
                        label="Date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        label="Time"
                        name="time"
                        type="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                    />
                </div>

                <Input
                    label="Location"
                    name="location"
                    placeholder="e.g. Kite Beach"
                    value={formData.location}
                    onChange={handleChange}
                    required
                />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <Input
                        label="Price (AED)"
                        name="price"
                        placeholder="0 for Free"
                        value={formData.price}
                        onChange={handleChange}
                    />
                    <Input
                        label="Max Capacity"
                        name="capacity"
                        type="number"
                        placeholder="e.g. 10"
                        value={formData.capacity}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>Description</label>
                    <textarea
                        name="description"
                        rows={5}
                        placeholder="Describe your activity..."
                        value={formData.description}
                        onChange={handleChange}
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            borderRadius: 'var(--radius)',
                            border: '1px solid hsl(var(--border))',
                            backgroundColor: 'hsl(var(--background))',
                            color: 'hsl(var(--foreground))',
                            fontSize: '0.875rem',
                            resize: 'vertical',
                            outline: 'none'
                        }}
                        required
                    />
                </div>

                <Button type="submit" size="lg" disabled={isLoading} fullWidth>
                    {isLoading ? 'Creating...' : 'Create Activity'}
                </Button>
            </form>
        </div>
    );
}
