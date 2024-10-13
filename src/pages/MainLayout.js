import React, { useState } from "react";
import {
  MenuFoldOutlined,
  DashboardOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  LogoutOutlined,
  BellOutlined,
  SettingOutlined,
  ToolOutlined,
  BarChartOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { GiPoliceBadge, GiBriefcase } from "react-icons/gi";
import { FaFileAlt } from "react-icons/fa";
import { Layout, Menu } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import nitmz from "../assests/images/nitmz.png"

const { Header, Sider, Content } = Layout;

const PoliceAdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="flex items-center justify-center h-16">
          <h2 className="text-white text-lg font-bold">
            <span className="sm-logo">MP</span>
            <span className="lg-logo">Mizoram Police</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key === "signout") {
              navigate("/signout");
            } else {
              navigate(key);
            }
          }}
          className="mt-4"
          items={[
            {
              key: "",
              icon: <DashboardOutlined style={{ fontSize: '20px' }} />,
              label: "Dashboard",
            },
            {
              key: "cases",
              icon: <GiBriefcase style={{ fontSize: '20px' }} />,
              label: "Cases",
              children: [
                {
                  key: "new-case",
                  icon: <GiBriefcase style={{ fontSize: '20px' }} />,
                  label: "New Case",
                },
                {
                  key: "case-list",
                  icon: <GiBriefcase style={{ fontSize: '20px' }} />,
                  label: "Case List",
                },
              ],
            },
            {
              key: "officers",
              icon: <GiPoliceBadge style={{ fontSize: '20px' }} />,
              label: "Officers",
            },
            {
              key: "reports",
              icon: <FaFileAlt style={{ fontSize: '20px' }} />,
              label: "Reports",
              children: [
                {
                  key: "incident-report",
                  icon: <FaFileAlt style={{ fontSize: '20px' }} />,
                  label: "Incident Report",
                },
                {
                  key: "report-list",
                  icon: <FaFileAlt style={{ fontSize: '20px' }} />,
                  label: "Report List",
                },
              ],
            },
            {
              key: "analytics",
              icon: <BarChartOutlined style={{ fontSize: '20px' }} />,
              label: "Analytics",
            },
            {
              key: "user-management",
              icon: <UserOutlined style={{ fontSize: '20px' }} />,
              label: "User Management",
            },
            {
              key: "audit-logs",
              icon: <ToolOutlined style={{ fontSize: '20px' }} />,
              label: "Audit Logs",
            },
            {
              key: "settings",
              icon: <SettingOutlined style={{ fontSize: '20px' }} />,
              label: "Settings",
            },
            {
              key: "help",
              icon: <QuestionCircleOutlined style={{ fontSize: '20px' }} />,
              label: "Help & Support",
            },
            {
              key: "notifications",
              icon: <BellOutlined style={{ fontSize: '20px' }} />,
              label:"Notifications"
              // label: (
              //   <span>
              //     Notifications <span className="notification-badge">3</span>
              //   </span>
              // ),
            },
            {
              key: "profile",
              icon: <UserOutlined style={{ fontSize: '20px' }} />,
              label: "Profile",
            },
            {
              key: "signout",
              icon: <LogoutOutlined style={{ fontSize: '20px' }} />,
              label: "Sign Out",
            },
          ]}
        />
        {!collapsed && (
          <div className="version-info flex flex-col items-center justify-center h-24 text-white">
            <p className="text-sm">Version 1.0.0</p>
            <p className="text-sm">&copy; 2024 Mizoram Police</p>
          </div>
        )}
      </Sider>
      <Layout className="min-h-screen">
        <Header className="flex items-center justify-between px-4">
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "text-white text-2xl cursor-pointer",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div className="flex gap-4 items-center">
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-lg font-semibold text-white">
                Vairengte Check Gate
              </h3>
              <p className="text-sm text-gray-300">Aizawl, Mizoram</p>
            </div>
            <div className="relative">
              <img
                width={44}
                height={44}
                src={nitmz}
                alt="Admin"
                className="rounded-full"
              />
            </div>
          </div>
        </Header>
        <Content className="p-4 bg-gray-100">
          <ToastContainer
            position="top-right"
            autoClose={250}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light"
          />
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default PoliceAdminLayout;
