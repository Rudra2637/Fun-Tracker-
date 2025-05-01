// components/Layout.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';

function Layout({ children }) {
  const { isDarkMode } = useSelector((state) => state.theme);
  const backgroundColor = isDarkMode ? '#1a202c' : '#ffffff';
  const textColor = isDarkMode ? '#ffffff' : '#000000';

  return (
    <div style={{ backgroundColor, color: textColor, minHeight: '100vh' }}>
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
