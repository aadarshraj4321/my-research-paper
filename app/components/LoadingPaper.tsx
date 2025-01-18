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










import React, { useState, useEffect } from 'react';

export const LoadingPaper: React.FC = () => {
  const [jokes, setJokes] = useState<{ joke: string }[]>([]);
  const [currentJokeIndex, setCurrentJokeIndex] = useState(0);

  // Fetch jokes from the public/jokes.json file
  // useEffect(() => {
  //   fetch('/jokes.json')
  //     .then((response) => response.json())
  //     .then((data) => setJokes(data))
  //     .catch((error) => console.error('Error fetching jokes:', error));
  // }, []);

  // // Function to show a random joke
  // const showNextJoke = () => {
  //   let randomIndex;
  //   do {
  //     randomIndex = Math.floor(Math.random() * jokes.length);
  //   } while (randomIndex === currentJokeIndex); // Ensure the new joke is different
  //   setCurrentJokeIndex(randomIndex);
  // };

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

      {/* Joke Card */}
      {/* {jokes.length > 0 && (
        <div className="relative z-10 bg-white rounded-2xl shadow-xl p-6 max-w-sm w-full text-center transform transition-transform hover:scale-105 border border-gray-100">
          <p className="text-base text-gray-700 mb-6">
            {jokes[currentJokeIndex].joke}
          </p>
          <button
            onClick={showNextJoke}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Next Joke
          </button>
        </div>
      )} */}

      {/* Loading Message */}
      <p className="mt-8 text-lg text-gray-600 relative z-10">
        Writing Your Research Paper...
      </p>
    </div>
  );
};

export default LoadingPaper;