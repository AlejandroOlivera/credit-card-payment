import { useState } from 'react';
import { WText } from '@/components/WText/WText';
import classes from './Product.module.css';
import { Frame } from '@/components/WFrame/WFrame';

export const Product = () => {
  const [isTrue, setIsTrue] = useState(false);
  return (
    <section className={classes.product}>
      <div className={classes.headerProduct}>
        <div>
          <Frame styles={classes.frame}>
            <img src="/test.png" alt="headphone" />
          </Frame>

          <Frame styles={classes.frame}>
            <img src="/test.png" alt="headphone" />
          </Frame>

          <Frame styles={classes.frame}>
            <img src="/test.png" alt="headphone" />
          </Frame>

          <Frame styles={classes.frame}>
            <img src="/test.png" alt="headphone" />
          </Frame>
        </div>

        <div className={classes.imageProduct}>
          <img src="/test.png" alt="headphone" />
        </div>
      </div>
    </section>
  );
};
