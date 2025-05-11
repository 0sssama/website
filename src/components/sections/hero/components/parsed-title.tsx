import { Fragment, type ReactNode } from 'react';

import { getNodeInnerText } from '@/utils/get-node-inner-text';

import LineShadowText from './line-shadow-text';
import AnimatedGradientText from './animated-gradient-text';

/**
 * Function to extract all of the parts between '*', '**', or '{}' characters
 * in a string.
 *
 * Example:
 *
 * input: Hello *World*! **This** is a test. {}!
 * output: ['Hello ', '*World*', '! ', '**This**', ' is a test. ', '{}', '!']
 *
 * @param title
 *
 * @returns string[]
 */
const getParts = (title: string): string[] => {
  // Regular expression to match text between asterisks (*), double asterisks (**), or curly braces ({})
  const regex = /(\*\*[^*]+\*\*|\*[^*]+\*|\{\}|[^*{}]+)/g;

  // Use match() to find all occurrences and return the result
  // If no matches are found, return an array with the original string
  return title.match(regex) || [title];
};

export default function ParsedTitle({ children }: { children: ReactNode }) {
  const title = typeof children === 'string' ? children : getNodeInnerText(children);
  const isHighlighted = title.includes('*') || title.includes('{}');

  if (!isHighlighted) {
    return <>{children}</>;
  }

  const parts = getParts(title);

  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <LineShadowText key={i}>{part.slice(2, -2)}</LineShadowText>;
        }

        if (part.startsWith('*') && part.endsWith('*')) {
          return <AnimatedGradientText key={i}>{part.slice(1, -1)}</AnimatedGradientText>;
        }

        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
