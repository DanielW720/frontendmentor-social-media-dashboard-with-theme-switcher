// import { createContext, useContext, useReducer } from "react";

// // Dark theme
// const darkTheme = {
//   isDark: true,
//   bg: "#1e202a",
//   bgCard: "hsl(232, 19%, 15%)",
//   bgHeader: "hsl(228, 28%, 20%)",
//   hText: "hsl(0, 0%, 100%)",
//   pText: "hsl(228, 34%, 66%)",
// };

// // Light theme
// const lightTheme = {
//   isDark: false,
//   pink: "#ff49db",
//   bg: "hsl(0, 0%, 100%)",
//   bgCard: "hsl(225, 100%, 98%)",
//   bgHeader: "hsl(227, 47%, 96%)",
//   hText: "hsl(0, 0%, 100%)",
//   pT: "hsl(228, 34%, 66%)",
// };

// // Create the theme context and its dispatch context
// const ThemeContext = createContext(darkTheme);
// const ThemeDispatchContext = createContext(null);

// // Custom hook for using ThemeContext
// export function useTheme() {
//   return useContext(ThemeContext);
// }

// // Custom hook for using ThemeDispatchContext
// export function useThemeDispatch() {
//   return useContext(ThemeDispatchContext);
// }

// // Component to wrap other child components in
// export function ThemeProvider({ children }) {
//   const [theme, dispatch] = useReducer(themeReducer, darkTheme);

//   return (
//     <ThemeContext.Provider value={theme}>
//       <ThemeDispatchContext.Provider value={dispatch}>
//         {children}
//       </ThemeDispatchContext.Provider>
//     </ThemeContext.Provider>
//   );
// }

// // Reducer function (dispatch function for the theme context)
// export function themeReducer(themeState, action) {
//   switch (action.type) {
//     case "switch-theme": {
//       return themeState.isDark ? lightTheme : darkTheme;
//     }
//     default: {
//       throw Error("Unknown action: " + action.type);
//     }
//   }
// }
