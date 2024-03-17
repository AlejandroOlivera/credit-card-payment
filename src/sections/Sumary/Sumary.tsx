import { CreditCard } from '@/components/CreditCard/CreditCard';
import classes from './Sumary.module.css';
import { CartDetail } from '@/components/CartDetail/CartDetail';
import { WButton } from '@/components/WButton/WButton';

export const Sumary = () => {
  return (
    <section className={classes.sumary}>
      <CreditCard />
      <CartDetail />
      <WButton styles={classes.buttonSumary} title="Buy" onClick={() => {}} />
    </section>
  );
};
