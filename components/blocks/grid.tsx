export const Root = ({ children }: React.PropsWithChildren) => (
  <div className="grid grid-cols-3 gap-3 max-sm:grid-cols-2 max-xs:grid-cols-1">{children}</div>
);

export const Item = ({ children }: React.PropsWithChildren) => (
  <div className="flex flex-col">{children}</div>
);
