import React, { createContext, useState } from 'react';

export const TestContext = createContext();

export const TestProvider = ({ children }) => {
  const [testOpen, setTestOpen] = useState(false);

  const toggleTest = () => {
    setTestOpen(!testOpen);
  };

  return (
    <TestContext.Provider value={{ testOpen, toggleTest }}>
      {children}
    </TestContext.Provider>
  );
};
