'use client';

import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

const ErrorPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const error = searchParams.get('error'); // Get error message from URL query params

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Oops! Something went wrong.</h1>
        <p className="mt-4">
          {error
            ? `Error: ${error}`
            : 'There was an error during your login attempt.'}
        </p>
        <button
          onClick={() => router.push('/login')}
          className="mt-4 bg-primary text-white py-2 px-4 rounded"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
