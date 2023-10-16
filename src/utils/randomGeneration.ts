import { ColorsTypes } from "@/types/types";

function getRandomNumber(min: number, max: number): number {
  return Math.round(Math.random() * (max - min) + min);
}

function generateRandomColors(colors: string[]): ColorsTypes {
  return {
    primaryColor: colors[getRandomNumber(0, colors.length - 1)],
    secondaryColor: colors[getRandomNumber(0, colors.length - 1)]
  };
}

export { getRandomNumber, generateRandomColors };