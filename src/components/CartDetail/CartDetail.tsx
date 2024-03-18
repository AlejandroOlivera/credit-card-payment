import { useSelector } from 'react-redux';
import { Divider } from '@mantine/core';
import { WText } from '../WText/WText';
import classes from './CartDetail.module.css';
import { RootState } from '@/store/store';

export const CartDetail = () => {
  const product = useSelector((state: RootState) => state.product);

  return (
    <div className={classes.cartDetail}>
      <div className={classes.list}>
        <div className={classes.imageContainer}>
          <img className={classes.image} src="/HeadPhoneMini1.png" alt="" />
          <div className={classes.textContainer}>
            <WText text={product.name} />
            <WText styles={classes.textQty} text="HeadPhone" />
          </div>
        </div>
      </div>
      <Divider className={classes.divider} size={2} />

      <div className={classes.proceBreakup}>
        <div className={classes.pricesContainer}>
          <div className={classes.subtotal}>
            <WText styles={classes.text} text="Subtotal" />
            <WText text={`$${product.price}`} />
          </div>

          <div className={classes.shippin}>
            <WText styles={classes.text} text="Shipping & Handing" />
            <WText text="Free" />
          </div>

          <div className={classes.tax}>
            <WText styles={classes.text} text="Tax" />
            <WText text="$10" />
          </div>
        </div>
        <div className={classes.total}>
          <WText styles={classes.text} text="Total" />
          <WText text={`$${product.price + 10}`} />
        </div>
      </div>
    </div>
  );
};
