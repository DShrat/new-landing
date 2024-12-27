import React from "react";

interface ScrollProgressbarProps {
    scrollProgress: number
}

export default function ProgressBar({scrollProgress}: ScrollProgressbarProps){
    return(
        <div 
            className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50"
            style={{ width: `${scrollProgress}%` }}
        />
    )
}