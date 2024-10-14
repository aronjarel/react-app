import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import RightPanel from './RightPanel';
import './Layout.css';

const Layout = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className={`layout ${isSidebarCollapsed ? 'collapsed' : ''}`}>
      <Sidebar isCollapsed={isSidebarCollapsed} onToggle={handleSidebarToggle} />
      <div className="main-content">
        <Header />
        <div className="content-area">{children}</div>
      </div>
      <RightPanel />
    </div>
  );
};

export default Layout;
