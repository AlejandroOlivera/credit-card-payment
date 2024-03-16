import { useState } from 'react';
import { Modal } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import { WText } from '@/components/WText/WText';
import classes from './Product.module.css';
import { WFrame } from '@/components/WFrame/WFrame';
import { WButton } from '@/components/WButton/WButton';

interface IProduct {}

const MOBILE_MEDIA_QUERY = '(max-width: 50em)';

export const Product: React.FC<IProduct> = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const isMobile = useMediaQuery(MOBILE_MEDIA_QUERY);

  return (
    <section className={classes.product}>
      <div className={classes.headerProduct}>
        <div className={classes.headPhoneMinis}>
          <WFrame styles={classes.frameSelect}>
            <img src="/HeadPhoneMini1.png" alt="headphoneMini1" />
          </WFrame>

          <WFrame styles={classes.frame}>
            <img src="/HeadPhoneMini2.png" alt="headphoneMini2" />
          </WFrame>

          <WFrame styles={classes.frame}>
            <img src="/HeadPhoneMini3.png" alt="headphoneMini3" />
          </WFrame>

          <WFrame styles={classes.frame}>
            <img src="/HeadPhoneMini4.png" alt="headphoneMini4" />
          </WFrame>
        </div>

        <div className={classes.imageProductContainer}>
          <img src="/HeadPhone1.png" alt="headphone" />
        </div>
      </div>

      <div className={classes.descriptionContainer}>
        <div className={classes.productTitle}>
          <WText text="Sony WH-1000XM4" />
          <WText text="4.9" styles={classes.productRating} />
        </div>

        <WText text="Wireless Over-ear Industry Leading Noise Canceling Headphones with Microphone" />
      </div>

      <div className={classes.buttonContainer}>
        <WText text="$50.09" />
        <WButton
          styles={classes.buttonProduct}
          title="Paid with credit card"
          onClick={() => setIsShowModal(true)}
        />
      </div>

      <Modal fullScreen={isMobile} opened={isShowModal} onClose={() => setIsShowModal(false)} />
    </section>
  );
};
