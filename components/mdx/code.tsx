import { codeToHtml } from 'shiki';

import { CodeBasic } from './code-basic';

type Props = React.HTMLAttributes<HTMLElement> & {
  shouldNotBeInline?: boolean;
};

export const Code = async ({ children, className, shouldNotBeInline }: Props) => {
  const language = className?.match(/language-(\w+)/)?.[1];

  if (!language || typeof children !== 'string') {
    return (
      <CodeBasic isInline={!shouldNotBeInline && !language}>
        {children}
      </CodeBasic>
    );
  }

  const transformed = await codeToHtml(children, {
    lang: language,
    themes: {
      light: 'github-light',
      dark: 'github-dark',
    },
  });

  return (
    // eslint-disable-next-line react/no-danger
    <CodeBasic dangerouslySetInnerHTML={{ __html: transformed }} />
  );
};
