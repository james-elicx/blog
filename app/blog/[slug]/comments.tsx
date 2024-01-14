'use client';

import Giscus from '@giscus/react';

export const Comments = () => (
  <Giscus
    id="comments"
    repo="james-elicx/blog"
    repoId="R_kgDOKA2v8g"
    category="Blog Posts"
    categoryId="DIC_kwDOKA2v8s4CcatM"
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
