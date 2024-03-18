import { useState } from 'react';

import { CreditCardInfo } from '@/sections/CreditCardInfo/CreditCardInfo';
import { Product } from '../sections/Product/Product';
import { Summary } from '@/sections/Sumary/Sumary';
import { FinalStatus } from '@/sections/FinalStatus/FinalStatus';

export const HomePage = () => {
  const [action, setAction] = useState('product');

  const handleActionChange = (newAction: string) => {
    setAction(newAction);
  };

  return (
    <>
      <header>
        <button type="button" onClick={() => handleActionChange('product')}>
          <span>Product</span>
        </button>
      </header>
      {action === 'product' && (
        <>
          <Product />
          <CreditCardInfo
            onActionChange={() => handleActionChange('summary')}
          />
        </>
      )}

      {action === 'summary' && (
        <Summary onActionChange={() => handleActionChange('finalStatus')} />
      )}
      {action === 'finalStatus' && <FinalStatus />}
    </>
  );
};
