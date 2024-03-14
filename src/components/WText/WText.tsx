import { Text } from '@mantine/core';

interface IWText {
  text: string;
  styles?: string;
}

export const WText: React.FC<IWText> = ({ text, styles }) => <Text className={styles}>{text}</Text>;
