import { PrismicRichText } from "@prismicio/react";

import { Container } from "./styles";

interface TextSliceProps {
  // slice: SliceZone<string, AnyRegularField>;
}

function TextSlice({ slice }: TextSliceProps) {
  return (
    <Container>
      <PrismicRichText field={slice.primary.title} />
      <PrismicRichText field={slice.primary.content} />
    </Container>
  );
}

export default TextSlice;
