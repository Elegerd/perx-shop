import { GoodItem, UIButton } from 'Components';
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rootSelectors, rootActions } from 'Store/ducks';
import { Good } from 'Types/common';
import { formatCurrency } from 'Utils/functions';

const Basket: React.VFC = () => {
  const dispatch = useDispatch();

  const basket = useSelector(rootSelectors.basket.selectBasket);
  const total = useSelector(rootSelectors.basket.selectGetTotal);

  const currency = useMemo(() => formatCurrency(total), [total]);

  const addToBasket = (good: Good) => dispatch(rootActions.basket.addToBasket(good));
  const removeFromBasket = (goodId: string) =>
    dispatch(rootActions.basket.removeFromBasket(goodId));

  const clearBasket = () => dispatch(rootActions.basket.clearBasket());

  return (
    <div className="basket">
      <h2>Basket</h2>
      <div className="basket__actions">
        <UIButton text="Clear basket" onClick={clearBasket} />
        <UIButton text="Order" />
      </div>
      <div className="list basket__list">
        {Object.values(basket).map(({ good, count }) => (
          <GoodItem
            key={good.id}
            good={good}
            count={count}
            addToBasket={addToBasket}
            removeFromBasket={removeFromBasket}
          />
        ))}
      </div>
      <p className="basket__total">Total: {currency}</p>
    </div>
  );
};

export default Basket;
