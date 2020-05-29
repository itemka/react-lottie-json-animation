import React from 'react';

export const Center = ({ children }) => (
  <section style={{
    backgroundColor: 'white',
    width: '100vw',
    paddingTop: '100px',
    paddingBottom: '100px',
    display: 'flex',
    flexDirection: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  }}
  >
    {children}
  </section>
);
