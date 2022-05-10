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

export interface Content {
  src: string;
  id: string;
  description: string;
  name: string;
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
        {content.map(({ id, src, description }, index) => (
          <article
            key={id}
            className={styles.galleryContainer}
            onClick={() => setActiveImageIndex(index)}
          >
            <img className={styles.image} src={src} alt={description} />
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
            {content.map(({ description, id, src }) => (
              <SwiperSlide key={id} className={styles.slide}>
                <img src={src} alt={description} className={styles.image} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Gallery;
