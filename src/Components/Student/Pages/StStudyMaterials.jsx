import React from 'react'
import { BookOpen, Video, FileText, Image } from "lucide-react";
import StNav from '../MinComponens/StNav';
import StFooter from '../MinComponens/StFooter'


function StStudyMaterials() {
     const materials = [
    {
      title: "Chapter 1 – Algebra.pdf",
      description: "Introduction to algebraic concepts.",
      type: "pdf",
      uploaded: "2 days ago",
    },
    {
      title: "Calculus Basics.mp4",
      description: "Fundamental theorem of calculus.",
      type: "video",
      uploaded: "3 weeks ago",
    },
    {
      title: "Geometry Formulas.docx",
      description: "Key formulas for 2D and 3D shapes.",
      type: "document",
      uploaded: "1 week ago",
    },
    {
      title: "Trigonometry Chart.png",
      description: "Unit circle and trig identities.",
      type: "image",
      uploaded: "1 month ago",
    },
    {
      title: "Chapter 2 - Statistics.pdf",
      description: "Basics of probability and data analysis.",
      type: "pdf",
      uploaded: "2 months ago",
    },
    {
      title: "Linear Algebra Intro.mp4",
      description: "Understanding vectors and matrices.",
      type: "video",
      uploaded: "3 months ago",
    },
  ];

  // Map type to styles and icons
  const typeMap = {
    pdf: {
      icon: <BookOpen className="h-6 w-6" />,
      iconColor: "bg-blue-100 text-blue-600",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
      secondaryAction: "View",
      secondaryButtonColor: "bg-red-500 hover:bg-red-600",
      actionLabel: "Download",
    },
    video: {
      icon: <Video className="h-6 w-6" />,
      iconColor: "bg-red-100 text-red-600",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
      secondaryAction: "Watch",
      secondaryButtonColor: "bg-red-500 hover:bg-red-600",
      actionLabel: "Download",
    },
    document: {
      icon: <FileText className="h-6 w-6" />,
      iconColor: "bg-green-100 text-green-600",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
      secondaryAction: "View",
      secondaryButtonColor: "bg-red-500 hover:bg-red-600",
      actionLabel: "Download",
    },
    image: {
      icon: <Image className="h-6 w-6" />,
      iconColor: "bg-purple-100 text-purple-600",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
      secondaryAction: "View",
      secondaryButtonColor: "bg-red-500 hover:bg-red-600",
      actionLabel: "Download",
    },
  };
  return (
     <div className="flex h-full min-h-screen w-full flex-col bg-gray-50 text-gray-800">
      <div className='z-30'>
        <StNav/>
      </div>

      <main className=" flex-1 p-4 sm:p-6">
        {/* Search & Filter */}
        <div className= " pt-16 mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-xs">
            <input
              className="w-full rounded-full border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="Search by topic or type..."
              type="text"
            />
          </div>
          <div className="relative w-full sm:w-auto">
            <select className="w-full appearance-none rounded-full border border-gray-300 bg-white py-2 pl-4 pr-10 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200">
              <option>All Types</option>
              <option>PDF</option>
              <option>Video</option>
              <option>Document</option>
              <option>Image</option>
            </select>
          </div>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {materials.map((material, index) => {
            const typeInfo = typeMap[material.type];
            return (
              <div
                key={index}
                className="group transform-gpu rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"
              >
                <div className="flex items-center gap-4 p-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-lg ${typeInfo.iconColor}`}
                  >
                    {typeInfo.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{material.title}</h3>
                    <p className="text-sm text-gray-500">{material.description}</p>
                  </div>
                </div>
                <div className="border-t border-gray-200 p-4">
                  <p className="mb-4 text-xs text-gray-500">
                    Uploaded: {material.uploaded}
                  </p>
                  <div className="flex items-center justify-end gap-2">
                    <button
                      className={`rounded-md px-3 py-1.5 text-sm font-medium text-white ${typeInfo.secondaryButtonColor}`}
                    >
                      {typeInfo.secondaryAction}
                    </button>
                    <button
                      className={`rounded-md px-3 py-1.5 text-sm font-medium text-white ${typeInfo.buttonColor}`}
                    >
                      {typeInfo.actionLabel}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <div className='max-sm:pt-10'>
        <StFooter/>
      </div>
    </div>
  )
}

export default StStudyMaterials