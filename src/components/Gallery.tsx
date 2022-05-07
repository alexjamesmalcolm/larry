import { Fragment, useState } from "react";
import { Modal } from "react-bootstrap";
import styles from "./Gallery.module.css";

export interface Content {
  src: string;
  id: string;
  description: string;
  name: string;
}

const Gallery = ({ content }: { content: Content[] }) => {
  const [activeImageId, setActiveImageId] = useState<Content["id"]>();
  return (
    <div className={styles.container}>
      {content.map(({ id, src, description, name }) => (
        <Fragment key={id}>
          <article
            className={styles.galleryContainer}
            onClick={() => setActiveImageId(id)}
          >
            <img className={styles.image} src={src} alt={description} />
            <p className={styles.name}>{name}</p>
          </article>
          <Modal
            show={activeImageId === id}
            size="xl"
            onHide={() => setActiveImageId(undefined)}
            className={styles.modal}
          >
            <Modal.Header>Hi</Modal.Header>
            <Modal.Body>
              <img src={src} alt={description} className={styles.image} />
            </Modal.Body>
          </Modal>
        </Fragment>
      ))}
    </div>
  );
};

export default Gallery;
