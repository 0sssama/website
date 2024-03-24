'use client';

import { useState } from 'react';

import getNodeInnerText from '@/base/utils/get-node-inner-text';
import { Icon } from '@/components/elements/icon';
import { Tooltip } from '@/components/elements/tooltip';
import { cn } from '@/base/utils/cn';

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Pre(pre: any) {
  const [copied, setCopied] = useState(false);

  const codeChunk = getNodeInnerText(pre.children || '');

  const copyCode = () => {
    navigator.clipboard.writeText(codeChunk);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div className="relative w-full">
      <div className="absolute right-3 top-3">
        <Tooltip isOpen={copied ? true : undefined} side="left" content={copied ? 'Copied!' : 'Copy Snippet'}>
          <button
            className="rounded-[10px] border border-border bg-zinc-900/70 !p-2 backdrop-blur-sm hover:opacity-80"
            onClick={copyCode}
          >
            {copied ? <Icon variant="Check" className="h-4 w-4" /> : <Icon variant="Copy" className="h-4 w-4" />}
          </button>
        </Tooltip>
      </div>
      <pre {...pre} className={cn('!rounded-xl border border-border !p-0', pre.className)}></pre>
    </div>
  );
}
