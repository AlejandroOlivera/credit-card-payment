import { useDispatch, useSelector } from 'react-redux';
import { Flex, Loader, Modal } from '@mantine/core';
import { useState } from 'react';

import { NumberCardInput } from '@/components/NumberCardInput/NumberCardInput';
import { ExpiryDateInput } from '@/components/ExpiryDateInput/ExpiryDateInput';
import { WButton } from '@/components/WButton/WButton';
import { CvcInput } from '@/components/CvcInput/CvcInput';
import { RootState } from '@/store/store';

import { closeModal } from '../Product/productSlice';

import classes from './CreditCardInfo.module.css';
import { NameCreditCard } from '@/components/NameCreditCard/NameCreditCard';
import { validateCreditCard } from './creditCardInfoSlice';

interface ICreditCardInfo {
  onActionChange: () => void;
}

export const CreditCardInfo: React.FC<ICreditCardInfo> = ({
  onActionChange,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const product = useSelector((state: RootState) => state.product);
  const creditCart = useSelector((state: RootState) => state.creditCard);

  const showModal = () => {
    dispatch(closeModal());
  };

  const addCreditCard = () => {
    dispatch(validateCreditCard());
    setIsLoading(true);
    if (creditCart.isValid) {
      onActionChange();
      setIsLoading(false);
    }
  };

  return (
    <Modal
      title="Add a credit card"
      opened={product.showModal}
      onClose={showModal}
      centered
      data-testid="credit-card-info-section"
    >
      <NumberCardInput />
      <NameCreditCard />

      <Flex direction="column" mt={20}>
        <Flex gap={50} mb={20}>
          <ExpiryDateInput />
          <CvcInput />
        </Flex>
        <Flex justify="end" gap={10} align="center">
          {isLoading && <Loader flex={1} />}

          <WButton
            styles={classes.creditButton}
            title="Add Credit card"
            onClick={addCreditCard}
          />
        </Flex>
      </Flex>
    </Modal>
  );
};
