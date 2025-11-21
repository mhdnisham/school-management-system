import React, { useState } from "react";
import { User, Trash2, ChevronDown, PlusCircle } from "lucide-react";
import { div } from "framer-motion/m";
import AdAddSub from "./AdAddSub";

function AdAssineTeachers() {
  const[show,setShow]=useState(false)

    const subjects = [
        { name: "Mathematics", teacher: "Mr. David Chen", iconColor: "text-blue-500" },
        { name: "Science", teacher: "Select Teacher", iconColor: "text-gray-400" },
    ];

    return (
        <div>
            <div className="min-h-screen w-full bg-gray-50 flex justify-center items-center sm:p-6 relative">

                {/* Full Screen Card */}
                <div className="bg-white shadow-xl sm:rounded-2xl p-8  border border-gray-100 space-y-8 w-full max-sm:h-screen pt-20">

                    {/* Select Class */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Select Class
                        </label>
                        <div className="relative">
                            <select className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
                                <option>Grade 5 - Section A</option>
                                <option>Grade 6 - Section B</option>
                                <option>Grade 7 - Section C</option>
                            </select>
                            <ChevronDown
                                size={18}
                                className="absolute right-3 top-3 text-gray-400 pointer-events-none"
                            />
                        </div>
                    </div>

                    {/* Class Teacher */}
                    <div className="space-y-3">
                        <h3 className="text-base font-semibold text-gray-800">Class Teacher</h3>
                        <p className="text-sm text-gray-500">
                            Assign a primary teacher for the class.
                        </p>
                        <div className="relative flex items-center border border-gray-300 rounded-lg px-4 py-2 bg-white">
                            <User className="text-blue-500 mr-3" size={20} />
                            <select className="w-full text-sm bg-transparent outline-none appearance-none">
                                <option>Ms. Eleanor Vance</option>
                                <option>Mr. David Chen</option>
                                <option>Mrs. Laura White</option>
                            </select>
                            <ChevronDown
                                size={18}
                                className="absolute right-3 text-gray-400 pointer-events-none"
                            />
                        </div>
                    </div>

                    {/* Subject Teachers */}
                    <div className="space-y-4">
                        <h3 className="text-base font-semibold text-gray-800">Subject Teachers</h3>
                        <p className="text-sm text-gray-500">
                            Assign teachers for each subject.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            {subjects.map((subject, index) => (
                                <div key={index} className="space-y-2">
                                    <label className="text-sm text-gray-600">{subject.name}</label>
                                    <div className="flex items-center gap-2">
                                        <div className="relative flex items-center border border-gray-300 rounded-lg px-4 py-2 bg-white w-full">
                                            <User className={`${subject.iconColor} mr-3`} size={20} />
                                            <select className="w-full text-sm bg-transparent outline-none appearance-none">
                                                <option>{subject.teacher}</option>
                                                <option>Mr. David Chen</option>
                                                <option>Ms. Eleanor Vance</option>
                                                <option>Mrs. Laura White</option>
                                            </select>
                                            <ChevronDown
                                                size={18}
                                                className="absolute right-3 text-gray-400 pointer-events-none"
                                            />
                                        </div>
                                        <button className="text-red-500 hover:bg-red-100 p-2 rounded-lg transition">
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Add Subject Teacher */}
                        <button className="w-full border-2 border-dashed border-blue-400 rounded-lg py-3 text-sm text-blue-600 font-medium flex items-center justify-center gap-2 hover:bg-blue-50 transition"
                          onClick={()=>setShow(!show)}
                        >
                            <PlusCircle size={18} />
                            Add Subject Teacher
                        </button>
                    </div>

                    {/* Save Button */}
                    <div className="pt-4">
                        <button className="w-full bg-blue-600 text-white rounded-lg py-3 font-semibold hover:bg-blue-700 transition">
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>hidden
            <div className={`absolute inset-0 ${!show && 'hidden'  }`}  >
                <AdAddSub onClose={()=>setShow(false)} />
            </div>
        </div>
    );
}

export default AdAssineTeachers;
