import { Image } from "../models";
import { ReactSortable as Sortable } from "react-sortablejs";

const SortImages = <
  I extends Pick<Image, "id" | "blob" | "description" | "order">
>({
  images,
  onOrderChange,
}: {
  images: I[];
  onOrderChange: (images: I[]) => void;
}) => {
  return (
    // @ts-ignore
    <Sortable list={images} setList={onOrderChange}>
      {images
        .sort((a, b) => a.order - b.order)
        .map(({ id, blob, description }) => (
          <img key={id} id={id} alt={description} src={blob} />
        ))}
    </Sortable>
  );
};

export default SortImages;
