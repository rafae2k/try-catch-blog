import Image from "next/image";
import { Container } from "./styles";

interface ImageSliceProps {
  // slice: ReactNode;
}

function ImageSlice({ slice }: ImageSliceProps) {
  return (
    <Container>
      <Image
        src={slice.primary.image.url}
        alt={slice.primary.image.alt}
        width={slice.primary.image.dimensions.width}
        height={slice.primary.image.dimensions.height}
      />
      <figcaption>{slice.primary.image.alt}</figcaption>
    </Container>
  );
}

export default ImageSlice;
