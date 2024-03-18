import { useDispatch, useSelector } from 'react-redux';
import { Flex, Modal } from '@mantine/core';
import { useCallback, useState } from 'react';

import { NumberCardInput } from '@/components/NumberCardInput/NumberCardInput';
import { ExpiryDateInput } from '@/components/ExpiryDateInput/ExpiryDateInput';
import { WButton } from '@/components/WButton/WButton';
import { CvcInput } from '@/components/CvcInput/CvcInput';
import { RootState } from '@/store/store';

import { closeModal } from '../Product/productSlice';

import classes from './CreditCardInfo.module.css';
import { NameCreditCard } from '@/components/NameCreditCard/NameCreditCard';

import { WText } from '@/components/WText/WText';

interface ICreditCardInfo {
  onActionChange: () => void;
}

export const CreditCardInfo: React.FC<ICreditCardInfo> = ({
  onActionChange,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();

  const product = useSelector((state: RootState) => state.product);
  const creditCart = useSelector((state: RootState) => state.creditCard);

  const showModal = () => {
    dispatch(closeModal());
  };

  const addCreditCard = useCallback(() => {
    if (
      creditCart.cardNumber !== '' &&
      creditCart.name !== '' &&
      creditCart.expiryDate !== '' &&
      creditCart.expiryDateIsValid
    ) {
      onActionChange();
    } else {
      setIsLoading(true);
      setErrorMessage('Credit card no valid');
    }
  }, [creditCart]);

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
          {isLoading && <WText text={errorMessage} />}

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
