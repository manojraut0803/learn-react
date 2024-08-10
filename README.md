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

useLoaderData
        - 

useContext
        - useContext is a React Hook that lets you read and subscribe to context from your component.
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

## React Router

[React Router](https://reactrouter.com/en/main)
```
Link        -> in place of a tag [page reload/refresh in a tag]
NavLink     
react-router-dom
    Link
    NavLink

    Outlet

    createBrowserRouter
    
        - This is the recommended router for all React Router web projects. It uses the DOM History API to update the URL and manage the history stack.
    createRouterFromElements
    Route
        - Routes are perhaps the most important part of a React Router app. They couple URL segments to components, data loading and data mutations. Through route nesting, complex application layouts and data dependencies become simple and declarative.

        =>path, element, loader, action, errorElement
    RouterProvider
        - All data router objects are passed to this component to render your app and enable the rest of the data APIs.

```
## context API
```
Context provides a way to pass data through the component tree without having to pass props down manually at every level.

 With Context API, you can store data at the top level of the component tree and make it available to all other components that need it without passing props.

 This is especially useful for global data, such as user authentication, theme settings, or language preferences.

How the Context API Works
Context API allows data to be passed through a component tree without having to pass props manually at every level. This makes it easier to share data between components.

context => global variable  || createContext
provider => Provider
consumer => Consumer
useContext => useContext

State management
prop drilling => Prop drilling can make your code more  
                difficult to read and maintain, and can 
                also make it harder to refactor your components later on.

import from react
    const MyContext = Ract.createContext(defaultValues)                                 
                                                     # create context object. When React renders a component that
                                                        subscribes to this Context object, it will read the current
                                                        context value from the closest matching Provider above it in the tree.

    <MyContext.Provider value={}>
          {/* children components */}
    </MyContext.Provider>                           # The Provider component is used to wrap the part of your app 
                                                        where you want the context to be available

    
    const value = useContext(MyContext);            # In functional components, you can use the useContext hook to access the 
                                                        context value directly


================
```

## Local Storage 
```
 setItem()
 getItem()

 removeItem()
 clear()
```


## Redux and Redux toolkit
```
redux       core library
=====
-- A JS library for predictable and maintainable global state management
    Predictable
    Centralized
    Debuggable
    Flexible


react-redux
-----------
-- Official React bindings for Redux

REDUX
store
action
reducer

REACT
useSelecter
dispatch

methods
    useSelector
    useDispatch


redux-toolkit       Implimentation of Redux for wiring for conversation.
=============
-- The official, opinionated, batteries-included toolset for efficient Redux development

Always start with 
1) store [single source of truth]         configureStore sets up the store with good defaults, 
        [only file can be use in one proj]  including middleware and DevTools integration.


2) slices               A slice is a collection of Redux [reducer] logic and actions for 
    [createSlice]       a single feature of your app. It combines createSlice to generate 
                        actions and reducers automatically.

                        a) name
                        b) initialState
                        c) reducers


3) useSelecter
4) useDispatch  dispatch <-> reducer <-> store

```

## Projects
- counter
- bgChanger
- passwordGenerator
- currencyConverter
- website(reactRaouter)
- contextAPI
- todo (contextAPI & local storage )
- todo (redux-toolkit)


