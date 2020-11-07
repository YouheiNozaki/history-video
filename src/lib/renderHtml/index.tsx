/* eslint-disable */
import { createElement, Fragment } from 'react';
import unified from 'unified';
import parse from 'rehype-parse';
import rehypeReact from 'rehype-react';

import { H1 } from './parts';

// @ts-ignore
export function renderAst(content: string): React.ReactNode {
  const htmlAst = unified()
    .use(parse, { fragment: true })
    .use(parse)
    .use(rehypeReact, {
      createElement: createElement,
      Fragment: Fragment,
      components: {
        h1: H1,
      },
    })
    .processSync(content).result;
  return htmlAst;
}
