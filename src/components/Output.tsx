import SyntaxHighlighter from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface Props {
  string: string;
}

export const Output = ({ string }: Props) => {
  return (
    <div className="w-[24rem] rounded-lg overflow-hidden">
      <SyntaxHighlighter language="json" style={nord}>
        {string}
      </SyntaxHighlighter>
    </div>
  );
};
