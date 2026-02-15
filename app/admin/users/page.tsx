'use client';

import React, { useState } from 'react';
import { Search, MoreHorizontal, CheckCircle, XCircle, ShieldAlert } from 'lucide-react';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Badge } from '@/components/Badge';

const USERS = [
    { id: 1, name: 'Alice Smith', email: 'alice@example.com', status: 'Active', verified: true, role: 'User', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80' },
    { id: 2, name: 'Bob Jones', email: 'bob@example.com', status: 'Pending', verified: false, role: 'User', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80' },
    { id: 3, name: 'Charlie Day', email: 'charlie@example.com', status: 'Banned', verified: true, role: 'User', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80' },
    { id: 4, name: 'Diana Prince', email: 'diana@example.com', status: 'Active', verified: true, role: 'Admin', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80' },
    { id: 5, name: 'Evan Wright', email: 'evan@example.com', status: 'Active', verified: true, role: 'User', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80' },
    { id: 6, name: 'Fiona Gallagher', email: 'fiona@example.com', status: 'Active', verified: false, role: 'User', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80' },
    { id: 7, name: 'George Michael', email: 'george@example.com', status: 'Pending', verified: false, role: 'User', image: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=100&q=80' },
    { id: 8, name: 'Hannah Lee', email: 'hannah@example.com', status: 'Active', verified: true, role: 'Moderator', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80' },
    { id: 9, name: 'Ian Somerhalder', email: 'ian@example.com', status: 'Banned', verified: false, role: 'User', image: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=100&q=80' },
    { id: 10, name: 'Julia Roberts', email: 'julia@example.com', status: 'Active', verified: true, role: 'User', image: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?w=100&q=80' },
];

export default function UserManagementPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [users, setUsers] = useState(USERS);
    const [editingUser, setEditingUser] = useState<any>(null);

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleEdit = (user: any) => {
        setEditingUser({ ...user });
    };

    const handleSave = () => {
        setUsers(users.map(u => u.id === editingUser.id ? editingUser : u));
        setEditingUser(null);
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>User Management</h1>
                <Button>Export CSV</Button>
            </div>

            <div style={{ marginBottom: '2rem', maxWidth: '400px' }}>
                <div style={{ position: 'relative' }}>
                    <Input
                        placeholder="Search users..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ paddingLeft: '2.5rem' }}
                    />
                    <Search size={18} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'hsl(var(--muted-foreground))' }} />
                </div>
            </div>

            <div style={{
                backgroundColor: 'hsl(var(--card))',
                borderRadius: 'var(--radius)',
                border: '1px solid hsl(var(--border))',
                overflow: 'hidden'
            }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid hsl(var(--border))', backgroundColor: 'hsl(var(--muted))' }}>
                            <th style={{ textAlign: 'left', padding: '1rem', fontWeight: 600 }}>User</th>
                            <th style={{ textAlign: 'left', padding: '1rem', fontWeight: 600 }}>Status</th>
                            <th style={{ textAlign: 'left', padding: '1rem', fontWeight: 600 }}>Role</th>
                            <th style={{ textAlign: 'left', padding: '1rem', fontWeight: 600 }}>Verified</th>
                            <th style={{ textAlign: 'right', padding: '1rem', fontWeight: 600 }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map(user => (
                            <tr key={user.id} style={{ borderBottom: '1px solid hsl(var(--border))' }}>
                                <td style={{ padding: '1rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <img src={user.image} alt={user.name} style={{ width: '2rem', height: '2rem', borderRadius: '50%', objectFit: 'cover' }} />
                                        <div>
                                            <div style={{ fontWeight: 500 }}>{user.name}</div>
                                            <div style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))' }}>{user.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td style={{ padding: '1rem' }}>
                                    <Badge variant={user.status === 'Active' ? 'default' : user.status === 'Pending' ? 'secondary' : 'outline'} style={{
                                        backgroundColor: user.status === 'Banned' ? 'hsl(var(--destructive))' : undefined,
                                        color: user.status === 'Banned' ? 'white' : undefined
                                    }}>
                                        {user.status}
                                    </Badge>
                                </td>
                                <td style={{ padding: '1rem' }}>{user.role}</td>
                                <td style={{ padding: '1rem' }}>
                                    {user.verified ? (
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#10b981' }}>
                                            <CheckCircle size={16} /> Verified
                                        </div>
                                    ) : (
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'hsl(var(--muted-foreground))' }}>
                                            <XCircle size={16} /> Unverified
                                        </div>
                                    )}
                                </td>
                                <td style={{ padding: '1rem', textAlign: 'right' }}>
                                    <button
                                        onClick={() => handleEdit(user)}
                                        style={{ padding: '0.5rem', borderRadius: '0.25rem', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', color: 'hsl(var(--primary))' }}
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Edit Modal */}
            {editingUser && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50
                }}>
                    <div style={{
                        backgroundColor: 'hsl(var(--card))', padding: '2rem', borderRadius: 'var(--radius)',
                        width: '100%', maxWidth: '400px',
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                    }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Edit User</h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Name</label>
                                <Input
                                    value={editingUser.name}
                                    onChange={e => setEditingUser({ ...editingUser, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Role</label>
                                <select
                                    value={editingUser.role}
                                    onChange={e => setEditingUser({ ...editingUser, role: e.target.value })}
                                    style={{ width: '100%', padding: '0.5rem', borderRadius: 'var(--radius)', border: '1px solid hsl(var(--border))' }}
                                >
                                    <option value="User">User</option>
                                    <option value="Admin">Admin</option>
                                    <option value="Moderator">Moderator</option>
                                </select>
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Status</label>
                                <select
                                    value={editingUser.status}
                                    onChange={e => setEditingUser({ ...editingUser, status: e.target.value })}
                                    style={{ width: '100%', padding: '0.5rem', borderRadius: 'var(--radius)', border: '1px solid hsl(var(--border))' }}
                                >
                                    <option value="Active">Active</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Banned">Banned</option>
                                </select>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <input
                                    type="checkbox"
                                    checked={editingUser.verified}
                                    onChange={e => setEditingUser({ ...editingUser, verified: e.target.checked })}
                                    id="verified-check"
                                />
                                <label htmlFor="verified-check">Verified User</label>
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                            <Button variant="outline" onClick={() => setEditingUser(null)}>Cancel</Button>
                            <Button onClick={handleSave}>Save Changes</Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
