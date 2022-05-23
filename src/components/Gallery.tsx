import { useCallback, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Gallery.module.css";
import ISwiper, { Navigation, Pagination, Keyboard, Mousewheel } from "swiper";
import { SwiperModule } from "swiper/types";
import { useMediaQuery } from "react-responsive";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiperModules: SwiperModule[] = [
  Navigation,
  Pagination,
  Keyboard,
  Mousewheel,
];

interface Source {
  id: string | number;
  src: string;
  media?: string;
}

export interface Content {
  legacySrc: string;
  sources?: Source[];
  id: string;
  description: string;
}

const Gallery = ({ content }: { content: Content[] }) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | undefined>(
    undefined
  );
  const close = useCallback(() => setActiveImageIndex(undefined), []);
  const isSingleColumn = useMediaQuery({ maxWidth: "700px" });
  const deviceHasFinePointer = useMediaQuery({ query: "(pointer: fine)" });
  const onSwiperCreation = useCallback(
    (swiper: ISwiper) => {
      if (activeImageIndex) {
        swiper.slideTo(activeImageIndex, 0);
      }
    },
    [activeImageIndex]
  );
  return (
    <>
      <div className={styles.container}>
        {content.map(({ id, legacySrc, sources = [], description }, index) => (
          <article
            key={id}
            className={styles.galleryContainer}
            onClick={() => setActiveImageIndex(index)}
          >
            <picture>
              {sources.map(({ src, media, id }) => (
                <source key={id} srcSet={src} media={media} />
              ))}
              <img
                className={styles.image}
                src={legacySrc}
                alt={description}
                width="400px"
                height="300px"
                loading={index > 8 ? "lazy" : "eager"}
              />
            </picture>
          </article>
        ))}
      </div>
      <Modal
        show={activeImageIndex !== undefined}
        size="xl"
        onHide={close}
        className={styles.modal}
        fullscreen
      >
        <Modal.Header>
          <Button onClick={close}>Close</Button>
        </Modal.Header>
        <Modal.Body className={styles.body}>
          <Swiper
            onSwiper={onSwiperCreation}
            navigation={deviceHasFinePointer}
            rewind
            pagination
            keyboard
            mousewheel
            modules={swiperModules}
            edgeSwipeDetection="prevent"
            direction={isSingleColumn ? "vertical" : "horizontal"}
          >
            {content.map(({ description, id, legacySrc, sources = [] }) => (
              <SwiperSlide key={id} className={styles.slide}>
                <picture>
                  {sources.map(({ src, media, id }) => (
                    <source key={id} srcSet={src} media={media} />
                  ))}
                  <img
                    className={styles.image}
                    src={legacySrc}
                    alt={description}
                  />
                </picture>
              </SwiperSlide>
            ))}
          </Swiper>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Gallery;
