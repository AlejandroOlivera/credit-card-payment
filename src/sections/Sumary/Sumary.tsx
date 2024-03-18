import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { IoMdCloseCircle } from 'react-icons/io';
import { Loader, Notification } from '@mantine/core';

import { CreditCard } from '@/components/CreditCard/CreditCard';
import classes from './Sumary.module.css';
import { CartDetail } from '@/components/CartDetail/CartDetail';
import { WButton } from '@/components/WButton/WButton';

interface ISummary {
  onActionChange: () => void;
}

export const Summary: React.FC<ISummary> = ({ onActionChange }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const [messageNotification, setMessageNotification] = useState('');

  const handlePayment = async () => {
    setIsLoading(true);
    setShowNotification(false);
    try {
      await new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.5) {
            resolve();
          } else {
            reject();
          }
        }, 2000);
      });
      setMessageNotification('Paso');
      setIsError(false);

      setTimeout(() => {
        onActionChange();
      }, 3000);
    } catch (error) {
      setIsError(true);
      setMessageNotification('Payment failed due to network issue');
    } finally {
      setIsLoading(false);
      setShowNotification(true);
    }
  };

  return (
    <section className={classes.sumary}>
      <CreditCard />
      <CartDetail />
      <WButton
        styles={classes.buttonSumary}
        title="Buy"
        onClick={handlePayment}
      />
      {showNotification && (
        <Notification
          icon={isError ? <IoMdCloseCircle /> : <FaCheck />}
          withBorder
          color={isError ? 'red' : 'green'}
          radius="lg"
          onClose={() => setShowNotification(false)}
        >
          {messageNotification}
        </Notification>
      )}
      {isLoading && <Loader color="blue" />}
    </section>
  );
};
