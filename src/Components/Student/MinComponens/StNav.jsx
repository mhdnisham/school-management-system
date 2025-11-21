import React, { useState } from 'react'
import { GraduationCap, Menu,Home, BookOpen, MessageSquare, User, CalendarDays } from 'lucide-react'
// import photo from "Public/MyPhoto"
import { motion, AnimatePresence } from "framer-motion";

function StNav() {
    const [bar, setBar] = useState(false)
    return (
        <div className='fixed'>
            <div className='flex justify-between pl-1 pr-6 h-20 items-center sm:pl-40 z-10 bg-white  w-screen'>
                <div className='flex items-center gap-3'>
                    <div className='bg-blue-500 text-white p-2 rounded-full'><GraduationCap /></div>
                    <div className='text-[20px] font-bold text-gray-800 tracking-wide'>School App</div>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='size-12 rounded-full '><img src="Public/MyPhoto.png" alt="" className='rounded-full' /></div>
                    <div className='max-sm:hidden rounded-full bg-gray-100 p-3 tranc hover:hover:scale-110 hover:shadow-2xl' onClick={() => setBar(!bar)}><Menu /></div>
                </div>
            </div>
            <AnimatePresence>
                {bar && (
                    <motion.div
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 300, opacity: 0 }}
                        transition={{
                            type: "tween",
                            ease: "easeInOut",
                            duration: 0.8,
                        }}
                        className="bg-white h-screen z-10 w-60 fixed right-0 top-20 pt-10 shadow-lg border-l border-gray-200"
                    >
                        <div className="flex flex-col text-gray-700 font-medium px-6 space-y-6">
                            {/* Home */}
                            <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600 hover:scale-105 transition-all">
                                <Home size={22} />
                                <span>Home</span>
                            </div>

                            {/* Assignment */}
                            <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600 hover:scale-105 transition-all">
                                <BookOpen size={22} />
                                <span>Assignment</span>
                            </div>

                            {/* Chat */}
                            <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600 hover:scale-105 transition-all">
                                <MessageSquare size={22} />
                                <span>Chat</span>
                            </div>

                            {/* Profile */}
                            <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600 hover:scale-105 transition-all">
                                <User size={22} />
                                <span>Profile</span>
                            </div>

                            {/* Timetable */}
                            <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600 hover:scale-105 transition-all">
                                <CalendarDays size={22} />
                                <span>Timetable</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default StNav