'use client';

import React from 'react';
import TopHeader from './TopHeader';
import MiddleHeader from './MiddleHeader';
import NavMenu from './NavMenu';
import InfoBar from './Infobar';
const Header: React.FC = () => {
  return (
    <div className="w-full">
        <TopHeader />
        <MiddleHeader />
        <NavMenu />
        <InfoBar />
    </div>
  );
};

export default Header;
