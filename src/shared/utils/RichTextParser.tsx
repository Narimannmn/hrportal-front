import { CSSProperties, FC } from 'react';
import serialize, { RichTextNode } from './serializeRichTextToHtml';

type RichTextParserProps = {
  className?: string;
  content: RichTextNode[];
  customClassNames?: Record<string, string>;
  color: string;
  display?: CSSProperties['display'];
  flexDirection?: CSSProperties['flexDirection'];
  gap?: number;
  width?: string;
};

const RichTextParser: FC<RichTextParserProps> = ({
  className,
  content,
  color,
  display,
  flexDirection,
  gap,
  width,
}) => {
  return (
    <div className={className}>
      <div
        style={{
          display,
          flexDirection,
          gap,
          width,
        }}
        dangerouslySetInnerHTML={{
          __html: serialize(content, color),
        }}
      />
    </div>
  );
};

export default RichTextParser;
