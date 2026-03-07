import React, { useState } from "react";

function StTest() {
  const testData = [
    { name: "Mid-Term Exam - Physics", total: 100, scored: 85, date: "Oct 25, 2023", remarks: "Good job! Focus on electromagnetism.", color: "text-orange-500" },
    { name: "Final Exam - Chemistry", total: 100, scored: 92, date: "Dec 15, 2023", remarks: "Excellent work!", color: "text-green-500" },
    { name: "Quiz 1 - Biology", total: 20, scored: 15, date: "Sep 10, 2023", remarks: "Review cell division.", color: "text-red-500" },
    { name: "Project - History", total: 50, scored: 45, date: "Nov 5, 2023", remarks: "Well-researched.", color: "text-green-500" },
    { name: "Assignment 3 - Maths", total: 30, scored: 25, date: "Nov 20, 2023", remarks: "Good attempt, check calculations.", color: "text-orange-500" },
  ];

  return (
    <div className="font-display bg-background-light dark:bg-background-dark min-h-screen flex flex-col">
      {/* Header */}
      <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10 shadow-sm">
        <button className="text-slate-800 dark:text-white flex items-center justify-center">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-slate-800 dark:text-white text-lg font-bold text-center flex-1">
          Test Scores
        </h2>
        <div className="flex w-12 items-center justify-end">
          <button className="flex cursor-pointer items-center justify-center rounded-lg h-12 bg-transparent text-slate-800 dark:text-white gap-2 text-base font-bold p-0">
            <span className="material-symbols-outlined">filter_list</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="p-4 overflow-x-auto">
        <table className="w-full text-left border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
          <thead className="bg-slate-200 dark:bg-slate-800">
            <tr>
              <th className="p-4 text-sm font-semibold text-slate-700 dark:text-slate-200 tracking-wide">Test Name</th>
              <th className="p-4 text-sm font-semibold text-slate-700 dark:text-slate-200 tracking-wide text-center">Total Marks</th>
              <th className="p-4 text-sm font-semibold text-slate-700 dark:text-slate-200 tracking-wide text-center">Scored Marks</th>
              <th className="p-4 text-sm font-semibold text-slate-700 dark:text-slate-200 tracking-wide text-center">Date</th>
              <th className="p-4 text-sm font-semibold text-slate-700 dark:text-slate-200 tracking-wide">Remarks</th>
            </tr>
          </thead>
          <tbody className="bg-background-light dark:bg-background-dark">
            {testData.map((test, index) => (
              <tr
                key={index}
                className="border-b border-b-slate-200 dark:border-b-slate-700 bg-slate-100 dark:bg-slate-900 transition-colors"
              >
                <td className="p-4 text-sm text-slate-800 dark:text-slate-200 font-medium">{test.name}</td>
                <td className="p-4 text-sm text-slate-800 dark:text-slate-200 text-center">{test.total}</td>
                <td className={`p-4 text-sm font-semibold text-center ${test.color}`}>{test.scored}</td>
                <td className="p-4 text-sm text-slate-800 dark:text-slate-200 text-center">{test.date}</td>
                <td className="p-4 text-sm text-slate-800 dark:text-slate-200">{test.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StTest;
