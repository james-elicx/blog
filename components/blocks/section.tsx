type Props = { title: string; children: React.ReactNode };

export const Section = ({ title, children }: Props) => (
  <section className="flex flex-col gap-2">
    <h3>{title}</h3>
    {children}
  </section>
);
