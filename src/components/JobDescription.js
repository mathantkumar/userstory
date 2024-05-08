import React, { useState } from "react";
import { Button, Modal } from "antd";
const JobDescription = ({ text }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleOk = () => {
    setShowModal(false);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };
  //Job description - limited up to 300 words and upon clicking show more, a modal with detailed description will popup

  return (
    <div>
      <Modal
        title="About Us"
        open={showModal}
        onOk={handleOk}
        onCancel={handleHideModal}
      >
        <p>{text}</p>
      </Modal>
      {text.length > 400 ? (
        <>
          <p>{text.slice(0, 300)}...</p>
          <Button onClick={handleShowModal}>Show More</Button>
        </>
      ) : (
        <p>{text}</p>
      )}
    </div>
  );
};

export default JobDescription;
