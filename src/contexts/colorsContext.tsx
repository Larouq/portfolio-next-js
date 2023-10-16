import type { ReactNode } from 'react';
import React, { createContext, useContext, useState } from 'react';
import { ColorsTypes } from '@/types/types';

const initialColors: ColorsTypes = {
  primaryColor: '#b6d7a8',
  secondaryColor: '#cc0000',
};

interface ColorsContextType {
  colors: ColorsTypes;
  onChangeColors: (value: ColorsTypes) => void;
}

interface ColorsProviderProps {
  children: ReactNode;
}

const ColorsContext = createContext<ColorsContextType | undefined>(undefined);

export const useColors = () => {
  const context = useContext(ColorsContext);
  if (!context) {
    throw new Error('useColors must be used within a ColorsProvider');
  }
  return context;
};


export const ClickCountProvider: React.FC<ColorsProviderProps> = ({ children }) => {
  const [colors, setColors] = useState(initialColors);

  const onChangeColors = (value: ColorsTypes) => {
    setColors(value);
  };

  return (
    <ColorsContext.Provider value={{ colors, onChangeColors }}>
      {children}
    </ColorsContext.Provider>
  );
};
