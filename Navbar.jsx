import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <div className="font-bold text-xl">Dev Connect</div>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/messages">Messages</Link>
      </div>
    </nav>
  );
}
