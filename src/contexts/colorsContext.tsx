"use client";

import type { ReactNode } from "react";
import React, { createContext, useContext, useState } from "react";
import { ColorsTypes } from "@/types/types";
import { generateRandomColors } from "@/utils/randomGeneration";
import { colors as colorlist } from "@/utils/colors";

const initialColors: ColorsTypes = {
  primaryColor: "#b6d7a8",
  secondaryColor: "#cc0000",
};

interface ColorsContextType {
  colors: ColorsTypes;
  onChangeColors: () => void;
}

type ColorsProviderProps = {
  children: ReactNode;
};

const ColorsContext = createContext<ColorsContextType | undefined>(undefined);

export const useColors = () => {
  const context = useContext(ColorsContext);
  if (!context) {
    throw new Error("useColors must be used within a ColorsProvider");
  }
  return context;
};

export const ColorsProvider: React.FC<ColorsProviderProps> = ({ children }) => {
  const [colors, setColors] = useState(initialColors);

  const onChangeColors = () => {
    setColors(generateRandomColors(colorlist));
  };

  return (
    <ColorsContext.Provider value={{ colors, onChangeColors }}>
      {children}
    </ColorsContext.Provider>
  );
};
