import React, { useState } from 'react';
import { FaPlus, FaSearch } from 'react-icons/fa';

// Generate an array of years from 1900 to the current year
const generateYears = (startYear) => {
  const currentYear = new Date().getFullYear();
  let years = [];
  for (let year = startYear; year <= currentYear; year++) {
    years.push(year);
  }
  return years;
};

const Payroll = () => {
  const [showModal, setShowModal] = useState(false);
  const years = generateYears(1900); // Start from the year 1900

  // Handle opening the modal
  const openModal = () => {
    setShowModal(true);
  };

  // Handle closing the modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="p-6">
      {/* Title and Generate Button */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Payroll</h1>
        <button
          onClick={openModal}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 flex items-center"
        >
          <FaPlus className="mr-2" /> Generate
        </button>
      </div>

      {/* Breadcrumbs */}
      <div className="mb-4">
        <nav className="text-sm text-gray-600">
          <a href="#" className="hover:underline">Home</a> &gt; <span>Payroll</span>
        </nav>
      </div>

      {/* Filter Options */}
      <div className="flex items-center mb-4 space-x-4">
        <div className="flex items-center">
          <label htmlFor="monthFilter" className="mr-2 text-sm font-medium">Month *</label>
          <select id="monthFilter" className="border rounded p-2">
            <option value="Jan">Jan</option>
            <option value="Feb">Feb</option>
            <option value="Mar">Mar</option>
            <option value="Apr">Apr</option>
            <option value="May">May</option>
            <option value="Jun">Jun</option>
            <option value="Jul">Jul</option>
            <option value="Aug">Aug</option>
            <option value="Sep">Sep</option>
            <option value="Oct">Oct</option>
            <option value="Nov">Nov</option>
            <option value="Dec">Dec</option>
          </select>
        </div>
        <div className="flex items-center">
          <label htmlFor="yearFilter" className="mr-2 text-sm font-medium">Year *</label>
          <select id="yearFilter" className="border rounded p-2">
            {years.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Filter
        </button>
      </div>

      {/* Table Controls */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <label htmlFor="showEntries" className="text-sm">Show</label>
          <select id="showEntries" className="border rounded p-2">
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="200">200</option>
          </select>
          <span className="text-sm">Entries</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaSearch />
          <input
            type="text"
            placeholder="Search"
            className="border rounded p-2"
          />
        </div>
      </div>

      {/* Payroll Table */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 text-left text-sm font-medium text-gray-900">#</th>
              <th className="py-2 px-4 text-left text-sm font-medium text-gray-900">Employee</th>
              <th className="py-2 px-4 text-left text-sm font-medium text-gray-900">Payroll Type</th>
              <th className="py-2 px-4 text-left text-sm font-medium text-gray-900">Basic Salary</th>
              <th className="py-2 px-4 text-left text-sm font-medium text-gray-900">Net Salary</th>
              <th className="py-2 px-4 text-left text-sm font-medium text-gray-900">Month-Year</th>
              <th className="py-2 px-4 text-left text-sm font-medium text-gray-900">Status</th>
              <th className="py-2 px-4 text-left text-sm font-medium text-gray-900">Generated At</th>
              <th className="py-2 px-4 text-left text-sm font-medium text-gray-900">Generated By</th>
              <th className="py-2 px-4 text-left text-sm font-medium text-gray-900">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {/* Add rows dynamically here */}
            <tr>
              <td className="py-2 px-4 text-sm text-gray-700">1</td>
              <td className="py-2 px-4 text-sm text-gray-700">John Doe</td>
              <td className="py-2 px-4 text-sm text-gray-700">Monthly</td>
              <td className="py-2 px-4 text-sm text-gray-700">₹2000</td>
              <td className="py-2 px-4 text-sm text-gray-700">₹2500</td>
              <td className="py-2 px-4 text-sm text-gray-700">Sep-2024</td>
              <td className="py-2 px-4 text-sm text-gray-700">Paid</td>
              <td className="py-2 px-4 text-sm text-gray-700">09/01/2024</td>
              <td className="py-2 px-4 text-sm text-gray-700">Admin</td>
              <td className="py-2 px-4 text-sm text-gray-700">
                {/* Action buttons or links */}
              </td>
            </tr>
            {/* More rows as needed */}
          </tbody>
        </table>
        <div className="text-center text-sm mt-4">No Result Found</div>
      </div>

      {/* Generate Payroll Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-1/3">
            <h2 className="text-xl font-bold mb-4">Generate Payroll</h2>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col">
                <label htmlFor="modalMonth" className="text-sm font-medium">Month *</label>
                <select id="modalMonth" className="border rounded p-2">
                  {/* Add all months */}
                  <option value="Jan">Jan</option>
                  <option value="Feb">Feb</option>
                  <option value="Mar">Mar</option>
                  <option value="Apr">Apr</option>
                  <option value="May">May</option>
                  <option value="Jun">Jun</option>
                  <option value="Jul">Jul</option>
                  <option value="Aug">Aug</option>
                  <option value="Sep">Sep</option>
                  <option value="Oct">Oct</option>
                  <option value="Nov">Nov</option>
                  <option value="Dec">Dec</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="modalYear" className="text-sm font-medium">Year *</label>
                <select id="modalYear" className="border rounded p-2">
                  {years.map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={closeModal}
                  className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payroll;
