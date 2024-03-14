import { isValidElement, type ReactNode } from 'react';

/**
 * This function extracts the inner text from a React node.
 *
 * @param {ReactNode} node The node to extract the inner text from.
 *
 * @returns {string} The inner text.
 */
export default function getNodeInnerText(node: ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') return node.toString();

  if (Array.isArray(node)) return node.map(getNodeInnerText).join('');

  if (node && typeof node === 'object' && isValidElement(node)) return getNodeInnerText(node.props.children);

  return '';
}
