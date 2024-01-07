// pages/_error.jsx
import React from 'react';

const ErrorPage = ({ statusCode, message }) => {
  return (
    <div className="bg-white dark:bg-gray-800 min-h-screen">
      <div className="flex h-full">
        <div className="m-auto my-10 dark:text-gray-300 text-3xl font-semibold">
          {statusCode}: {message}
        </div>
      </div>
    </div>
  );
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  const message = err ? err.message : 'An error occurred';
  return { statusCode, message };
};

export default ErrorPage;
