import React, { useState } from "react";
import {
  ArrowLeft,
  BookOpen,
  FileText,
  Home,
  ClipboardList,
  MessageCircle,
} from "lucide-react";
import StNav from "../MinComponens/StNav";
import StFooter from "../MinComponens/StFooter";
import { useNavigate } from "react-router-dom";

function StSubject() {
  const navigation=useNavigate()
  return (
   <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-white font-display text-gray-800">
  {/* Header */}
  <StNav />

  {/* Profile Section */}
  <div className="p-4 pt-24">
    <div className="flex flex-col xl:flex-row items-center justify-start rounded-xl shadow-md bg-white">
      <div
        className="w-40 h-40 bg-center bg-no-repeat bg-cover rounded-full m-4"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBbAWif7WOJ3DlQ_JelECJdVToSebQ6f7Qp0nhLJ5Pc8phFqD6DsF9Hn7aWZyHMMZwrH7jyQ46UwBsnkN0BFDmJIMhfxXCXq2rg47A7LEve1fOidID0HBrad9kEiMTdr9jYD75GY5_HOGgNB9PvVd-JwUXxyjjiBZICUAZk6KHTvfR5gvcFdI-qZUyBE9XhPEm0Ivf16NT634VdXP3oTKejzgD_kpKOSt_mXeaqWiucwNVE5nL7rvG5aj-2g3M5ylddq7AjILFNKPk')",
        }}
      ></div>

      <div className="flex w-full min-w-72 grow flex-col items-center xl:items-start justify-center gap-1 py-4 px-4 text-center xl:text-left">
        <p className="text-gray-900 text-xl font-bold leading-tight tracking-[-0.015em]">
          Dr. Emily Carter
        </p>
        <p className="text-gray-600 text-base font-normal leading-normal">
          Mathematics Department
        </p>
      </div>
    </div>
  </div>

  {/* Grid Buttons */}
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4">
    {/* Study Materials */}
    <div className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-xl shadow-sm aspect-square hover:bg-blue-100 transition"
          onClick={()=>navigation('/ststudymaterials')}

    >
      <BookOpen size={40} className="text-blue-600 mb-2" />
      <p className="text-gray-800 text-center font-medium">Study Materials</p>
    </div>

    {/* Assignments */}
    <div className="flex flex-col items-center justify-center p-4 bg-green-50 rounded-xl shadow-sm aspect-square hover:bg-green-100 transition"
          onClick={()=>navigation('/stassiment')}

    >
      <FileText size={40} className="text-green-600 mb-2" />
      <p className="text-gray-800 text-center font-medium">Assignments</p>
    </div>

    {/* Homework */}
    <div className="flex flex-col items-center justify-center p-4 bg-yellow-50 rounded-xl shadow-sm aspect-square hover:bg-yellow-100 transition"
          onClick={()=>navigation('/sthomework')}

    >
      <Home size={40} className="text-yellow-600 mb-2" />
      <p className="text-gray-800 text-center font-medium">Homework</p>
    </div>

    {/* Class Test Marks */}
    <div className="flex flex-col items-center justify-center p-4 bg-pink-50 rounded-xl shadow-sm aspect-square hover:bg-pink-100 transition
    "
      onClick={()=>navigation('/sttest')}
    >
      <ClipboardList size={40} className="text-pink-600 mb-2" />
      <p className="text-gray-800 text-center font-medium">Class Test Marks</p>
    </div>
  </div>


  <StFooter />
</div>

  );
}

export default StSubject;
