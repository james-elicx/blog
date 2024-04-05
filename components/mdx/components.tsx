import type { MDXRemoteProps } from 'next-mdx-remote/rsc';

import { ApiCallResponse } from './api-call-response';
import { Code } from './code';

export const mdxComponents: MDXRemoteProps['components'] = {
  Image: ({ skipAspectRatioProp, ...props }) => (
    <div
      className="my-2 flex max-h-[70vh] flex-col items-center justify-center gap-1"
      style={{
        aspectRatio:
          !skipAspectRatioProp && props.width && props.height
            ? `${props.width}/${props.height}`
            : undefined,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt=""
        {...props}
        style={{ maxHeight: props.height && `${props.height}px` }}
        className="h-full w-full max-w-fit rounded-md border border-secondary object-scale-down dark:border-secondary-dark"
      />
      {props.alt && (
        <p className="text-center text-xs text-secondary/50 dark:text-secondary-dark/50">
          {props.alt}
        </p>
      )}
    </div>
  ),
  InlineGroup: ({ children, ...props }) => (
    <div className="flex w-full flex-row flex-wrap items-center gap-4" {...props}>
      {children}
    </div>
  ),
  code: (props) => <Code isInline {...props} />,
  h2: ({ children, ...props }) => (
    <h2 className="mt-2" {...props}>
      {children}
    </h2>
  ),
  ApiCallResponse,
};
