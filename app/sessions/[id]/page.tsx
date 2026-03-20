'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import api from '@/services/api';
import CallRoom from '@/components/features/CallRoom';
import { Loader2 } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useSocket } from '@/hooks/useSocket';

export default function SessionPage() {
  const { id: bookingId } = useParams();
  const [token, setToken] = useState<string | null>(null);
  const [session, setSession] = useState<any>(null);
  const [listenerId, setListenerId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { user } = useAuth();
  const hasStartedRef = useRef(false);
  
  // Connect to socket to trigger notification
  const socket = useSocket(undefined, user?.id);

  useEffect(() => {
    const startSession = async () => {
      if (hasStartedRef.current) return;
      hasStartedRef.current = true;

      try {
        const res = await api.post('/sessions/start', { bookingId });
        setToken(res.data.token);
        setSession(res.data.session);
        setListenerId(res.data.listenerId);
        
        // Notify the listener only if the current user is NOT that listener
        if (socket && user?.listenerId !== res.data.listenerId) {
          socket.emit('call:initiate', {
            bookingId: bookingId,
            listenerId: res.data.listenerId,
            callerName: user?.name || 'Anonymous Seeker'
          });
        }
      } catch (err: any) {
        setError(err.response?.data?.message || 'Failed to start session');
      }
    };

    if (bookingId && socket) {
      startSession();
    }
  }, [bookingId, socket, user]);

  if (error) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
        <div className="bg-slate-900 border border-red-900/50 p-8 rounded-2xl max-w-md text-center">
          <h1 className="text-2xl font-bold text-red-500 mb-4">Error</h1>
          <p className="text-slate-400 mb-6">{error}</p>
          <button
            onClick={() => router.push('/')}
            className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  if (!token || !session) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center">
        <Loader2 className="w-12 h-12 text-blue-500 animate-spin mb-4" />
        <p className="text-slate-400">Initializing secure session...</p>
      </div>
    );
  }

  const isListener = user?.listenerId === listenerId;

  return (
    <CallRoom
      token={token}
      sessionId={session.id}
      duration={session.duration}
      isListener={isListener}
      onEnd={() => router.push('/')}
    />
  );
}
