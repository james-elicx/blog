'use client';

import Giscus from '@giscus/react';

type CommentsWidgetProps = {
  category: string;
  categoryId: string;
};

export const CommentsWidget = ({ category, categoryId }: CommentsWidgetProps) => (
  <Giscus
    id="comments"
    repo="james-elicx/blog"
    repoId="R_kgDOKA2v8g"
    category={category}
    categoryId={categoryId}
    mapping="pathname"
    term="Welcome to @giscus/react component!"
    reactionsEnabled="0"
    emitMetadata="0"
    inputPosition="top"
    theme="preferred_color_scheme"
    lang="en"
    loading="lazy"
  />
);
