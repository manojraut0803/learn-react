# Learning React 

## Can I use React without a framework?
```
You can use React without a framework, however we’ve found that most apps and sites eventually build solutions to common problems such as code-splitting, routing, data fetching, and generating HTML. These problems are common to all UI libraries, not just React.
```
## Starting React
```
React (dependencies)    -> React-DOM        (web)
                        -> React-native     (mobile)
        
                    -> Three.js

-> react scripts
    dev
    start
    build
    test
    eject
    lint
cra-template

Features
========
- SPA
- Virtual DOM

- routes



> npx       [node package executer] (installer for library installation)
> npm       [node package manager]

> npx create-react-app
    - create-react-app -> utility(software)

> npx create-react-app myApp
          or
> npm create vite@latest
> npm install
```

### src/main.jsx
```
import React from "react";
    Core foundational library | takes references

import ReactDOM from "react-dom/client";
    implementation on web

Virtual DOM -> DOM made by react
```

## Component
```
function name should always Capitalized

function Demo(){
    return(

    )
}
export default Demo
```
