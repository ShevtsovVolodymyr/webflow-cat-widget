import React from 'react';
import './modal.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="vl-modal">
      {/* Backdrop */}
      <div 
        className="vl-modal__backdrop"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="vl-modal__content">
        {/* Header */}
        <div className="vl-modal__header">
          <h4 className="vl-modal__title">{title}</h4>
          <button
            onClick={onClose}
            className="vl-modal__close-button"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>
        
        {/* Divider */}
        <div className="vl-modal__divider" />
        
        {/* Content */}
        <div className="vl-modal__body">
          {children}
        </div>
      </div>
    </div>
  );
};
