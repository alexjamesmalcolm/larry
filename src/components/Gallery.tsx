import { Fragment, useCallback, useMemo, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styles from "./Gallery.module.css";

export interface Content {
  src: string;
  id: string;
  description: string;
  name: string;
}

const Gallery = ({ content }: { content: Content[] }) => {
  const [activeImageId, setActiveImageId] = useState<Content["id"]>();
  const close = useCallback(() => setActiveImageId(undefined), []);
  const lastContentIndex = useMemo(() => content.length - 1, [content.length]);
  const previous = useCallback(() => {
    const currentContentIndex = content.findIndex(
      ({ id }) => id === activeImageId
    );
    if (currentContentIndex === undefined) {
      close();
    } else if (currentContentIndex === 0) {
      setActiveImageId(content[lastContentIndex].id);
    } else {
      setActiveImageId(content[currentContentIndex - 1].id);
    }
  }, [activeImageId, close, content, lastContentIndex]);
  const next = useCallback(() => {
    const currentContentIndex = content.findIndex(
      ({ id }) => id === activeImageId
    );
    if (currentContentIndex === undefined) {
      close();
    } else if (currentContentIndex === lastContentIndex) {
      setActiveImageId(content[0].id);
    } else {
      setActiveImageId(content[currentContentIndex + 1].id);
    }
  }, [activeImageId, close, content, lastContentIndex]);
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
            onHide={close}
            className={styles.modal}
            fullscreen
          >
            <Modal.Body className={styles.body}>
              <img src={src} alt={description} className={styles.image} />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={close}>Close</Button>
              <Button onClick={previous}>Previous</Button>
              <Button onClick={next}>Next</Button>
            </Modal.Footer>
          </Modal>
        </Fragment>
      ))}
    </div>
  );
};

export default Gallery;
