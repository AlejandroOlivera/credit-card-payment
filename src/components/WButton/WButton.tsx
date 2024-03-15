import { Button } from '@mantine/core';

interface IWbutton {
  title: string;
  onClick: () => void;
  styles?: string;
  icon: React.ReactNode; //SVG icon
}

export const WButton: React.FC<IWbutton> = ({ title, onClick, styles, icon }) => (
  <Button className={styles} onClick={onClick}>
    {title}
    <span className="icon">{icon}</span>
  </Button>
);
