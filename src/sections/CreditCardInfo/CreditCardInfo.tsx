import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Flex, Modal } from '@mantine/core';

import { RootState } from '@/store/store';
import { closeModal } from '../Product/productSlice';

import { NumberCardInput } from '@/components/NumberCardInput/NumberCardInput';
import { WInput } from '@/components/WInput/WInput';
import { ExpiryDateInput } from '@/components/ExpiryDateInput/ExpiryDateInput';
import { WButton } from '@/components/WButton/WButton';
import { CvcInput } from '@/components/CvcInput/CvcInput';

export const CreditCardInfo = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');

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
      <WInput
        inputLabel="Name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Flex gap={10}>
        <ExpiryDateInput />
        <CvcInput />
      </Flex>

      <WButton title="Pay Now" onClick={() => {}} />
    </Modal>
  );
};
