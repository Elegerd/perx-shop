import React from 'react';
import { LayoutProps } from 'Types/common';

const MainLayout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <div className="main-layout">
      <header className="main-layout__header">Header</header>
      <div className="main-layout__content">{children}</div>
    </div>
  );
};

export default MainLayout;
