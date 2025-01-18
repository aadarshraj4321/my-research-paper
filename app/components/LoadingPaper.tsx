// import React from 'react';

// export const LoadingPaper: React.FC = () => (
//   <div className="animate-pulse space-y-4">
//     <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto"></div>
//     <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
//     <div className="space-y-3 mt-8">
//       {[...Array(10)].map((_, i) => (
//         <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
//       ))}
//     </div>
//   </div>
// );

// export default LoadingPaper;










// import React, { useState } from 'react';

export const LoadingPaper: React.FC = () => {


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6 relative overflow-hidden">
      {/* Background Gradient Pulse Animation */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-100 to-purple-100 animate-pulse">
        <div className="space-y-4 p-6">
          <div className="h-8 bg-white/50 rounded-lg w-3/4 mx-auto"></div>
          <div className="h-4 bg-white/50 rounded-lg w-1/2 mx-auto"></div>
          <div className="space-y-3 mt-8">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="h-4 bg-white/50 rounded-lg w-full"></div>
            ))}
          </div>
        </div>
      </div>



      {/* Loading Message */}
      <p className="mt-8 text-lg text-gray-600 relative z-10">
        Writing Your Research Paper...
      </p>
    </div>
  );
};

export default LoadingPaper;