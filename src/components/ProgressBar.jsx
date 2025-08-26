import React from 'react';

const ProgressBar = ({ completed, total }) => {
  const progress = total > 0 ? (completed / total) * 100 : 0;

  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 overflow-hidden">
      <div
        className="h-full rounded-full bg-gradient-to-r from-rose-400 to-blue-400 transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
      ></div>
    </div >
  );
};

export default ProgressBar;