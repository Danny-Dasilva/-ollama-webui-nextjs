// components/Layout.jsx
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { Toaster } from 'react-hot-toast';

const Layout = ({ children }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Initialization logic here
    // Convert your Svelte logic to React logic

    setLoaded(true);
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Ollama</title>
        {/* Add your CSS here */}
      </Head>

      {children}

      <Toaster />
    </>
  );
};

export default Layout;
