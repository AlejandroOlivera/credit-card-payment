import React from 'react';

interface FrameProps {
  children: React.ReactNode;
  styles?: string;
}

export const WFrame: React.FC<FrameProps> = ({ children, styles }) => (
  <div className={styles}>{children}</div>
);
