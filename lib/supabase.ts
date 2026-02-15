import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

const isMock = supabaseUrl.includes('example.supabase.co') || !supabaseUrl

// Mock client for demo purposes when no real Supabase credentials are provided
const mockClient = {
    auth: {
        signUp: async ({ email, password }: any) => {
            console.log('Mock SignUp:', email);
            // Simulate network delay
            await new Promise(resolve => setTimeout(resolve, 500));
            return { data: { user: { email } }, error: null };
        },
        signInWithPassword: async ({ email, password }: any) => {
            console.log('Mock SignIn:', email);
            await new Promise(resolve => setTimeout(resolve, 500));
            return { data: { user: { email } }, error: null };
        },
        signOut: async () => ({ error: null }),
        onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => { } } } }),
        getSession: async () => ({ data: { session: null }, error: null }),
    },
    from: (table: string) => {
        // Basic chainable mock
        const queryBuilder: any = {
            select: () => queryBuilder,
            insert: () => queryBuilder,
            update: () => queryBuilder,
            delete: () => queryBuilder,
            eq: () => queryBuilder,
            order: () => queryBuilder,
            single: async () => ({ data: null, error: null }),
            then: (resolve: any) => resolve({ data: [], error: null }),
        };
        return queryBuilder;
    }
};

export const supabase = isMock
    ? (mockClient as any)
    : createClient(supabaseUrl, supabaseAnonKey)
