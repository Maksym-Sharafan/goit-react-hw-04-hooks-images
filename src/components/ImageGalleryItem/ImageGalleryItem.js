import { useState } from 'react';

import Modal from '../Modal';

export default function ImageGalleryItem({ littleImage, largeImage, id, tags }) {
  const [largeImg, setLargeImg] = useState('');
  const [showModal, setShowModal] = useState(false);


  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  const onImageClick = img => {
    setLargeImg(img);
    toggleModal();
  };

  return (
    <>
      <li
        className="ImageGalleryItem"
        key={id}
        id={id}
        onClick={() => onImageClick(largeImage)}
      >
        <img
          src={littleImage}
          alt={tags}
          className="ImageGalleryItem-image"
        />
      </li>

      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={largeImg} alt="" />
        </Modal>
      )}
    </>
  );

}
