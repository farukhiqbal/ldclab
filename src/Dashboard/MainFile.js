import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Outlet } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const { Header, Sider, Content } = Layout;

const MainFile = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}    >
        <div className="logo" style={{ height: "32px", margin: "16px" }}>
          <h1 style={{ color: "white" }}> Dashboard</h1>
        </div>
        <Menu theme="dark"  className="text-white " mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<FaUserCircle />}>
            Profile
          </Menu.Item>
          <Menu.Item key="2" icon={<IoIosNotifications />}>
            Notifications
          </Menu.Item>
          <Menu.Item key="3" icon={<FaUserCircle />}>
            Users
          </Menu.Item>
          <Menu.Item key="4" icon={<FaUserCircle />}>
            Products
          </Menu.Item>
          <Menu.Item key="5" icon={<FaUserCircle />}>
            Orders
          </Menu.Item>
          <Menu.Item key="6" icon={<FaUserCircle />}>
            Settings
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="header" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggleCollapsed,
            }
          )}
        </Header>
        <Content style={{ margin: "16px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
      <ToastContainer />
    </Layout>
  );
};

export default MainFile;
