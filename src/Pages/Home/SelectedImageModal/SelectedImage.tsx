import React from "react";
import styles from "./SelectedImage.module.css";

import { useDispatch, useSelector } from "react-redux";
import ImageSelectors from "../../../Redux/Selectors/imageSelectors";

import { setSelectedImageModalVisible } from "../../../Redux/Reducers/imageReducer";
import Modal from "../../../Components/Modal";

const SelectedImageModal = () => {
  const selectedImage = useSelector(ImageSelectors.getSelectedImage);
  const isVisible = useSelector(ImageSelectors.getSelectedImageModalVisible);

  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(setSelectedImageModalVisible(false));
  };
  return (
    <>
      {selectedImage && (
        <Modal isOpen={isVisible} onRequestClose={onClose}>
          <img src={selectedImage} alt={""} className={styles.image} />
        </Modal>
      )}
    </>
  );
};

export default SelectedImageModal;
