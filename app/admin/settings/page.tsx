'use client';

import React, { useState } from 'react';
import { Button } from '@/components/Button';

export default function AdminSettingsPage() {
    const [settings, setSettings] = useState({
        requireEventApproval: true,
        allowUserCreation: true,
        enableChat: true,
        maintenanceMode: false,
    });

    const toggle = (key: keyof typeof settings) => {
        setSettings(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div style={{ maxWidth: '600px' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>Platform Settings</h1>

            <div style={{ backgroundColor: 'hsl(var(--card))', borderRadius: 'var(--radius)', border: '1px solid hsl(var(--border))', overflow: 'hidden' }}>
                <div style={{ padding: '1.5rem', borderBottom: '1px solid hsl(var(--border))' }}>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Moderation & Content</h2>
                    <p style={{ color: 'hsl(var(--muted-foreground))' }}>Control how content is created and displayed.</p>
                </div>

                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <div style={{ fontWeight: 500 }}>Require Event Approval</div>
                            <div style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>Admins must approve events before they go public.</div>
                        </div>
                        <input
                            type="checkbox"
                            checked={settings.requireEventApproval}
                            onChange={() => toggle('requireEventApproval')}
                            style={{ width: '1.25rem', height: '1.25rem' }}
                        />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <div style={{ fontWeight: 500 }}>Enable User Chat</div>
                            <div style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>Allow users to message each other in groups.</div>
                        </div>
                        <input
                            type="checkbox"
                            checked={settings.enableChat}
                            onChange={() => toggle('enableChat')}
                            style={{ width: '1.25rem', height: '1.25rem' }}
                        />
                    </div>
                </div>

                <div style={{ padding: '1.5rem', borderTop: '1px solid hsl(var(--border))', borderBottom: '1px solid hsl(var(--border))', backgroundColor: 'hsl(var(--muted))' }}>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>System Access</h2>
                </div>

                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <div style={{ fontWeight: 500 }}>New User Registration</div>
                            <div style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>Allow new users to sign up.</div>
                        </div>
                        <input
                            type="checkbox"
                            checked={settings.allowUserCreation}
                            onChange={() => toggle('allowUserCreation')}
                            style={{ width: '1.25rem', height: '1.25rem' }}
                        />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <div style={{ fontWeight: 500, color: 'hsl(var(--destructive))' }}>Maintenance Mode</div>
                            <div style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>Disable the platform for all non-admin users.</div>
                        </div>
                        <input
                            type="checkbox"
                            checked={settings.maintenanceMode}
                            onChange={() => toggle('maintenanceMode')}
                            style={{ width: '1.25rem', height: '1.25rem' }}
                        />
                    </div>
                </div>

                <div style={{ padding: '1.5rem', borderTop: '1px solid hsl(var(--border))', textAlign: 'right' }}>
                    <Button>Save Changes</Button>
                </div>
            </div>
        </div>
    );
}
