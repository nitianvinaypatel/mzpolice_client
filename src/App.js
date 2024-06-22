import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../src/pages/MainLayout';
import Profile from './pages/Profile';
import Signout from './pages/Signout';
import Dashboard from './pages/Dashboard';
import Notifications from './pages/Notifications';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard/>} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="profile" element={<Profile />} />
        <Route path="signout" element={<Signout />} />
      </Route>
    </Routes>
  );
};

export default App;
