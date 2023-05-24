import React, { useState } from 'react';

export default function DrawerSide({ isOpen, handleToggle }) {
    return (
        <>
        {!isOpen && (
        <div
          className="fixed inset-0 bg-gray-600 opacity-75 z-30 hover:cursor-pointer"
          onClick={handleToggle}
        ></div>
      )}
        <div
      className={`fixed top-0 left-0 h-screen w-64 bg-white dark:bg-gray-800 z-40 transform duration-300 ease-in-out ${
        isOpen ? '-translate-x-full': 'translate-x-0'
      }`}
    >
      <div className="flex items-center justify-between p-4">
        <h2 className="text-xl font-medium">React Shop</h2>
        <button
          className="p-2 rounded-md focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
          onClick={handleToggle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 stroke-current text-gray-700 dark:text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <nav>
        <ul>
          <li className="p-4 hover:bg-gray-100 dark:hover:bg-gray-700 hover:cursor-pointer">
            <a href="/home">패션</a>
          </li>
          <li className="p-4 hover:bg-gray-100 dark:hover:bg-gray-700 hover:cursor-pointer">
            <a href="/about">액세서리</a>
          </li>
          <li className="p-4 hover:bg-gray-100 dark:hover:bg-gray-700 hover:cursor-pointer">
            <a href="/contact">디지털</a>
          </li>
        </ul>
      </nav>
    </div>
          </>
  );
    }