import { useDispatch, useSelector } from 'react-redux';

import { Flex, Modal } from '@mantine/core';

import { RootState } from '@/store/store';
import { closeModal } from '../Product/productSlice';

import { NumberCardInput } from '@/components/NumberCardInput/NumberCardInput';
import { WInput } from '@/components/WInput/WInput';
import { WButton } from '@/components/WButton/WButton';

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
    >
      <NumberCardInput />
      <WInput inputLabel="Name" type="text" placeholder="Name" />
      <Flex gap={10}>
        <WInput width={50} inputLabel="Name" type="text" placeholder="MM/YY" />
        <WInput inputLabel="Name" type="text" placeholder="CVC" />
      </Flex>

      <WButton title="Pay Now" onClick={() => {}} />
    </Modal>
  );
};
