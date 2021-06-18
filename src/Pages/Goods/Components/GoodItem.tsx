import { CartIcon } from 'Assets/images/icons';
import { UIButton } from 'Components';
import React, { useMemo, useCallback } from 'react';
import { Good } from 'Types/common';
import { formatCurrency, getImageSrc } from 'Utils/functions';

interface GoodItemProps {
  good: Good;
  count: number;
  addToBasket: (good: Good) => void;
  removeFromBasket: (goodId: string) => void;
}

const GoodItem: React.VFC<GoodItemProps> = ({
  good,
  count,
  addToBasket,
  removeFromBasket,
}: GoodItemProps) => {
  const src = useMemo(() => getImageSrc(good.image), [good]);

  const currency = useMemo(() => formatCurrency(good.price), [good]);

  const onClickAdd = useCallback(() => addToBasket(good), [addToBasket, good]);
  const onClickRemove = useCallback(
    () => removeFromBasket(good.id),
    [removeFromBasket, good],
  );

  return (
    <div className="goods__item">
      <img src={src} alt={good.name} className="goods__item-img" />
      <p className="goods__item-name">{good.name}</p>
      <div className="goods__item-basket">
        <span>{currency}</span>
        {!count ? (
          <UIButton icon={CartIcon} onClick={onClickAdd}>
            Add basket
          </UIButton>
        ) : (
          <div className="goods__item-counter">
            <UIButton text="-" onClick={onClickRemove} />
            <span>{count}</span>
            <UIButton text="+" onClick={onClickAdd} />
          </div>
        )}
      </div>
    </div>
  );
};

export default GoodItem;
