import classNames from "classnames";
import { useEffect } from "react";
import { PropsWithChildren } from "react";
import styles from "./Modal.module.css";

const Modal = ({
  children,
  show,
  onHide,
  className,
}: PropsWithChildren<{
  show: boolean;
  onHide: () => void;
  className?: string;
}>) => {
  useEffect(() => {
    const body = document.querySelector("#root");
    const rootModalOpenClass = "modal-open";
    if (body) {
      if (show) {
        body.classList.add(rootModalOpenClass);
      } else {
        body.classList.remove(rootModalOpenClass);
      }
      return () => {
        body.classList.remove(rootModalOpenClass);
      };
    }
  }, [show]);
  if (show) {
    return (
      <div className={classNames(styles.modal, className)}>
        <button onClick={onHide} className={styles.closeButton}>
          X
        </button>
        {children}
      </div>
    );
  }
  return null;
};

export default Modal;
