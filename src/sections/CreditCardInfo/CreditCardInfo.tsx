import { useDispatch, useSelector } from 'react-redux';
import { Flex, Modal } from '@mantine/core';

import { NumberCardInput } from '@/components/NumberCardInput/NumberCardInput';
import { ExpiryDateInput } from '@/components/ExpiryDateInput/ExpiryDateInput';
import { WButton } from '@/components/WButton/WButton';
import { CvcInput } from '@/components/CvcInput/CvcInput';
import { RootState } from '@/store/store';

import { closeModal } from '../Product/productSlice';

import classes from './CreditCardInfo.module.css';
import { NameCreditCard } from '@/components/NameCreditCard/NameCreditCard';

export const CreditCardInfo = () => {
  const dispatch = useDispatch();

  const product = useSelector((state: RootState) => state.product);

  const showModal = () => {
    dispatch(closeModal());
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

        <Flex justify="end">
          <WButton
            styles={classes.creditButton}
            title="Add Credit card"
            onClick={showModal}
          />
        </Flex>
      </Flex>
    </Modal>
  );
};
