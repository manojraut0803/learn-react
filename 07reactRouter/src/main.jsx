import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import About from "./components/About/About.jsx";
import Home from "./components/Home/Home.jsx";
import Layout from "./Layout.jsx";
import Contact from "./components/Contact/Contact";
import Login from "./components/userRegister/Login";
import GetStarted from "./components/userRegister/GetStarted";
import User from "./components/User/User";
import Github, { githubInfoLoader } from "./components/Github/Github";

// const router = createBrowserRouter([
// {
//   path: "/",
//   element: <Layout />,
//   children: [
//     {
//       path: "",
//       element: <Home />,
//     },
//     {
//       path: "about",
//       element: <About />,
//     },
//     {
//       path: "contact",
//       element: <Contact />,
//     },
//     {
//       path: "login",
//       element: <Login />,
//     },
//     {
//       path: "Get-Started",
//       element: <GetStarted />,
//     },
//   ],
// },
// ]);
// OR
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
      <Route path="Get-Started" element={<GetStarted />} />
      <Route path="user/:userid" element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path="/github" 
      element={<Github />} 
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>
);
