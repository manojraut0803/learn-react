import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //   const [text, setText] = useState("Hello from Context API");

  return (
    // 2. Wrap Components with a Provider
    // <UserContext.Provider value={{ user, setUser, text, setText }}>
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
