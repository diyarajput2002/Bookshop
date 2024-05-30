import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Success = () => {
  const [redirectCountdown, setRedirectCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (redirectCountdown > 0) {
        setRedirectCountdown(redirectCountdown - 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [redirectCountdown]);

  useEffect(() => {
    if (redirectCountdown === 0) {
      navigate('/');
    }
  }, [redirectCountdown]);
  return (
    <div  className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 mx-auto text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <h2 className="text-2xl font-semibold text-center mb-4">Payment Successful!</h2>
        <p className="text-gray-600 text-center mb-4">Thank you for your payment.</p>
        <p className="text-gray-600 text-center mb-8">
          You will be redirected to your Dashboard in {redirectCountdown} seconds.
        </p>
      </div>
    </div>
  )
}

export default Success