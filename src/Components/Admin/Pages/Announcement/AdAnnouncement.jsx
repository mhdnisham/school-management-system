import React, { useState } from "react";
import { Search, Filter, Plus, MoreVertical } from "lucide-react";
import { div } from "framer-motion/client";
import { useNavigate } from "react-router-dom";

const filters = ["All", "Teachers", "Students", "Class", "Teacher", "Student"];

function AdAnnouncement() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");
    const [showFilters, setShowFilters] = useState(false);
    const [openMenu, setOpenMenu] = useState(null);

    const navigate=useNavigate()


    const announcements = [
        {
            title: "Parent-Teacher Meeting Schedule",
            date: "Oct 26, 2023",
            content:
                "Please find the updated schedule for the upcoming parent-teacher meetings for the second semester. Ensure you book your slot by this Friday.",
            type: "Teachers",
        },
        {
            title: "School Reopens on Monday",
            date: "Oct 24, 2023",
            content:
                "This is a reminder that the school will reopen on Monday, October 30th, after the fall break. All classes will resume as per the usual schedule.",
            type: "Students",
        },
        {
            title: "Annual Sports Day Event",
            date: "Oct 22, 2023",
            content:
                "We are excited to announce the Annual Sports Day on November 15th. All students are encouraged to participate. Registrations are open until Nov 5th.",
            type: "Class",
        },
    ];

    const afterSearch = announcements.filter((info) => {
        const searchMatch =
            info.title.toLowerCase().includes(search.toLowerCase()) ||
            info.content.toLowerCase().includes(search.toLowerCase());

        const filt =
            filter === "All" ||
            info.type.toLowerCase() === filter.toLowerCase();

        return searchMatch && filt;
    });

    const setMenu = (id) => {

        setOpenMenu(openMenu == id ? null : id)
    }


    return (
        <div className="bg-gray-50 p-6 flex flex-col items-center relative"
        //  onClick={()=>setOpenMenu(null)}
        >
            <div className="w-full max-w-4xl mb-6 ">
                <h1 className=" text-2xl font-semibold text-gray-800 mb-4 text-left">
                    Announcements
                </h1>
                <div className="flex relative gap-7">
                    <div className="relative flex-1 min-w-[200px]">
                        <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search announcements..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full border border-gray-200 rounded-lg py-2 pl-9 pr-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <div className="relative">
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="p-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition"
                        >
                            <Filter className="w-5 h-5 text-blue-600" />
                        </button>
                        {showFilters && (
                            <div className="absolute right-0 mt-2  z-20 bg-gray-50">
                                {filters.map((fl) => (
                                    <button
                                        key={fl}
                                        onClick={() => {
                                            setFilter(fl);
                                            setShowFilters(false)
                                        }}
                                        className={`w-full text-left px-4 py-2 text-sm hover:bg-blue-50 ${fl === filter
                                            ? "bg-blue-100 text-blue-600 font-medium"
                                            : "text-gray-700"
                                            }`}
                                    >
                                        {fl}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

            </div>
            <div className="grid gap-4 w-full max-w-3xl">
                {afterSearch.map((info, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 border border-gray-100 hover:border-blue-300"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <h2 className="text-lg font-semibold text-gray-800">{info.title}</h2>
                            <div className="relative">
                                <button
                                    onClick={() => setMenu(index)}
                                    className="p-2 rounded-full hover:bg-gray-100 transition"
                                >
                                    <MoreVertical className="w-5 h-5 text-gray-500" />
                                </button>
                                {openMenu == index && <div className="absolute right-0 top-full mt-1 w-28 bg-white border border-gray-200 rounded-xl shadow-lg z-20 transition-all duration-300 ease-in-out">
                                    {["Delete", "Edit", "Resent"].map((a) => (
                                        <div
                                            key={a}
                                            className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 cursor-pointer transition-colors duration-200"
                                        >
                                            {a}
                                        </div>
                                    ))}
                                </div>
                                }
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">{info.content}</p>
                        <div className="text-xs text-gray-400 mt-3 flex justify-end">
                            <span>{info.date}</span>
                        </div>
                    </div>
                ))}
            </div>
            <button className="absolute right-5 bottom-3 flex items-center gap-2 bg-blue-500 text-white px-4 py-4 rounded-full hover:bg-blue-600"
              onClick={()=>navigate('/adannouncementaddpage')}
            >
                <Plus size={20} />
            </button>
        </div>
    )
}

export default AdAnnouncement

