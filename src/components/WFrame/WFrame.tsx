import React from 'react';

interface FrameProps {
  children: React.ReactNode;
  styles?: string;
}

export const Frame: React.FC<FrameProps> = ({ children, styles }) => (
  <div className={styles}>{children}</div>
);
