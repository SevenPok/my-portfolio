// Backdrop.tsx
import React from "react";

type BackdropProps = {
  isOpen: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
};

export const Backdrop: React.FC<BackdropProps> = ({ isOpen, onClick, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop-blur-sm"
      onClick={onClick}
    >
      {/* Spinner */}
      {children || (
        <div className="w-16 h-16 border-4 border-t-4 border-gray-200 rounded-full animate-spin border-t-blue-500"></div>
      )}
    </div>
  );
};
