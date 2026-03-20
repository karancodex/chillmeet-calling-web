'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  LiveKitRoom,
  VideoConference,
  RoomAudioRenderer,
  ControlBar,
  useTracks,
} from '@livekit/components-react';
import { Track } from 'livekit-client';
import { useSocket } from '@/hooks/useSocket';
import { Timer, PhoneOff, AlertCircle } from 'lucide-react';

interface CallRoomProps {
  token: string;
  sessionId: string;
  duration: number;
  isListener?: boolean;
  onEnd: () => void;
}

export default function CallRoom({ token, sessionId, duration, isListener, onEnd }: CallRoomProps) {
  const [showDisclaimer, setShowDisclaimer] = useState(!isListener);
  const [remainingTime, setRemainingTime] = useState(duration * 60);
  const [isTimerRunning, setIsTimerRunning] = useState(isListener || false);
  const socket = useSocket(sessionId);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!socket) return;

    const handleTimerUpdate = (data: { remainingSeconds: number }) => {
      setRemainingTime(data.remainingSeconds);
      // Start the local timer as soon as we get updates
      setIsTimerRunning(true);
    };

    const handleTimerEnd = () => {
      alert('Session time completed.');
      onEnd();
    };

    const handleCallEnded = (data: { message?: string }) => {
      alert(data.message || 'The call has ended.');
      onEnd();
    };

    const handleUserLeft = () => {
      alert('The other person has left the call.');
      onEnd();
    };

    const handleCallEnd = () => {
      onEnd();
    };

    socket.on('timer:update', handleTimerUpdate);
    socket.on('timer:end', handleTimerEnd);
    socket.on('call:ended', handleCallEnded);
    socket.on('call:user-left', handleUserLeft);
    socket.on('call:end', handleCallEnd);

    return () => {
      socket.off('timer:update', handleTimerUpdate);
      socket.off('timer:end', handleTimerEnd);
      socket.off('call:ended', handleCallEnded);
      socket.off('call:user-left', handleUserLeft);
      socket.off('call:end', handleCallEnd);
    };
  }, [socket, onEnd]);

  // Local timer ticking
  useEffect(() => {
    if (isTimerRunning) {
      timerIntervalRef.current = setInterval(() => {
        setRemainingTime((prev) => Math.max(0, prev - 1));
      }, 1000);
    } else {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    }

    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, [isTimerRunning]);

  const handleStartCall = () => {
    setShowDisclaimer(false);
    setIsTimerRunning(true);
    // In a real app, we would play the audio here
    // const audio = new Audio('/disclaimer.mp3');
    // audio.play();
    // audio.onended = () => setShowDisclaimer(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (showDisclaimer) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
        <div className="max-w-md w-full bg-slate-900 border border-slate-700 rounded-2xl p-8 text-center space-y-6">
          <div className="mx-auto w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
            <AlertCircle className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold text-white">Important Disclaimer</h2>
          <p className="text-slate-400 text-lg">
            "This service provides emotional listening support only and is not medical advice."
          </p>
          <button
            onClick={handleStartCall}
            className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-600/20"
          >
            I Understand, Start Call
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-screen bg-black">
      <LiveKitRoom
        video={false}
        audio={true}
        token={token}
        serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
        onDisconnected={() => {
          if (socket) {
            socket.emit('call:end', { sessionId });
          }
          onEnd();
        }}
        className="h-full flex flex-col"
      >
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10">
          <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700 px-6 py-2 rounded-full flex items-center gap-3 shadow-xl">
            <Timer className="w-5 h-5 text-blue-400 animate-pulse" />
            <span className="text-white font-mono text-xl tabular-nums">
              {formatTime(remainingTime)}
            </span>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-8">
            <div className="w-32 h-32 mx-auto bg-blue-600 rounded-full flex items-center justify-center relative">
              <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-25"></div>
              <div className="absolute -inset-4 bg-blue-600 rounded-full animate-pulse opacity-10"></div>
              <PhoneOff className="w-12 h-12 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mt-4">In-Call Support</h3>
              <p className="text-slate-400">Audio stream established</p>
            </div>
          </div>
        </div>

        <div className="p-8 flex items-center justify-center gap-4 sticky bottom-0">
          <ControlBar
            className="rounded-2xl border border-slate-700 bg-slate-900/80 backdrop-blur-md p-2"
            variation="minimal"
            controls={{ leave: false }} // Hide default leave button
          />
          <button
            onClick={() => {
              if (socket) {
                socket.emit('call:end', { sessionId });
              }
              onEnd();
            }}
            className="h-12 w-12 flex items-center justify-center rounded-2xl bg-red-500 hover:bg-red-400 text-white transition-all shadow-lg shadow-red-500/20"
            title="End Call"
          >
            <PhoneOff className="w-6 h-6" />
          </button>
        </div>

        <RoomAudioRenderer />
      </LiveKitRoom>
    </div>
  );
}
