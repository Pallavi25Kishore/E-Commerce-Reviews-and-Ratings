import React, {useState} from 'react';
import Modal from './Modal.jsx';

const Thumbnail = ({photo}) => {

  const [modalOpen, setModalOpen] = useState(false);

  const handleThumbnailClick = (event) => {
    event.preventDefault();
    setModalOpen(true);
  };

  const handleCrossClick = (event) => {
    event.preventDefault();
    setModalOpen(false);
  };

  return (
    <>
    <img src={photo.url} style={{height: '50px', width: '50px', borderRadius: '10%'}} onClick={handleThumbnailClick}></img>
    {modalOpen? <Modal photo={photo} handleCrossClick={handleCrossClick}/> : null}
    </>
  );
};

export default Thumbnail;