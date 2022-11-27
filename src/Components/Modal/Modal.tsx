import React, { FC } from "react";
import ReactModal, { Props } from "react-modal";
import styles from "./Modal.module.css";
import { CrossIcon } from "../../Assets/icons/CrossIcon";

const CUSTOM_STYLES = {
  basic: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(38, 34, 47, 0.5)",
  },
};

const Modal: FC<Props> = (props) => {
  return (
    <ReactModal style={{...props.style, ...CUSTOM_STYLES }} {...props}>
      {props.children}
      <div onClick={props.onRequestClose} className={styles.crossIcon}>
        <CrossIcon />
      </div>
    </ReactModal>
  );
};

export default Modal;