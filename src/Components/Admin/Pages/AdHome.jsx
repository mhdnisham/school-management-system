import React from 'react'
import {
    GraduationCap,
    Users,
    User,
    CalendarDays,
    Plus,
    UserPlus,
    Monitor,
    Info,
    FileText,
    Folder,
    ClipboardList,
    UserCheck,
    Eye,
    BarChart3,
    Megaphone,
    MessageSquare,
    CheckSquare,
    Settings,
} from "lucide-react";

import { useNavigate } from 'react-router-dom';
import { path } from 'framer-motion/m';

const stats = [
    { icon: <GraduationCap className="text-blue-500" size={28} />, number: 12, label: "Active Classes" },
    { icon: <Users className="text-blue-500" size={28} />, number: 8, label: "Assigned Teachers" },
    { icon: <User className="text-blue-500" size={28} />, number: 150, label: "Enrolled Students" },
    { icon: <CalendarDays className="text-blue-500" size={28} />, number: 5, label: "Classes Today" },
];

const buttons = [
    { icon: <Plus size={18} />, label: "New Class" },
    { icon: <UserPlus size={18} />, label: "Assign Teacher" },
    { icon: <Monitor size={18} />, label: "Monitor" },
    { icon: <Info size={18} />, label: "Teacher Info" },
    { icon: <FileText size={18} />, label: "Teacher Reports" },
    { icon: <Folder size={18} />, label: "Resource Management" },
];

const features = [
    { icon: <ClipboardList className="text-blue-500" size={32} />, title: "Class Management", color: "from-blue-50 to-blue-100", path:'/adclasmag'},
    { icon: <UserCheck className="text-green-500" size={32} />, title: "Monitor", color: "from-green-50 to-green-100",path:'/adteachermonitor' },
    { icon: <Eye className="text-indigo-500" size={32} />, title: "Teacher Supervision", color: "from-indigo-50 to-indigo-100" },
    { icon: <BarChart3 className="text-yellow-500" size={32} />, title: "Reports & Analytics", color: "from-yellow-50 to-yellow-100",path:'/adanalticsclasscart' },
    { icon: <Megaphone className="text-pink-500" size={32} />, title: "Announcements & Notices", color: "from-pink-50 to-pink-100", path:'/adannouncement'},
    { icon: <MessageSquare className="text-cyan-500" size={32} />, title: "Communication", color: "from-cyan-50 to-cyan-100" },
    { icon: <CalendarDays className="text-purple-500" size={32} />, title: "Timetable Oversight", color: "from-purple-50 to-purple-100" },
    { icon: <Folder className="text-orange-500" size={32} />, title: "Resource Management", color: "from-orange-50 to-orange-100" },
    { icon: <CheckSquare className="text-teal-500" size={32} />, title: "Approval Workflows", color: "from-teal-50 to-teal-100" },
    { icon: <Settings className="text-gray-500" size={32} />, title: "Settings", color: "from-gray-50 to-gray-100" },
];

function AdHome() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
            {/* ===== Left Content ===== */}
            <div className='flex-1'>
                {/* ---- Stats Section ---- */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-sm rounded-xl p-5 flex items-center space-x-4 border border-gray-100 hover:shadow-md transition"
                        >
                            <div className="p-3 bg-blue-50 rounded-lg">{item.icon}</div>
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-800">{item.number}</h3>
                                <p className="text-sm text-gray-500">{item.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ---- Quick Action ---- */}
                <div className='px-6'>
                    <h1 className="text-lg font-semibold text-gray-700 mb-3">Quick Actions</h1>
                    <div className="overflow-x-auto">
                        <div className="flex gap-3 p-2 w-max">
                            {buttons.map((btn, index) => (
                                <button
                                    key={index}
                                    className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 font-medium rounded-lg 
                             hover:bg-blue-100 transition-all duration-200 shadow-sm whitespace-nowrap"
                                >
                                    {btn.icon}
                                    <span>{btn.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ---- Features ---- */}
                <div className='p-6 sm:hidden'>
                    <h1 className="text-lg font-semibold text-gray-700">Features</h1>

                    <div className="grid grid-cols-2  gap-6">
                        {features.map((item, index) => (
                            <div
                                onClick={()=>navigate(item.path)}
                                key={index}
                                className={`rounded-2xl bg-gradient-to-br ${item.color} shadow-md hover:shadow-lg 
                        p-5 flex flex-col items-center justify-center text-center transition-all duration-300 
                        hover:-translate-y-1`}
                            >
                                <div className="p-4 bg-white rounded-full shadow-sm mb-3">{item.icon}</div>
                                <h2 className="text-base font-semibold text-gray-800">{item.title}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ===== Right Sidebar ===== */}
            <div className='max-sm:hidden w-64 border-l bg-white shadow-sm'>
                <div className="flex flex-col text-gray-700 font-medium px-6 py-8 space-y-6">
                    <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600 hover:scale-105 transition-all" >
                        <span>Home</span>
                    </div>

                    <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600 hover:scale-105 transition-all" onClick={()=>navigate('/adclasmag')} >
                        <span>Class Management</span>
                    </div>

                    <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600 hover:scale-105 transition-all" >
                        <span>Monitor</span>
                    </div>

                    <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600 hover:scale-105 transition-all">
                        <span>Teacher Supervision</span>
                    </div>

                    <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600 hover:scale-105 transition-all">
                        <span>Reports & Analytics</span>
                    </div>

                    <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600 hover:scale-105 transition-all">
                        <span>Announcements & Notices</span>
                    </div>

                    <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600 hover:scale-105 transition-all">
                        <span>Communication</span>
                    </div>

                    <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600 hover:scale-105 transition-all">
                        <span>Timetable Oversight</span>
                    </div>

                    <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600 hover:scale-105 transition-all">
                        <span>Resource Management</span>
                    </div>

                    <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600 hover:scale-105 transition-all">
                        <span>Approval Workflows</span>
                    </div>

                    <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600 hover:scale-105 transition-all">
                        <span>Settings</span>
                    </div>

                    <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600 hover:scale-105 transition-all">
                        <span>Log Out</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdHome
