import React, { useEffect } from 'react';
import './style.scss';

function ModalWrapper({ children, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Modal ochilganda scrollni o'chirish
    return () => {
      document.body.style.overflow = "auto"; // Modal yopilganda scrollni tiklash
    };
  }, []);

  return (
    <div className="modal-overlay show" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default ModalWrapper;