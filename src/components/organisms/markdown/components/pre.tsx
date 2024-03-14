'use client';

import { useState } from 'react';

import { Icon } from '@/components/atoms/icon';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import getNodeInnerText from '@/base/utils/get-node-inner-text';
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
        <TooltipProvider delayDuration={400}>
          <Tooltip open={copied ? true : undefined}>
            <TooltipTrigger asChild>
              <button
                className="rounded-[10px] border border-border bg-zinc-900/70 !p-2 backdrop-blur-sm hover:opacity-80"
                onClick={copyCode}
              >
                {copied ? <Icon variant="Check" className="h-4 w-4" /> : <Icon variant="Copy" className="h-4 w-4" />}
              </button>
            </TooltipTrigger>
            <TooltipContent side="left" align="center">
              {copied ? 'Copied!' : 'Copy Snippet'}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <pre {...pre} className={cn('!rounded-xl border border-border !p-0', pre.className)}></pre>
    </div>
  );
}
