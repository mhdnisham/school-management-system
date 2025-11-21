import React, { useState } from 'react';
import { Bell, Menu } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import {
  Home, CalendarDays, MessageSquare, Megaphone, GraduationCap ,Clock, BookOpen, HelpCircle, Settings, LogOut, Library, CheckCircle,
} from "lucide-react";
import { useNavigate } from 'react-router-dom';

function TeNav() {
  const [bar, setBar] = useState(false);
  const navigate=useNavigate()

  return (
    <header className="flex items-center justify-between p-4 bg-white border-b border-gray-100 shadow-sm relative">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center">
          <span role="img" aria-label="profile" className="text-xl">👩‍🏫</span>
        </div>
        <h2 className="text-lg font-semibold text-gray-800 hidden sm:block">
          Welcome, Mrs. Davis
        </h2>
      </div>

      <div className="flex items-center space-x-5">
        <div className="relative">
          <Bell className="text-gray-700 w-6 h-6 hover:text-blue-600 transition-all cursor-pointer" />
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-500" />
        </div>
        <Menu
          className="text-gray-700 w-7 h-7 cursor-pointer hover:text-blue-600 transition-all"
          onClick={() => setBar(!bar)}
        />
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
              duration: 0.5,
            }}
            className="bg-white h-screen z-10 w-60 fixed right-0 top-20 pt-10 shadow-lg border-l border-gray-200"
          >
            <div className="flex flex-col text-gray-700 font-medium px-6 space-y-6">
              <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600 hover:scale-105 transition-all" onClick={()=>navigate("/teclasses/")}>
                <Home size={20} />
                <span>Home</span>
              </div>

              <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600 hover:scale-105 transition-all" onClick={()=>navigate("/temyclass")}>
                <GraduationCap size={20} />
                <span>My Class</span>
              </div>

              <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600 hover:scale-105 transition-all" onClick={()=>navigate("/attendance")}>
                <CheckCircle size={20} />
                <span>Attendance</span>
              </div>

              <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600 hover:scale-105 transition-all">
                <MessageSquare size={20} />
                <span>Chat</span>
              </div>

              <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600 hover:scale-105 transition-all">
                <CalendarDays size={20} />
                <span>Timetable</span>
              </div>

              <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600 hover:scale-105 transition-all">
                <Library size={20} />
                <span>Resources</span>
              </div>

              <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600 hover:scale-105 transition-all">
                <HelpCircle size={20} />
                <span>Help / Support</span>
              </div>

              <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600 hover:scale-105 transition-all">
                <Settings size={20} />
                <span>Settings</span>
              </div>

              <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600 hover:scale-105 transition-all">
                <LogOut size={20} />
                <span>Log Out</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default TeNav;
