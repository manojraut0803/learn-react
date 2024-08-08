// import React from "react";
// const UserContext = React.createContext();

import {createContext} from "react";

const UserContext = createContext();

export default UserContext


// steps 
// 1. Create a Context Object
//          createContext
// 2. Wrap Components with a Provider
            // The Provider component accepts a "value" prop that holds the shared data,
            // ("MyContext.Provider")
// 3. Consume the Context
            // we use the "useContext" hook from React.

// Use Cases of Context API
// Theming
// User Authentication
// Multilingual Support
// Accessing data from external sources


