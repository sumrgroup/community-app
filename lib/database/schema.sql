-- Community App Database Schema

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. USERS
-- Handled by Supabase Auth (auth.users), but we need a public profile table.
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  phone_number TEXT,
  avatar_url TEXT,
  location TEXT, -- e.g., 'Dubai', 'Abu Dhabi'
  age INTEGER CHECK (age >= 21),
  gender TEXT CHECK (gender IN ('Male', 'Female')),
  nationality TEXT,
  bio TEXT,
  is_verified BOOLEAN DEFAULT FALSE,
  is_banned BOOLEAN DEFAULT FALSE,
  role TEXT DEFAULT 'user' CHECK (role IN ('user', 'admin')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. INTERESTS
CREATE TABLE public.interests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT UNIQUE NOT NULL, -- e.g., 'Hiking', 'Coffee'
  category TEXT NOT NULL, -- e.g., 'Outdoor', 'Social'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Join table for User Interests
CREATE TABLE public.user_interests (
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  interest_id UUID REFERENCES public.interests(id) ON DELETE CASCADE,
  PRIMARY KEY (user_id, interest_id)
);

-- 3. ACTIVITIES / EVENTS
CREATE TABLE public.activities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  host_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL, -- specific user or admin
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL, -- Joined with interests or separate enum? Keep flexible.
  location_name TEXT NOT NULL,
  location_coordinates POINT, -- Optional: for map
  start_time TIMESTAMP WITH TIME ZONE NOT NULL,
  end_time TIMESTAMP WITH TIME ZONE,
  max_capacity INTEGER NOT NULL,
  current_participants INTEGER DEFAULT 0,
  price DECIMAL(10, 2) DEFAULT 0.00,
  currency TEXT DEFAULT 'AED',
  gender_filter TEXT DEFAULT 'Any' CHECK (gender_filter IN ('Any', 'Male', 'Female')),
  age_min INTEGER DEFAULT 21,
  age_max INTEGER,
  nationality_filter TEXT, -- Optional
  status TEXT DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'cancelled', 'completed')),
  is_featured BOOLEAN DEFAULT FALSE, -- For monthly social events
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. BOOKINGS
CREATE TABLE public.bookings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  activity_id UUID REFERENCES public.activities(id) ON DELETE CASCADE,
  status TEXT DEFAULT 'confirmed' CHECK (status IN ('confirmed', 'cancelled', 'attended', 'no-show')),
  booked_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  ticket_code TEXT UNIQUE -- For paid events
);

-- 5. CHAT (Simple structure for Activity Chat)
CREATE TABLE public.chat_messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  activity_id UUID REFERENCES public.activities(id) ON DELETE CASCADE,
  user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  message_text TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. JOBS (Job Hunting Hub)
CREATE TABLE public.jobs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  poster_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  company TEXT,
  description TEXT,
  contact_info TEXT,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'closed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 7. REVIEWS (Ratings)
CREATE TABLE public.reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  reviewer_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  target_user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL, -- Rate host/attendee
  activity_id UUID REFERENCES public.activities(id) ON DELETE CASCADE,
  rating INTEGER CHECK (rating BETWEEN 1 AND 5),
  comment TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS Policies (Row Level Security) would be added here in a real deployment
