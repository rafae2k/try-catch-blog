import { PrismicRichText } from "@prismicio/react";
import * as prismicT from "@prismicio/types";
import { SliceComponentProps } from "@prismicio/react";

import { Container } from "./styles";

export type WarningSliceProps = prismicT.Slice<
  "warning",
  {
    heading: prismicT.KeyTextField;
    title: prismicT.RichTextField;
    warning: prismicT.RichTextField;
  }
>;

function WarningSlice({ slice }: SliceComponentProps<WarningSliceProps>) {
  console.log(slice);
  return (
    <Container>
      {/* {/* <PrismicRichText field={slice.primary.title} /> */}
      <PrismicRichText field={slice.primary.warning} />
    </Container>
  );
}

export default WarningSlice;
