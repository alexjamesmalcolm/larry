import { lazy, Suspense, useState } from "react";
import styles from "./Gallery.module.css";

const LightboxModal = lazy(() => import("./LightboxModal"));

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
      {activeImageIndex !== undefined && (
        <Suspense>
          <LightboxModal
            content={content}
            activeImageIndex={activeImageIndex}
            setActiveImageIndex={setActiveImageIndex}
          />
        </Suspense>
      )}
    </>
  );
};

export default Gallery;
