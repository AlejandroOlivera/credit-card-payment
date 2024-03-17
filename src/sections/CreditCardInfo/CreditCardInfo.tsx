import { useDispatch, useSelector } from 'react-redux';

import { Group, Modal } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { RootState } from '@/store/store';
import { closeModal } from '../Product/productSlice';

import { NumberCardInput } from '@/components/NumberCardInput/NumberCardInput';
import { WInput } from '@/components/WInput/WInput';
import { WButton } from '@/components/WButton/WButton';

const MOBILE_MEDIA_QUERY = '(max-width: 50em)';

export const CreditCardInfo = () => {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery(MOBILE_MEDIA_QUERY);
  const product = useSelector((state: RootState) => state.product);

  const showModal = () => {
    dispatch(closeModal());
  };

  return (
    <Modal
      title="Add a credit card"
      fullScreen={isMobile}
      opened={product.showModal}
      onClose={showModal}
      centered
    >
      <NumberCardInput />
      <WInput inputLabel="Name" type="text" placeholder="Name" />
      <Group>
        <WInput width={50} inputLabel="Name" type="text" placeholder="MM/YY" />
        <WInput inputLabel="Name" type="text" placeholder="CVC" />
      </Group>

      <WButton
        title="Pay Now"
        onClick={() => {
          console.log('Pago');
        }}
      />
    </Modal>
  );
};
