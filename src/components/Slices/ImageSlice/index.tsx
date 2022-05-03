import Image from "next/image";
import { Container } from "./styles";
import * as prismicT from "@prismicio/types";
import { SliceComponentProps } from "@prismicio/react";

export type ImageSliceProps = prismicT.Slice<
  "image",
  {
    image: prismicT.FilledImageFieldImage;
  }
>;

function ImageSlice({ slice }: SliceComponentProps<ImageSliceProps>) {
  return (
    <Container>
      <Image
        src={slice.primary.image.url}
        alt={slice.primary.image.alt as string}
        width={slice.primary.image.dimensions.width}
        height={slice.primary.image.dimensions.height}
      />
      <figcaption>{slice.primary.image.alt}</figcaption>
    </Container>
  );
}

export default ImageSlice;
