import { Context } from 'App';
import { Spinner } from 'Components';
import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rootActions, rootSelectors } from 'Store/ducks';
import GoodItem from 'Components/GoodItem';
import { Good } from 'Types/common';

const Goods: React.VFC = () => {
  const dispatch = useDispatch();
  const { dealerIds } = useContext(Context);

  const goods = useSelector(rootSelectors.goods.selectGoods);
  const isLoading = useSelector(rootSelectors.goods.selectIsLoadingGoods);

  const basket = useSelector(rootSelectors.basket.selectBasket);

  const addToBasket = (good: Good) => dispatch(rootActions.basket.addToBasket(good));
  const removeFromBasket = (goodId: string) =>
    dispatch(rootActions.basket.removeFromBasket(goodId));

  useEffect(() => {
    dispatch(rootActions.goods.fetchGoods.request({ params: { dealerIds } }));
  }, [dealerIds, dispatch]);

  return (
    <div className="goods">
      {isLoading ? (
        <div className="spinner__wrapper">
          <Spinner size="big" />
        </div>
      ) : (
        <div className="list goods__list">
          <h2>Goods</h2>
          {goods.map(good => (
            <GoodItem
              key={good.id}
              good={good}
              count={basket[good.id]?.count || 0}
              addToBasket={addToBasket}
              removeFromBasket={removeFromBasket}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Goods;
