import { ImgHTMLAttributes, useMemo } from "react";
import { Source } from "./Gallery";

type CondensedSources = Record<Source["type"], Source[]>;

const Picture = ({
  sources,
  alt,
  sizes = "100vw",
  ...otherProps
}: { sources: Source[] } & ImgHTMLAttributes<HTMLImageElement>) => {
  const condensedSources = useMemo<CondensedSources>(
    () =>
      sources.reduce(
        (accumulator: CondensedSources, source): CondensedSources => {
          if (source.type in accumulator) {
            accumulator[source.type].push(source);
          } else {
            accumulator[source.type] = [source];
          }
          return accumulator;
        },
        {}
      ),
    [sources]
  );
  return (
    <picture>
      {Object.entries(condensedSources).map(([sourceType, sources]) => {
        const srcSet = sources
          .map((source) => {
            if (source.width) {
              return `${source.src} ${source.width}w`;
            } else {
              return source.src;
            }
          })
          .join(", ");
        return (
          <source
            key={sourceType}
            type={sourceType}
            srcSet={srcSet}
            sizes={sizes}
          />
        );
      })}
      <img alt={alt} {...otherProps} />
    </picture>
  );
};

export default Picture;
