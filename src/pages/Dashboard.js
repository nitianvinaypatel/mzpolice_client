import React from 'react';

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Mizoram Check Gate Monitoring System</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700">Total Vehicles</h3>
            <p className="text-2xl text-gray-900">1,234</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700">Total Check Gates</h3>
            <p className="text-2xl text-gray-900">15</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700">Vehicles Today</h3>
            <p className="text-2xl text-gray-900">123</p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Recent Activity</h3>
          <div className="bg-white rounded-lg shadow-md">
            <table className="min-w-full bg-white">
              <thead className='font-bold'>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200 text-gray-700">Serial No.</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-gray-700">Entering Time</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-gray-700">Exit Time</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-gray-700">Frequency</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-gray-700">Gate</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-gray-700">Vehicle No.</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-gray-700">Driver Name</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-gray-700">Status</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200">1</td>
                  <td className="py-2 px-4 border-b border-gray-200">10:00 AM</td>
                  <td className="py-2 px-4 border-b border-gray-200">10:15 AM</td>
                  <td className="py-2 px-4 border-b border-gray-200">2</td>
                  <td className="py-2 px-4 border-b border-gray-200">Gate 1</td>
                  <td className="py-2 px-4 border-b border-gray-200">MZ-01-1234</td>
                  <td className="py-2 px-4 border-b border-gray-200">John Doe</td>
                  <td className="py-2 px-4 border-b border-gray-200">Passed</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200">2</td>
                  <td className="py-2 px-4 border-b border-gray-200">10:05 AM</td>
                  <td className="py-2 px-4 border-b border-gray-200">10:25 AM</td>
                  <td className="py-2 px-4 border-b border-gray-200">3</td>
                  <td className="py-2 px-4 border-b border-gray-200">Gate 2</td>
                  <td className="py-2 px-4 border-b border-gray-200">MZ-02-5678</td>
                  <td className="py-2 px-4 border-b border-gray-200">Jane Smith</td>
                  <td className="py-2 px-4 border-b border-gray-200">Passed</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200">3</td>
                  <td className="py-2 px-4 border-b border-gray-200">10:10 AM</td>
                  <td className="py-2 px-4 border-b border-gray-200">10:30 AM</td>
                  <td className="py-2 px-4 border-b border-gray-200">1</td>
                  <td className="py-2 px-4 border-b border-gray-200">Gate 3</td>
                  <td className="py-2 px-4 border-b border-gray-200">MZ-03-9012</td>
                  <td className="py-2 px-4 border-b border-gray-200">Mike Johnson</td>
                  <td className="py-2 px-4 border-b border-gray-200">Failed</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200">4</td>
                  <td className="py-2 px-4 border-b border-gray-200">10:15 AM</td>
                  <td className="py-2 px-4 border-b border-gray-200">10:35 AM</td>
                  <td className="py-2 px-4 border-b border-gray-200">2</td>
                  <td className="py-2 px-4 border-b border-gray-200">Gate 4</td>
                  <td className="py-2 px-4 border-b border-gray-200">MZ-04-3456</td>
                  <td className="py-2 px-4 border-b border-gray-200">Sara Lee</td>
                  <td className="py-2 px-4 border-b border-gray-200">Passed</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200">5</td>
                  <td className="py-2 px-4 border-b border-gray-200">10:20 AM</td>
                  <td className="py-2 px-4 border-b border-gray-200">10:40 AM</td>
                  <td className="py-2 px-4 border-b border-gray-200">3</td>
                  <td className="py-2 px-4 border-b border-gray-200">Gate 5</td>
                  <td className="py-2 px-4 border-b border-gray-200">MZ-05-7890</td>
                  <td className="py-2 px-4 border-b border-gray-200">David Brown</td>
                  <td className="py-2 px-4 border-b border-gray-200">Passed</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
