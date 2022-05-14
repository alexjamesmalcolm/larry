import { Image } from "../models";
import { ReactSortable as Sortable } from "react-sortablejs";
import { useCallback } from "react";

const SortImages = <
  I extends Pick<Image, "id" | "blob" | "description" | "order">
>({
  images,
  onOrderChange,
}: {
  images: I[];
  onOrderChange: (images: I[]) => void;
}) => {
  const handleOrderChange = useCallback(
    (images: I[]) =>
      onOrderChange(images.map((image, index) => ({ ...image, order: index }))),
    [onOrderChange]
  );
  return (
    // @ts-ignore
    <Sortable list={images} setList={handleOrderChange}>
      {images
        .sort((a, b) => a.order - b.order)
        .map(({ id, blob, description }) => (
          <img key={id} id={id} alt={description} src={blob} />
        ))}
    </Sortable>
  );
};

export default SortImages;
