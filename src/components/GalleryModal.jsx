// GalleryModal.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ModalBackground = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled(motion.div)`
  background: #111;
  padding: 30px;
  border-radius: 12px;
  max-height: 80vh;
  max-width: 90vw;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const GalleryImage = styled.img`
  max-width: 100%;
  border-radius: 10px;
  object-fit: cover;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 30px;
  background: transparent;
  color: #fff;
  border: none;
  font-size: 2rem;
  cursor: pointer;
`;

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { scale: 0.8, opacity: 0, y: 100 },
  visible: { scale: 1, opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
};

const GalleryModal = ({ images, onClose }) => {
  return (
    <ModalBackground
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <ModalContent
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {images.map((src, idx) => (
          <GalleryImage key={idx} src={src} alt={`gallery-${idx}`} />
        ))}
      </ModalContent>
    </ModalBackground>
  );
};

export default GalleryModal;
