import { Button } from '@mantine/core';

interface IWbutton {
  title: string;
  onClick: () => void;
}

export const WButton: React.FC<IWbutton> = ({title, onClick}) => {
  return (
    <Button onClick={onClick} size="lg" radius="xl" variant="filled">
      {title}
    </Button>
  );
};

// /* Rectangle 4 */

// position: absolute;
// width: 200px;
// height: 50px;
// left: 127px;
// top: 0px;

// background: linear-gradient(122.33deg, #30BDDC 30.62%, #1E94E9 100%);
// box-shadow: 0px 0px 25px rgba(73, 211, 255, 0.25);
// border-radius: 50px;
