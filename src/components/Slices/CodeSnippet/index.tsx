import { CopyBlock, dracula, atomOneLight } from "react-code-blocks";
import { Container } from "./styles";
import * as prismicT from "@prismicio/types";
import { SliceComponentProps } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { useTheme } from "@styles/theme";

export type CodeSnippetProps = prismicT.Slice<
  "code_snippet",
  {
    codeSnippet: prismicT.RichTextField;
    language: string;
  }
>;

function CodeSnippet({ slice }: SliceComponentProps<CodeSnippetProps>) {
  const { theme } = useTheme();

  const code = prismicH.asText(slice.primary.codeSnippet);
  return (
    <Container>
      <CopyBlock
        text={code}
        language={slice.primary.language}
        theme={theme.title === "dark" ? dracula : atomOneLight}
        showLineNumbers
        wrapLines
      />
    </Container>
  );
}

export default CodeSnippet;
