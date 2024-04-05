'use client';

import { useState } from 'react';

import { Code } from './code';

type Option = {
  label: string;
  endpoint: string;
  method: string;
  useDeploymentId?: boolean;
  headers?: Record<string, string>;
};

type Props = {
  options: Option[];
};

export const ApiCallResponse = ({ options }: Props) => {
  const [data, setData] = useState<string>('No response yet.');
  const [loading, setLoading] = useState(false);

  const fetchData = async ({ endpoint, method, headers, useDeploymentId }: Option) => {
    setLoading(true);

    const resp = await fetch(endpoint, {
      method,
      headers: new Headers({
        ...headers,
        ...(useDeploymentId && {
          'x-deployment-id': process.env.NEXT_DEPLOYMENT_ID,
        }),
      }),
    });
    const respJson = await resp.json();

    setLoading(false);
    setData(JSON.stringify(respJson, null, '\t'));
  };

  return (
    <div className="flex flex-col items-start gap-2">
      <div className="flex flex-row flex-wrap gap-x-8 gap-y-2">
        {options.map((option) => (
          <button
            type="button"
            key={option.label}
            className="font-medium transition-colors hover:text-accent dark:hover:text-accent-dark"
            onClick={() => fetchData(option)}
          >
            {option.label}
          </button>
        ))}
      </div>

      <Code>{loading ? 'Fetching data...' : data}</Code>
    </div>
  );
};
