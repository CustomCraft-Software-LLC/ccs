import React, { ReactNode } from 'react';

type SectionProps = {
  title: string;
  children: ReactNode;
};

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <section className="section">
    <h2 className="section-title">{title}</h2>
    {children}
  </section>
);

export default Section;