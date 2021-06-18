import { CartIcon } from 'Assets/images/icons';
import { UIButton } from 'Components';
import React, { useMemo } from 'react';
import { Dealer } from 'Types/common';
import { formatCurrency, getImageSrc } from 'Utils/functions';

interface DealerItemProps {
  dealer: Dealer;
}

const DealerItem: React.VFC<DealerItemProps> = ({ dealer }: DealerItemProps) => {
  const src = useMemo(() => getImageSrc(dealer.image), [dealer]);

  const currency = useMemo(() => formatCurrency(dealer.price), [dealer]);

  return (
    <div className="dealers__item">
      <img src={src} alt={dealer.name} className="dealers__item-img" />
      <p className="dealers__item-name">{dealer.name}</p>
      <div className="dealers__item-basket">
        <span>{currency}</span>
        <UIButton icon={CartIcon}>Add basket</UIButton>
      </div>
    </div>
  );
};

export default DealerItem;
