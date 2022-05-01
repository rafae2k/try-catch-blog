import { CopyBlock, dracula } from "react-code-blocks";
import { Container } from "./styles";

interface CodeSnippetProps {
  slice: {
    primary: {
      codeSnippet: [
        {
          text: string;
        }
      ];
    };
  };
}

function CodeSnippet({ slice }: CodeSnippetProps) {
  return (
    <Container>
      <CopyBlock
        text={slice.primary.codeSnippet[0].text}
        language={"jsx"}
        theme={dracula}
        showLineNumbers
        wrapLines
      />
    </Container>
  );
}

export default CodeSnippet;
