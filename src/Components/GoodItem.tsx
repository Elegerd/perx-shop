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
    <div className="good-item">
      <img src={src} alt={good.name} className="good-item__img" />
      <p className="good-item__name">{good.name}</p>
      <div className="good-item__basket">
        <span>{currency}</span>
        {!count ? (
          <UIButton icon={CartIcon} onClick={onClickAdd}>
            Add basket
          </UIButton>
        ) : (
          <div className="good-item__counter">
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
