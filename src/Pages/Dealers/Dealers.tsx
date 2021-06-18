import { Context } from 'App';
import { Spinner } from 'Components';
import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rootActions, rootSelectors } from 'Store/ducks';
import DealerItem from './Components/DealerItem';

const Dealers: React.VFC = () => {
  const dispatch = useDispatch();
  const { dealerIds } = useContext(Context);
  const dealers = useSelector(rootSelectors.dealers.selectDealers);
  const isLoading = useSelector(rootSelectors.dealers.selectIsLoadingDealers);

  useEffect(() => {
    dispatch(rootActions.dealers.fetchDealers.request({ params: { dealerIds } }));
  }, [dealerIds, dispatch]);

  return (
    <div className="dealers">
      {isLoading ? (
        <div className="spinner__wrapper">
          <Spinner size="big" />
        </div>
      ) : (
        <div className="dealers__list">
          <h2>Dealers</h2>
          {dealers.map(dealer => (
            <DealerItem key={dealer.name} dealer={dealer} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dealers;
