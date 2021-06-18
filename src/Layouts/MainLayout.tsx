import { BasketIcon } from 'Assets/images/icons';
import classNames from 'classnames';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { rootSelectors } from 'Store/ducks';
import { LayoutProps } from 'Types/common';
import { BaseRoutes } from 'Types/routes';

interface MainLayoutProps extends LayoutProps {
  title: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  location,
}: MainLayoutProps) => {
  const count = useSelector(rootSelectors.basket.selectGetCount);

  return (
    <div className="main-layout">
      <header className="main-layout__header">
        <nav className="main-layout__header-nav">
          <Link
            to={BaseRoutes.GOODS}
            className={classNames('main-layout__link', {
              'main-layout__link--active': location.pathname === BaseRoutes.GOODS,
            })}
          >
            Goods
          </Link>
        </nav>
        <Link to={BaseRoutes.BASKET} className="main-layout__header-basket">
          <ReactSVG src={BasketIcon} />
          <span>Basket</span>
          {!!count && <span className="main-layout__header-counter">{count}</span>}
        </Link>
      </header>
      <div className="main-layout__content">{children}</div>
    </div>
  );
};

export default MainLayout;
