import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  const links = [
    { path: '/', label: 'Group Name Generator' },
    { path: '/kpop', label: 'K-pop Group Name Generator' },
    { path: '/random', label: 'Random Group Name Generator' },
    { path: '/ai', label: 'AI Group Name Generator' },
    { path: '/dnd', label: 'D&D Group Name Generator' },
    { path: '/rap', label: 'Rap Group Name Generator' },
    { path: '/group-chat', label: 'Group Chat Name Generator' },
    { path: '/facebook', label: 'Facebook Group Name Generator' },
    { path: '/girl-group', label: 'Girl Group Name Generator' },
  ];

  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-semibold text-indigo-600 mb-4">
              Group Name Generator
            </h3>
            <p className="text-gray-600">
              Create perfect names for any type of group instantly using AI.
            </p>
          </div>
          <div className="col-span-2 md:col-span-2 lg:col-span-3">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-gray-600 hover:text-indigo-600"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Group Name Generator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}