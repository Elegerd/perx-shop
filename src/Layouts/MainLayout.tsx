import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutProps } from 'Types/common';
import { BaseRoutes } from 'Types/routes';

interface MainLayoutProps extends LayoutProps {
  title: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  location,
}: MainLayoutProps) => {
  return (
    <div className="main-layout">
      <header className="main-layout__header">
        <nav className="main-layout__header-nav">
          <Link
            to={BaseRoutes.DEALERS}
            className={classNames('main-layout__link', {
              'main-layout__link--active': location.pathname === BaseRoutes.DEALERS,
            })}
          >
            Dealers
          </Link>
        </nav>
        <div className="main-layout__header-basket">
          <Link to={BaseRoutes.BASKET}>$10</Link>
        </div>
      </header>
      <div className="main-layout__content">{children}</div>
    </div>
  );
};

export default MainLayout;
