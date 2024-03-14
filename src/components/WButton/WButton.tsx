import { Button } from '@mantine/core';

interface IWbutton {
  title: string;
  onClick: () => void;
  styles?: string;
}

export const WButton: React.FC<IWbutton> = ({ title, onClick, styles }) => (
  <Button className={styles} onClick={onClick}>
    {title}
  </Button>
);
