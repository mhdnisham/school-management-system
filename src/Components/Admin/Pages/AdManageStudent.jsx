import React, { useState } from "react";
import { Check } from "lucide-react";

function AdManageStudent() {
  const [selected, setSelected] = useState([]);
  const [batch, setBatch] = useState("");
  const [searchName, setSearchName] = useState("");

  const students = [
    { id: "S45680", name: "James Wilson", image: "https://randomuser.me/api/portraits/men/11.jpg" },
    { id: "S45681", name: "Sophia Martinez", image: "https://randomuser.me/api/portraits/women/12.jpg" },
    { id: "S45682", name: "Liam Brown", image: "https://randomuser.me/api/portraits/men/13.jpg" },
    { id: "S45683", name: "Emma Johnson", image: "https://randomuser.me/api/portraits/women/14.jpg" },
    { id: "S45684", name: "Noah Williams", image: "https://randomuser.me/api/portraits/men/15.jpg" },
    { id: "S45679", name: "Olivia Davis", image: "https://randomuser.me/api/portraits/women/16.jpg" },
  ];

  const marck = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  return (
    <div className="bg-gray-50 flex justify-center items-center sm:py-10 sm:px-4 max-sm:w-full max-sm:h-screen">
      <div className="bg-white shadow-lg sm:rounded-2xl p-6 w-full max-sm:w-full max-sm:h-full flex flex-col relative overflow-hidden">
        
        {/* Batch & Search */}
        <div className="space-y-3 mb-6">
          <div className="flex gap-2 flex-col sm:flex-row">
            <input
              value={batch}
              onChange={(e) => setBatch(e.target.value)}
              placeholder="Enter batch (e.g., 2024)"
              className="flex-1 border rounded-xl px-3 py-2 focus:outline-blue-500 text-sm"
            />
            <button className="bg-blue-600 text-white rounded-xl px-4 py-2 text-sm hover:bg-blue-700 transition">
              Load
            </button>
          </div>

          <input
            placeholder="Search by Student Name and ID"
            className="w-full border rounded-xl px-3 py-2 text-sm"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
        </div>

        {/* Scrollable Student List */}
        <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 mb-24">
          {students.map((s) => (
            <div
              key={s.id}
              className={`flex items-center justify-between border rounded-xl px-3 py-2 mb-2 cursor-pointer transition ${
                selected.includes(s.id)
                  ? "bg-blue-50 border-blue-400"
                  : "hover:bg-gray-50"
              }`}
              onClick={() => marck(s.id)}
            >
              <div className="flex items-center gap-3">
                <img
                  src={s.image}
                  alt={s.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-sm">{s.name}</p>
                  <p className="text-xs text-gray-500">Student ID: {s.id}</p>
                </div>
              </div>

              <div
                className={`w-5 h-5 border-2 rounded flex items-center justify-center transition ${
                  selected.includes(s.id)
                    ? "bg-blue-600 border-blue-600"
                    : "border-gray-300"
                }`}
              >
                {selected.includes(s.id) && (
                  <Check className="text-white w-3 h-3" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Fixed Footer */}
        <div className="absolute bottom-0 left-0 w-full bg-white border-t p-4 shadow-inner">
          <p className="text-sm text-blue-600 font-medium mb-2">
            {selected.length} students selected
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <select className="flex-1 border rounded-xl px-3 py-2 text-sm">
              <option>Select Class</option>
              <option>Class A</option>
              <option>Class B</option>
            </select>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 text-sm transition">
              Assign
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdManageStudent;
