import React from "react";
import { Layout, Menu } from "antd";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";

export const Header = ({ setActiveSection, activeSection }) => {
  const { Header: HeaderDiv } = Layout;

  return (
    <HeaderDiv style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <div className="logo">
        <img src="/logo.png" alt="logo" />
        <div>Movie App</div>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[activeSection]}
      >
        <Menu.Item
          key="All Movies"
          onClick={() => setActiveSection("All Movies")}
          icon={<VideoCameraOutlined />}
        >
          All Movies
        </Menu.Item>
        <Menu.Item
          key="My Movies"
          onClick={() => setActiveSection("My Movies")}
          icon={<UserOutlined />}
        >
          My Movies
        </Menu.Item>
      </Menu>
    </HeaderDiv>
  );
};
