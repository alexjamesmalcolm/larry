import styles from "./Gallery.module.css";

export interface Content {
  src: string;
  id: string;
  description: string;
  name: string;
}

const Gallery = ({ content }: { content: Content[] }) => (
  <div className={styles.container}>
    {content.map(({ id, src, description, name }) => (
      <article key={id} className={styles.imageContainer}>
        <img className={styles.image} src={src} alt={description} />
        <p className={styles.name}>{name}</p>
      </article>
    ))}
  </div>
);

export default Gallery;
