import { useState } from 'react';
import { Modal } from '@mantine/core';

import { WText } from '@/components/WText/WText';
import classes from './Product.module.css';
import { Frame } from '@/components/WFrame/WFrame';
import { WButton } from '@/components/WButton/WButton';

interface IProduct {}

export const Product: React.FC<IProduct> = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <section className={classes.product}>
      <div className={classes.headerProduct}>
        <div>
          <Frame styles={classes.frameSelect}>
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

        <div className={classes.imageProductContainer}>
          <img src="/test.png" alt="headphone" />
        </div>
      </div>

      <div>
        <WText text="Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu" />
        <WText text="Iphone" />
        <WText text="Iphone" />
      </div>

      <div className={classes.buttonContainer}>
        <WText text="$50.09" />
        <WButton
          styles={classes.buttonProduct}
          title="Paid the product"
          onClick={() => setIsShowModal(true)}
        />
      </div>

      <Modal fullScreen opened={isShowModal} onClose={() => setIsShowModal(false)} />
    </section>
  );
};
