import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Code({ className, ...props }: any) {
  const hasLang = /lang-(\w+)/.exec(className || '');

  return hasLang ? (
    <SyntaxHighlighter
      style={tomorrow}
      language={hasLang[1]}
      PreTag="div"
      className="mockup-code scrollbar-thin scrollbar-track-base-content/5 scrollbar-thumb-base-content/40 scrollbar-track-rounded-md scrollbar-thumb-rounded !m-0 w-full !bg-gradient-to-b !from-zinc-900 !to-zinc-950 font-mono text-xs"
      showLineNumbers={true}
      useInlineStyles={true}
    >
      {String(props.children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code className={className} {...props} />
  );
}
