import React from "react";

const UserContext = React.createContext();

export default UserContext;

// <UserContext>
//   <App />
// </UserContext>

// by doing this, now each and every component under app can acces the data from this UserContext


// 2nd method: Writing all in 1 file and exporting and importing everything from here
// export const ThemeContext = createContext({
//   theme: "light",
//   darkTheme: () => {},
//   lightTheme: () => {},
// });

// export const ThemeProvider = ThemeContext.Provider

// export default function useTheme() {
//   return useContext(ThemeContext);
// }