'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Select } from '@/components/Select';
import { Badge } from '@/components/Badge';

const LOCATIONS = [
    { label: 'Dubai', value: 'Dubai' },
    { label: 'Abu Dhabi', value: 'Abu Dhabi' },
    { label: 'Sharjah', value: 'Sharjah' },
    { label: 'Ajman', value: 'Ajman' },
    { label: 'RAK', value: 'RAK' },
    { label: 'UAQ', value: 'UAQ' },
    { label: 'Fujairah', value: 'Fujairah' },
    { label: 'Al Ain', value: 'Al Ain' },
    { label: 'Lebanon', value: 'Lebanon' },
];

const INTERESTS_LIST = [
    'Food', 'Sports', 'Outdoor Activities', 'Arts & Culture',
    'Business & Startups', 'Technology', 'Fashion',
    'Camping', 'Hiking', 'Adventure', 'Music & Nightlife',
    'Coffee', 'Shisha', 'Board Games', 'Yoga', 'Fitness',
    'Photography', 'Reading', 'Travel', 'Gaming'
];

export default function OnboardingPage() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        fullName: '',
        location: '',
        age: '',
        gender: '',
        nationality: '',
        interests: [] as string[],
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const toggleInterest = (interest: string) => {
        setFormData(prev => {
            const exists = prev.interests.includes(interest);
            if (exists) {
                return { ...prev, interests: prev.interests.filter(i => i !== interest) };
            } else {
                return { ...prev, interests: [...prev.interests, interest] };
            }
        });
    };

    const handleNext = () => {
        if (step === 1) {
            // Validate Step 1
            if (!formData.fullName || !formData.location || !formData.age || !formData.gender) {
                alert('Please fill in all required fields.');
                return;
            }
            if (parseInt(formData.age) < 21) {
                alert('You must be 21+ to join.');
                return;
            }
            setStep(2);
        } else {
            // Submit
            handleSubmit();
        }
    };

    const handleSubmit = async () => {
        setLoading(true);
        // Simulate API call
        console.log('Submitting profile:', formData);

        // In real app: await supabase.from('profiles').update(...).eq('id', user.id)

        setTimeout(() => {
            setLoading(false);
            router.push('/dashboard');
        }, 1000);
    };

    return (
        <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '1rem' }}>
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                    {step === 1 ? 'Tell us about yourself' : 'What are you into?'}
                </h1>
                <p style={{ color: 'hsl(var(--muted-foreground))' }}>
                    Step {step} of 2
                </p>
            </div>

            {step === 1 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <Input
                        label="Full Name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. John Doe"
                    />

                    <Select
                        label="Location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        options={LOCATIONS}
                    />

                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <Input
                            label="Age"
                            name="age"
                            type="number"
                            min="21"
                            value={formData.age}
                            onChange={handleInputChange}
                            placeholder="21+"
                            style={{ width: '100px' }}
                        />

                        <Select
                            label="Gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleInputChange}
                            options={[
                                { label: 'Male', value: 'Male' },
                                { label: 'Female', value: 'Female' }
                            ]}
                            style={{ flex: 1 }}
                        />
                    </div>

                    <Input
                        label="Nationality"
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleInputChange}
                        placeholder="e.g. UAE"
                    />

                    <Button onClick={handleNext} fullWidth>
                        Next: Select Interests
                    </Button>
                </div>
            )}

            {step === 2 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <p>Select at least 3 interests to get started.</p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {INTERESTS_LIST.map((interest) => (
                            <Badge
                                key={interest}
                                variant={'default'}
                                selected={formData.interests.includes(interest)}
                                onClick={() => toggleInterest(interest)}
                                style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}
                            >
                                {interest}
                            </Badge>
                        ))}
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                        <Button variant="outline" onClick={() => setStep(1)} fullWidth>
                            Back
                        </Button>
                        <Button
                            onClick={handleSubmit}
                            fullWidth
                            disabled={loading || formData.interests.length < 3}
                        >
                            {loading ? 'Setting up...' : 'Complete Setup'}
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}
