// components/Layout.js
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow p-4">
        <h1 className="text-2xl font-bold text-gray-800">Revenue Dashboard</h1>
      </header>

      {/* Main content */}
      <main className="p-4">{children}</main>
    </div>
  );
};

export default Layout;
