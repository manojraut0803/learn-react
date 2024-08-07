# Learning React 

## Can I use React without a framework?
```
You can use React without a framework, however we’ve found that most apps and 
sites eventually build solutions to common problems such as code-splitting, routing, 
data fetching, and generating HTML. These problems are common to all UI libraries, not just React.
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

>We can create our own react library and JSX

## Hooks
```
Hooks let you use different React features from your components. 
You can either use the built-in Hooks or combine them to build your own


const [count, setCount] = useState(10);

```

## Hooks
```
useState
        - useState is a React Hook that lets you add a state variable to your component.

useCallback
        - useCallback is a React Hook that lets you cache a function definition between re-renders.

useEffect
        - useEffect is a React Hook that lets you synchronize a component with an external system.

useRef
        - useRef is a React Hook that lets you reference a value that’s not needed for rendering.

useID
        - useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.
-------------------------------------------------
Custom Hooks
============


```

## Styles
```
Tailwind CSS
```

## Props
```
Properties
```

## Projects
- counter
- bgChanger
- passwordGenerator
- currencyConverter




