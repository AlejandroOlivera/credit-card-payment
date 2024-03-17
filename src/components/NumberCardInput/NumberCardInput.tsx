import { useState } from 'react';
import { WInput } from '../WInput/WInput';
import { CardTypeDisplay } from '../CardTypeDisplay/CardTypeDisplay';
import classes from './NumberCardInput.module.css';

export const NumberCardInput = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardType, setCardType] = useState('');
  console.log('🚀 ~ NumberCardInput ~ cardType:', cardType);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;

    // Eliminar cualquier carácter que no sea un número
    value = value.replace(/\D/g, '');

    if (value === '') {
      // Si el valor es una cadena vacía, establece el tipo de tarjeta en una cadena vacía y el número de tarjeta también en una cadena vacía.
      setCardType('');
      setCardNumber('');
      return;
    }

    if (!/^3[47]/.test(value)) {
      value = value.slice(0, 16);
    }

    // Agregar espacios dependiendo del tipo de tarjeta
    if (value.length <= 4) {
      // No hay suficientes números para determinar el tipo de tarjeta
      setCardNumber(value);
    } else {
      // Determinar el tipo de tarjeta

      if (/^4/.test(value)) {
        setCardType('visa');
      } else if (/^5[1-5]/.test(value)) {
        setCardType('mastercard');
      } else if (/^3[47]/.test(value)) {
        setCardType('amex');
      }

      // Agregar espacios según el tipo de tarjeta
      if (cardType === 'amex') {
        // Formato para American Express: XXXX XXXXXX XXXXX
        value = value.replace(/^(\d{4})(\d{6})(\d{5})$/, '$1 $2 $3');
      } else {
        // Formato para Visa, Mastercard, etc.: XXXX XXXX XXXX XXXX
        value = value.replace(/(\d{4})/g, '$1 ').trim();
      }

      setCardNumber(value);
    }
  };

  return (
    <div className={classes.formGroup}>
      <WInput
        inputLabel="Card number"
        onChange={handleChange}
        type="text"
        value={cardNumber}
        placeholder="Credit card number"
      />
      <CardTypeDisplay
        selected={cardType}
        cards={['visa', 'mastercard', 'amex']}
      />
    </div>
  );
};
