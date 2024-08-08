import { createContext, useCallback, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lighTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

// custom Hook

export default function useTheme() {
  return useContext(ThemeContext);
}
