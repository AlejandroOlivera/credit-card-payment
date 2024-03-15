import React from 'react';

interface FrameProps {
  children: React.ReactNode;
}

export const Frame: React.FC<FrameProps> = ({ children }) => {
  return <div className="frame">{children}</div>;
};
