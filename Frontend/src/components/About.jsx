import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen dark:bg-slate-900 bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-4 dark:text-gray-900 text-center">About Us</h2>
        <p className="text-gray-700 mb-4">
          Welcome to our website! We are committed to providing the best services to our customers.
          Our team is dedicated to ensuring your satisfaction through excellent service and support.
        </p>
        <p className="text-gray-700 mb-4">
          We believe in continuous improvement and always strive to exceed our customers' expectations.
          Thank you for choosing us, and we look forward to serving you.
        </p>
        <div className="flex justify-center h-[50%]">
          <img src="https://media.istockphoto.com/id/613241502/photo/young-woman-shopping-on-line.jpg?s=2048x2048&w=is&k=20&c=269AHLili8ql1cR9Qx8SfWVVsEFmjUkuMf9WLe65PZ4=" height={400} width={400} alt="About Us" className="rounded-md shadow-md" />
        </div>
      </div>
    </div>
  );
};

export default About;
