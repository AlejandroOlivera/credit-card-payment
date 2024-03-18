import { CreditCard } from '@/components/CreditCard/CreditCard';
import classes from './Sumary.module.css';
import { CartDetail } from '@/components/CartDetail/CartDetail';
import { WButton } from '@/components/WButton/WButton';

interface ISummary {
  onActionChange: () => void;
}

export const Summary: React.FC<ISummary> = ({ onActionChange }) => {
  const handleBuy = () => {
    onActionChange();
  };
  return (
    <section className={classes.sumary}>
      <CreditCard />
      <CartDetail />
      <WButton styles={classes.buttonSumary} title="Buy" onClick={handleBuy} />
    </section>
  );
};
