import React, { useState } from 'react';
import { FaCheckCircle, FaTimesCircle, FaBell } from 'react-icons/fa';

// Mock data for notifications
const initialNotifications = [
    { id: 1, title: 'Vehicle Passed', message: 'Vehicle MZ-01-1234 passed through Gate 1 at 10:00 AM.', time: '2024-06-21 10:00 AM', type: 'success' },
    { id: 2, title: 'Vehicle Rejected', message: 'Vehicle MZ-02-5678 was rejected at Gate 2 at 10:05 AM.', time: '2024-06-21 10:05 AM', type: 'error' },
    { id: 3, title: 'Checkpoint Alert', message: 'Checkpoint 3 reported an unusual activity.', time: '2024-06-21 10:10 AM', type: 'alert' },
    { id: 4, title: 'Vehicle Passed', message: 'Vehicle MZ-03-9101 passed through Gate 4 at 10:15 AM.', time: '2024-06-21 10:15 AM', type: 'success' },
    { id: 5, title: 'Vehicle Passed', message: 'Vehicle MZ-04-3456 passed through Gate 5 at 10:20 AM.', time: '2024-06-21 10:20 AM', type: 'success' },
    { id: 6, title: 'Vehicle Passed', message: 'Vehicle MZ-05-7890 passed through Gate 6 at 10:25 AM.', time: '2024-06-21 10:25 AM', type: 'success' },
    { id: 7, title: 'Vehicle Passed', message: 'Vehicle MZ-06-1234 passed through Gate 7 at 10:30 AM.', time: '2024-06-21 10:30 AM', type: 'success' },
    { id: 8, title: 'Vehicle Passed', message: 'Vehicle MZ-07-5678 passed through Gate 8 at 10:35 AM.', time: '2024-06-21 10:35 AM', type: 'success' },
    { id: 9, title: 'Vehicle Passed', message: 'Vehicle MZ-08-9101 passed through Gate 9 at 10:40 AM.', time: '2024-06-21 10:40 AM', type: 'success' },
    { id: 10, title: 'Vehicle Passed', message: 'Vehicle MZ-09-3456 passed through Gate 10 at 10:45 AM.', time: '2024-06-21 10:45 AM', type: 'success' },

];

const Notifications = () => {
    const [notifications, setNotifications] = useState(initialNotifications);

    const markAsRead = (id) => {
        setNotifications(notifications.filter(notification => notification.id !== id));
    };

    return (
        <div className="w-full h-full bg-gray-100">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Notifications</h1>
                    <div className="space-y-6">
                        {notifications.length === 0 ? (
                            <div className="text-center text-gray-500">No new notifications</div>
                        ) : (
                            notifications.map(notification => (
                                <div key={notification.id} className="flex items-start bg-gray-100 p-4 rounded-lg shadow-sm">
                                    <div className="mr-4">
                                        {notification.type === 'success' && <FaCheckCircle className="text-green-500 w-6 h-6" />}
                                        {notification.type === 'error' && <FaTimesCircle className="text-red-500 w-6 h-6" />}
                                        {notification.type === 'alert' && <FaBell className="text-yellow-500 w-6 h-6" />}
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-lg font-semibold text-gray-700">{notification.title}</h2>
                                        <p className="text-gray-600">{notification.message}</p>
                                        <p className="text-gray-500 text-sm">{notification.time}</p>
                                    </div>
                                    <button
                                        onClick={() => markAsRead(notification.id)}
                                        className="ml-4 text-blue-500 hover:underline"
                                    >
                                        Mark as Read
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notifications;
