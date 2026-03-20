'use client';

import React, { useEffect, useState } from 'react';
import { useSocket } from '@/hooks/useSocket';
import { useAuth } from '@/contexts/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, PhoneOff, Check } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function CallNotification() {
  const { user } = useAuth();
  const socket = useSocket(undefined, user?.id, user?.listenerId);
  const [incomingCall, setIncomingCall] = useState<{ bookingId: string; callerName: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!socket) return;

    socket.on('call:incoming', (data) => {
      console.log('Incoming call notification:', data);
      setIncomingCall(data);
      // Placeholder for ringing sound
      // const audio = new Audio('/sounds/calling.mp3');
      // audio.play().catch(e => console.warn('Audio play failed', e));
    });

    return () => {
      socket.off('call:incoming');
    };
  }, [socket]);

  const handleAccept = () => {
    if (incomingCall) {
      router.push(`/sessions/${incomingCall.bookingId}`);
      setIncomingCall(null);
    }
  };

  const handleReject = () => {
    setIncomingCall(null);
  };

  return (
    <AnimatePresence>
      {incomingCall && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 20, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="fixed top-0 left-1/2 -translate-x-1/2 z-[200] w-full max-w-md px-4"
        >
          <div className="bg-slate-900 border border-luxury-gold/30 rounded-3xl p-6 shadow-2xl flex items-center justify-between backdrop-blur-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-luxury-gold/20 rounded-full flex items-center justify-center animate-pulse">
                <Phone className="text-luxury-gold w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Incoming Call</p>
                <h4 className="text-white font-black text-lg">{incomingCall.callerName}</h4>
              </div>
            </div>

            <div className="flex gap-3">
              <button 
                onClick={handleReject}
                className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center hover:bg-red-500 transition-all text-red-500 hover:text-white"
              >
                <PhoneOff className="w-5 h-5" />
              </button>
              <button 
                onClick={handleAccept}
                className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center hover:bg-green-500 transition-all text-green-500 hover:text-white"
              >
                <Check className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
