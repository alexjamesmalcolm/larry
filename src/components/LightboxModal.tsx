import { useCallback } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./LightboxModal.module.css";
import ISwiper, { Navigation, Pagination, Keyboard, Mousewheel } from "swiper";
import { SwiperModule } from "swiper/types";
import { useMediaQuery } from "react-responsive";
import { Content } from "./Gallery";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import Picture from "./Picture";

const swiperModules: SwiperModule[] = [
  Navigation,
  Pagination,
  Keyboard,
  Mousewheel,
];

const LightboxModal = ({
  activeImageIndex,
  setActiveImageIndex,
  content,
}: {
  setActiveImageIndex: React.Dispatch<React.SetStateAction<number | undefined>>;
  activeImageIndex: number | undefined;
  content: Content[];
}) => {
  const close = useCallback(
    () => setActiveImageIndex(undefined),
    [setActiveImageIndex]
  );
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
              <Picture
                className={styles.image}
                src={legacySrc}
                alt={description}
                sources={sources}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Modal.Body>
    </Modal>
  );
};

export default LightboxModal;
