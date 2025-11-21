import React, { useState } from "react";

const students = [
  { name: "Rahul", adNo: "AD101", class: "10A" },
  { name: "Aisha", adNo: "AD102", class: "9B" },
  { name: "Kiran", adNo: "AD103", class: "8C" },
  { name: "Rahul", adNo: "AD101", class: "10A" },
  { name: "Aisha", adNo: "AD102", class: "9B" },
  { name: "Kiran", adNo: "AD103", class: "8C" },
  { name: "Rahul", adNo: "AD101", class: "10A" },
  { name: "Aisha", adNo: "AD102", class: "9B" },
  { name: "Kiran", adNo: "AD103", class: "8C" },
];

const teachers = [
  { name: "Anil Kumar", regNo: "T001" },
  { name: "Sumi Joseph", regNo: "T002" },
  { name: "Roshni Mathew", regNo: "T003" },
  { name: "Harish Nair", regNo: "T004" },
];

const AdAnnouncementAddPage = () => {
  const [searchSt, setSearchSt] = useState(false);
  const [searchTe, setSearchTe] = useState(false);

  const [searchStName, setSearchStName] = useState("");
  const [searchTeName, setSearchTeName] = useState("");

  const afterStSearch = students.filter((info) =>
    info.name.toLowerCase().includes(searchStName.toLowerCase())
  );

  const afterTeSearch = teachers.filter((info) =>
    info.name.toLowerCase().includes(searchTeName.toLowerCase())
  );

  return (
    <div className="min-h-screen w-full bg-gray-100 flex justify-center p-4">
      <div className="w-full max-w-4xl  bg-gray-100  p-6 space-y-6">

        <h2 className="text-2xl font-bold">Create Announcement</h2>

        <div>
          <h4 className="font-semibold">Title</h4>
          <input
            type="text"
            className="w-full mt-1 border rounded-lg p-2 focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <h4 className="font-semibold">Message / Description</h4>
          <textarea
            placeholder="Enter your announcement details here…"
            className="w-full mt-1 border rounded-lg p-2 h-24 focus:ring focus:ring-blue-300"
          ></textarea>
        </div>
        <div>

        </div>

        <div>
          <h4 className="font-semibold mb-2">Target Audience</h4>

          <div className="space-y-3 bg-gray-50 p-4 rounded-lg border">

            <label className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5" />
              <span>All Students</span>
            </label>

            <label className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5" />
              <span>All Teachers</span>
            </label>

            <div className="relative">
              <div
                onClick={() => setSearchSt(!searchSt)}
                className="cursor-pointer py-2 px-3 bg-white rounded-lg border hover:bg-gray-100"
              >
                Specific Student
              </div>

              {searchSt && (
                <div className="absolute w-full mt-1 bg-white border rounded-lg shadow-lg p-2 z-10 max-h-48 overflow-y-auto">
                  <input
                    type="text"
                    placeholder="Search student…"
                    value={searchStName}
                    onChange={(e) => setSearchStName(e.target.value)}
                    className="w-full border p-2 rounded mb-2"
                  />

                  {afterStSearch.map((info, i) => (
                    <div
                      key={i}
                      className="p-2 hover:bg-gray-100 rounded cursor-pointer"
                    >
                      {info.name} • {info.adNo} • {info.class}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="relative">
              <div
                onClick={() => setSearchTe(!searchTe)}
                className="cursor-pointer py-2 px-3 bg-white rounded-lg border hover:bg-gray-100"
              >
                Specific Teacher
              </div>

              {searchTe && (
                <div className="absolute w-full mt-1 bg-white border rounded-lg shadow-lg p-2 z-10 max-h-48 overflow-y-auto">
                  <input
                    type="text"
                    placeholder="Search teacher…"
                    value={searchTeName}
                    onChange={(e) => setSearchTeName(e.target.value)}
                    className="w-full border p-2 rounded mb-2"
                  />

                  {afterTeSearch.map((info, i) => (
                    <div
                      key={i}
                      className="p-2 hover:bg-gray-100 rounded cursor-pointer"
                    >
                      {info.name} • {info.regNo}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold">Attach File</h4>

          <label className="w-full flex items-center justify-center p-4 border-2 border-dashed rounded-lg bg-gray-50 cursor-pointer hover:bg-gray-100">
            <span>Click to upload file</span>
            <input type="file" className="hidden" />
          </label>
        </div>

        <div className="text-center">
          <button className="px-7 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full md:w-auto">
            Publish
          </button>
        </div>

      </div>
    </div>
  );
};

export default AdAnnouncementAddPage;
