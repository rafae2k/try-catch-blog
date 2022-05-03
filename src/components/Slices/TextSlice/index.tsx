import { PrismicRichText } from "@prismicio/react";
import * as prismicT from "@prismicio/types";
import { SliceComponentProps } from "@prismicio/react";

import { Container } from "./styles";

export type TextSliceProps = prismicT.Slice<
  "paragraph",
  {
    heading: prismicT.KeyTextField;
    title: prismicT.RichTextField;
    content: prismicT.RichTextField;
  }
>;

function TextSlice({ slice }: SliceComponentProps<TextSliceProps>) {
  return (
    <Container>
      <PrismicRichText field={slice.primary.title} />
      <PrismicRichText field={slice.primary.content} />
    </Container>
  );
}

export default TextSlice;
