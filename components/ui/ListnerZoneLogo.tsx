import React from 'react';

export default function ListnerZoneLogo({ className = "w-10 h-10", color = "white" }: { className?: string, color?: string }) {
    return (
        <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Chat Bubble Base */}
            <path
                d="M50 5C25.147 5 5 22.91 5 45C5 58.75 13.9 70.84 27.5 78.1C27.5 88 22 93 18 95C27.5 95 38 90 44.5 84.5C46.3 84.8 48.1 85 50 85C74.853 85 95 67.09 95 45C95 22.91 74.853 5 50 5Z"
                stroke={color}
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {/* Abstract Lotus / Sound Wave inside */}
            <path
                d="M50 25C50 25 35 35 35 50C35 60 45 65 50 65C55 65 65 60 65 50C65 35 50 25 50 25Z"
                stroke={color}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M50 25C50 25 25 40 25 55"
                stroke={color}
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.7"
            />
            <path
                d="M50 25C50 25 75 40 75 55"
                stroke={color}
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.7"
            />
            <path
                d="M50 65V75"
                stroke={color}
                strokeWidth="3"
                strokeLinecap="round"
            />
        </svg>
    );
}
