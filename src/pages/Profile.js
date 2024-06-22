import React from 'react';
import nitmz from "../assests/images/nitmz.png"

// Mock data for checkpoint profile and recent vehicles
const checkpoint = {
  name: 'Vairengte Check Gate',
  location: 'Aizawl, Mizoram',
  totalVehicles: 1234,
  todayVehicles: 56,
  openSince: '2023-01-15', // Example date
  contactPerson: 'Vinay Patel',
  contactNumber: '+91 9305346457',
  email: 'vinay@nitmz.ac.in',
  profileImage: nitmz,
};

const recentVehicles = [
  { id: 1, time: '2023-06-01 10:00 AM', vehicleNo: 'MZ-01-1234', status: 'Passed' },
  { id: 2, time: '2023-06-01 10:05 AM', vehicleNo: 'MZ-02-5678', status: 'Passed' },
  { id: 3, time: '2023-06-01 10:10 AM', vehicleNo: 'MZ-03-9101', status: 'Rejected' },
  // Add more mock data as needed
];

const Profile = () => {
  return (
    <div className="w-full h-full">
      <div className=" bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <div className="flex items-center">
            <img src={checkpoint.profileImage} alt="Profile" className="h-20 w-20 rounded-full mr-4" />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{checkpoint.name}</h1>
              <p className="text-gray-600">{checkpoint.location}</p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-2">Contact Information</h2>
              <p className="text-gray-600"><span className="font-semibold">Contact Person:</span> {checkpoint.contactPerson}</p>
              <p className="text-gray-600"><span className="font-semibold">Contact Number:</span> {checkpoint.contactNumber}</p>
              <p className="text-gray-600"><span className="font-semibold">Email:</span> {checkpoint.email}</p>
              <p className="text-gray-600"><span className="font-semibold">Opened Since:</span> {new Date(checkpoint.openSince).toLocaleDateString()}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-2">Gate Metrics</h2>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="text-md font-semibold text-gray-700">Total Vehicles</h3>
                <p className="text-lg text-gray-900">{checkpoint.totalVehicles}</p>
              </div>
              <div className="mt-4 bg-gray-100 p-4 rounded-lg">
                <h3 className="text-md font-semibold text-gray-700">Vehicles Today</h3>
                <p className="text-lg text-gray-900">{checkpoint.todayVehicles}</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Recent Vehicles Passed</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b border-gray-200 text-gray-700">Time</th>
                    <th className="py-2 px-4 border-b border-gray-200 text-gray-700">Vehicle No.</th>
                    <th className="py-2 px-4 border-b border-gray-200 text-gray-700">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentVehicles.map(vehicle => (
                    <tr key={vehicle.id}>
                      <td className="py-2 px-4 border-b border-gray-200">{vehicle.time}</td>
                      <td className="py-2 px-4 border-b border-gray-200">{vehicle.vehicleNo}</td>
                      <td className={`py-2 px-4 border-b border-gray-200 ${vehicle.status === 'Passed' ? 'text-green-600' : 'text-red-600'}`}>{vehicle.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
