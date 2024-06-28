// src/components/ModalButton.jsx
import React, { useState } from 'react';
import FormularioModal from './FormularioModal.astro';

const ModalButton = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button onClick={openModal}>
        Enviar formulario
        <span className="icon">
          <svg viewBox="0 0 24 24" width="1.2em" height="1.2em">
            <path fill="currentColor" d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15l-4-4 4-4v3h4v2h-4v3z"></path>
          </svg>
        </span>
      </button>
      {showModal && <FormularioModal showModal={showModal} closeModal={closeModal} />}
    </>
  );
};

export default ModalButton;
