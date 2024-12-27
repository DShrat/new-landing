import React from "react";
import { PersonalInfoP } from "@/utils/types/types";

interface PersonalInfoProps {
    personalInfo: PersonalInfoP
}

export default function Footer({personalInfo}: PersonalInfoProps) {
    return(
        <footer className="py-8 backdrop-blur-md bg-black/30">
            <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
                <p>© 2024 {personalInfo.name}. All rights reserved.</p>
            </div>
        </footer>
    )
}