import React from 'react'
import { Home, BookOpen, MessageSquare, User, CalendarDays,GraduationCap, Mail, Phone } from "lucide-react";
import { useNavigate } from 'react-router-dom';


function StFooter() {
    const navigation=useNavigate()
    return (
        <div>
            <footer className="bg-gray-800 text-white mt-12 max-sm:hidden">
                <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">

                    {/* Main Grid Layout: Responsive columns */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">

                        {/* 1. Branding Section (1/4 width on desktop) */}
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <GraduationCap className="h-6 w-6 text-indigo-400" />
                                <span className="text-xl font-bold">SchoolApp</span>
                            </div>
                            <p className="text-sm text-gray-400">
                                Empowering students with accessible education and management tools.
                            </p>
                        </div>

                        {/* 2. Quick Links Section (1/4 width) */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-indigo-300">Quick Links</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#home" className="text-gray-400 hover:text-indigo-400 transition">Dashboard</a></li>
                                <li><a href="#subjects" className="text-gray-400 hover:text-indigo-400 transition">Subjects</a></li>
                                <li><a href="#timetable" className="text-gray-400 hover:text-indigo-400 transition">Timetable</a></li>
                                <li><a href="#notifications" className="text-gray-400 hover:text-indigo-400 transition">Alerts</a></li>
                            </ul>
                        </div>

                        {/* 3. Resources Section (1/4 width) */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-indigo-300">Resources</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#privacy" className="text-gray-400 hover:text-indigo-400 transition">Privacy Policy</a></li>
                                <li><a href="#terms" className="text-gray-400 hover:text-indigo-400 transition">Terms of Use</a></li>
                                <li><a href="#faq" className="text-gray-400 hover:text-indigo-400 transition">FAQ</a></li>
                                <li><a href="#help" className="text-gray-400 hover:text-indigo-400 transition">Help Center</a></li>
                            </ul>
                        </div>

                        {/* 4. Contact Section (1/4 width) */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold mb-4 text-indigo-300">Get In Touch</h3>
                            <div className="flex items-center space-x-3 text-sm">
                                <Mail className="h-5 w-5 text-gray-400" />
                                <a href="mailto:support@schoolapp.com" className="text-gray-400 hover:text-indigo-400 transition">support@schoolapp.com</a>
                            </div>
                            <div className="flex items-center space-x-3 text-sm">
                                <Phone className="h-5 w-5 text-gray-400" />
                                <a href="tel:+1234567890" className="text-gray-400 hover:text-indigo-400 transition">+1 (234) 567-890</a>
                            </div>
                        </div>

                    </div>

                    {/* Copyright/Bottom Bar */}
                    <div className="pt-6 text-center text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} SchoolApp. All rights reserved.
                    </div>
                </div>
            </footer>
            {/* ------------------------------------------------------------------------------------------------ */}
            <div className="bg-white fixed bottom-0 z-20 w-full shadow-t border-t border-gray-200 sm:hidden">
                <div className="flex justify-around text-gray-700 font-medium py-3">
                    {/* Home */}
                    <div className="flex flex-col items-center cursor-pointer hover:text-blue-600 hover:scale-105 transition-all"
                     onClick={()=>navigation("/")}
                    >
                        <Home size={22} />
                        <span className="text-sm mt-1">Home</span>
                    </div>

                    {/* Assignment */}
                    <div className="flex flex-col items-center cursor-pointer hover:text-blue-600 hover:scale-105 transition-all">
                        <BookOpen size={22} />
                        <span className="text-sm mt-1">Assignment</span>
                    </div>

                    {/* Chat */}
                    <div className="flex flex-col items-center cursor-pointer hover:text-blue-600 hover:scale-105 transition-all">
                        <MessageSquare size={22} />
                        <span className="text-sm mt-1">Chat</span>
                    </div>

                    {/* Profile */}
                    <div className="flex flex-col items-center cursor-pointer hover:text-blue-600 hover:scale-105 transition-all">
                        <User size={22} />
                        <span className="text-sm mt-1">Profile</span>
                    </div>

                    {/* Timetable */}
                    <div className="flex flex-col items-center cursor-pointer hover:text-blue-600 hover:scale-105 transition-all">
                        <CalendarDays size={22} />
                        <span className="text-sm mt-1">Timetable</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default StFooter