'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/services/api';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/ui/Navbar';

export default function SignupPage() {
  const [formData, setFormData] = useState({ email: '', password: '', name: '', phone: '' });
  const [error, setError] = useState('');
  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/signup', formData);
      login(res.data.user, res.data.access_token);
      router.push('/');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex items-center justify-center pt-24 px-4">
        <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
          <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
          <p className="text-slate-400 mb-8">Join the safe haven of ListnerZone</p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
              <input
                type="text"
                required
                className="w-full bg-slate-800 border-slate-700 text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 transition-all"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
              <input
                type="email"
                required
                className="w-full bg-slate-800 border-slate-700 text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 transition-all"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Phone</label>
              <input
                type="text"
                required
                className="w-full bg-slate-800 border-slate-700 text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 transition-all"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Password</label>
              <input
                type="password"
                required
                minLength={6}
                className="w-full bg-slate-800 border-slate-700 text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 transition-all"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
            
            {error && <p className="text-red-400 text-sm">{error}</p>}
            
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/20 transition-all"
            >
              Sign Up
            </button>
          </form>
          
          <p className="text-slate-400 mt-6 text-center">
            Already have an account? <a href="/auth/login" className="text-blue-400 hover:underline">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}
